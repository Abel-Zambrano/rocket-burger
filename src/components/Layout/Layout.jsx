import React from 'react';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = (props) => (
        <>
            <Toolbar />
            <SideDrawer />
            <main className="content">{props.children}</main>            
        </>
    );

export default Layout;