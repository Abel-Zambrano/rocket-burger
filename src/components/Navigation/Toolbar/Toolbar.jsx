import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Title from '../../Title/Title';

const Toolbar = () => {
    return (
        <header className='Toolbar'>
            <div>Menu</div>
            <div className='Brand'>
                <Logo />
                <Title />
            </div>
            <nav className='DesktopOnly'>
                <NavigationItems />
            </nav>
        </header>
    );
};

export default Toolbar;