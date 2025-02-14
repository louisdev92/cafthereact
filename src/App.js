// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Competences from './components/Competences';
import Projets from './components/Projets';
import Footer from './components/Footer';
import LegalNotice from "./pages/LegalNotice";
import RGPD from './pages/RGPD';

import './styles/App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Presentation />
                            <Competences />
                            <Projets />
                        </>
                    } />
                    <Route path="/mention-legal" element={<LegalNotice />} />
                    <Route path="/rgpd" element={<RGPD />} />
                </Routes>
            </main>
            <Footer />
            <a href="#" id="scrollToTop" className="scroll-to-top">
                <img src="./assets/img/fleche.png" alt="Scroll to top" />
            </a>
        </div>
    );
}

export default App;