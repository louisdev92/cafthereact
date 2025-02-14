import React from 'react';
import '../styles/App.css';
import Presentation from '../components/Presentation';
import Competences from '../components/Competences';
import Projets from '../components/Projets';

function Home() {
    return (
        <div className="App">
            <main>
                <Presentation />
                <Competences />
                <Projets />
            </main>
        </div>
    );
}
export default Home;