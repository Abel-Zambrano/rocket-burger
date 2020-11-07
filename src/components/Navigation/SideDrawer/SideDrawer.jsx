import React from 'react';
import Logo from '../../Logo/Logo';
import Title from '../../Title/Title';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
    let assignedClasses = ['SideDrawer', 'Closed'];
    if (props.open) {
        assignedClasses = ['SideDrawer', 'Open'];
    };
   
    return (
        <>
            <Backdrop clicked={props.closed} show={props.open}  />
            {console.log(props.closed)
            }
            <div className={assignedClasses.join(' ')}>
                <div className='SideDrawerBrand'>
                    <Logo />
                    <Title />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </>
    );
};

export default SideDrawer;