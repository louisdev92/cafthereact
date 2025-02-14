import React from 'react';
/* install react-router-dom */
import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../App.js';

function Layout(props) {
    return (
        <>
            <Header/>
            {/* là ou s'affiche les pages enfants */}
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;