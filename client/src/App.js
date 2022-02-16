import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header/Header';
import QuoteCard from './QuoteCard/QuoteCard';
import ShuffleButton from './ShuffleButton/ShuffleButton';
import Footer from './Footer/Footer';

const randomQuote = (quotes, current) => {
  let next = quotes[Math.floor(Math.random()*quotes.length)];
  if(current.id === '0') {
    return next;
  }

  while(next.id === current.id) {
    next = quotes[Math.floor(Math.random()*quotes.length)];
  }

  return next;
};

const App = (props) => {

  const [quotes, setQuotes] = useState([]);
  const [current, setCurrent] = useState({ id: "0"});

  useEffect(() => {
    axios.get('https://thingsyouforget.com/quotes')
    .then(resp => {
      setQuotes(resp.data);
      setCurrent(randomQuote(resp.data, current));
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="App-main">
        <QuoteCard text={current.text} book={current.book} author={current.author} voice={current.voice}/>
        <ShuffleButton click={() => setCurrent(randomQuote(quotes, current))}/>
      </div>
      <Footer count={quotes.length}/>
    </div>
  );
      
};

export default App;
