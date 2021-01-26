import React from 'react';
import ConnexionBtn from './ConnexionBtn';
import "./Homepage.css";
import SimulatorBtn from './SimulatorBtn';

function Homepage() {
    return (
        <div className="homepage">
        <h1 className="homepage-title">Réduisez votre empreinte carbone</h1> 
        <div className="homepage-btn">
            <SimulatorBtn />
            <ConnexionBtn />
        </div>
    </div>
    )
}

export default Homepage;