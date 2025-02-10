import React from 'react';
/* install react-router-dom */
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout(props) {
    return (
        <>
            <Header/>
            <Navbar/>
            {/* là ou s'affiche les pages enfants */}
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;