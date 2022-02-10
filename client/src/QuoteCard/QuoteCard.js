import React from 'react';
import './QuoteCard.css';

const quotecard = (props) => {
    return (
        <div className="quote-card">
          <div className="quote-text">"{props.text}"</div>
          <div className="quote-source"> 
            <span className="author">- {props.author},</span> 
            <span className="book"> {props.book}</span>
          </div>
        </div>
    );
};

export default quotecard;