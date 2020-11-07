import React from 'react';
import Logo from '../../Logo/Logo';
import Title from '../../Title/Title';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';

const SideDrawer = (props) => {
    return (
        <div className='SideDrawer'>
            <div className='SideDrawerBrand'>
                <Logo />
                <Title />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
};

export default SideDrawer;