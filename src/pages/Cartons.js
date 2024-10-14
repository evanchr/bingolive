// src/pages/Cartons.js
import React from 'react';
import Carton from '../components/cartons';

function Cartons() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  }}>
      <h1>Cartons</h1>
      <p>Génère un carton exemple</p>
      <Carton />
    </div>
  );
}

export default Cartons;
