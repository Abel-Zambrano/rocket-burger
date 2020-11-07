import React from 'react';
import './Logo.css';
import rocket from '../../assets/images/rocket.png';

const Logo = () => {
    return (
        <div className='Logo'>
            <img src={rocket} alt="logo"/>
            <h1 className='title'>Rocket Burger</h1>
        </div>
    );
};

export default Logo;