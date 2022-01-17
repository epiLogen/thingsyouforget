import React from 'react';
import './ShuffleButton.css';

import { FaDice } from 'react-icons/fa';

const shufflebutton = (props) => {
    return <button className="shuffle-button" type="button" onClick={props.click}><FaDice /></button>
};

export default shufflebutton;