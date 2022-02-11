import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header/Header';
import QuoteCard from './QuoteCard/QuoteCard';
import ShuffleButton from './ShuffleButton/ShuffleButton';
import Footer from './Footer/Footer';

const App = (props) => {

  const [quotes, setQuotes] = useState([]);
  const [current, setCurrent] = useState({});
  
  const randomQuote = (quotes) => {
    return quotes[Math.floor(Math.random()*quotes.length)];
  };

  useEffect(() => {
    axios.get('https://thingsyouforget.com/quotes')
    .then(resp => {
      setQuotes(resp.data);
      setCurrent(randomQuote(resp.data));
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="App-main">
        <QuoteCard text={current.text} book={current.book} author={current.author} voice={current.voice}/>
        <ShuffleButton click={() => setCurrent(randomQuote(quotes))}/>
      </div>
      <Footer />
    </div>
  );
      
};

export default App;
