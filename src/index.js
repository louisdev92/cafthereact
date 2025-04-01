import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
        <title>CafThé - Votre Boutique de Café et Thé</title>
        <link rel="icon" type="image/png" href="/Cafthe.png"/>
    </React.StrictMode>
);

