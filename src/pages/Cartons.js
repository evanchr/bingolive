// src/pages/Cartons.js
import React, { useState } from 'react';
import Carton from '../components/cartons';

function Cartons() {
  const [cartonKey, setCartonKey] = useState(0);

  const nouveauCarton = () => {
    setCartonKey(cartonKey + 1); // Update the key to re-render the Carton component
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Cartons</h1>
      <p>Génère un carton exemple</p>
      
      {/* Render the Carton component */}
      <Carton key={cartonKey} />
      <button onClick={nouveauCarton} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px', backgroundColor: 'orange', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Générer un nouveau carton
      </button>
    </div>
  );
}

export default Cartons;
