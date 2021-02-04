import React from "react";
import Coordonnées from '../components/Coordonnées';
import Equipe from '../components/Equipe';
import Info from '../components/Info';
import Objectif from '../components/Objectif';
import Titre from '../components/Titre';

import '../App.css';


const Aboutus=() => {
  return (
    <div className="App">
      <Titre />
      <Equipe 
        name="Raphaëlle, Rachelle, Ingrid, Alex, Aurélien, Kévin,Marc" 
      />
      <Objectif />
      <Info />
      <Coordonnées />
    </div>
    
  );
}

export default Aboutus;