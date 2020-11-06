import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <button 
        className={[props.btnType].join(' ')}
        onClick={props.clicked}>{props.children}</button>
    );
};

export default Button;