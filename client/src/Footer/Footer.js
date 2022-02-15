import React from 'react';
import './Footer.css';


const footer = (props) => {
    return <footer className="App-footer">&copy; epiLogen 2022 &ensp;&bull;&ensp; {props.count} quotes</footer>
};

export default footer;