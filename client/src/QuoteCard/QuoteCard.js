import React from 'react';
import './QuoteCard.css';

const quotecard = (props) => {
    return (
        <div className="quote-card">
          <div className="quote-text">"{props.text}"</div>
          <div className="quote-source">- {props.author}, <i>{props.book}</i></div>
        </div>
    );
};

export default quotecard;