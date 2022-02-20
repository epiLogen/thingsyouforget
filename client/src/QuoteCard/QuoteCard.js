import React from 'react';
import './QuoteCard.css';
import parse from 'html-react-parser';

const quotecard = (props) => {
    return (
        <div className="quote-card">
          <div className="quote-text">"{parse(props.text)}"</div>
          <div className="quote-source"> 
            <div className="voice">- {props.voice}</div>
            <div className="source">
              <span className="author">{props.author}: </span>
              <span className="book">{props.book}</span>
            </div> 
          </div>
        </div>
    );
};

export default quotecard;