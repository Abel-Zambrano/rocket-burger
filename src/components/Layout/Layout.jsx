import React, { useState } from 'react';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = (props) => {
    const [showSideDrawer, setShowSideDrawer] = useState(true);

    const sideDrawerHandler = () => {
        setShowSideDrawer(false);
    };

    return (
        <>
            <Toolbar />
            <SideDrawer open={showSideDrawer} closed={sideDrawerHandler} />
            <main className="content">{props.children}</main>            
        </>
    )};

export default Layout;