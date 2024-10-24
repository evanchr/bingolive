import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Inscription() { 
  const [email, setEmail] = useState(""); 
  const [passw, setPassw] = useState(""); 
  const [nom, setNom] = useState(""); 
  const [prenom, setPrenom] = useState(""); 
  const [dataInput, setDataInput] = useState(""); 

  const submitThis = (e) => {
    e.preventDefault(); 
    const info = { email, passw, nom, prenom }; 
    setDataInput([info]);
  };

  return (
<div className="inscription">
	<h2>Inscription</h2>
	<form onSubmit={submitThis}> 
	<div> 
		<label htmlFor="nom">Nom</label>
		<input type="text" name="nom" id="nom" value={nom} onChange={(e) => setNom(e.target.value)} /> 
	</div> 
	<div> 
		<label htmlFor="prenom">Prénom</label>
		<input type="text" name="prenom" id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} /> 
	</div> 
	<div> 
		<label htmlFor="email">Email</label>
		<input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} /> 
	</div> 
	<div> 
		<label htmlFor="passw">Mot de passe</label>
		<input type="password" name="passw" id="passw" value={passw} onChange={(e) => setPassw(e.target.value)} /> 
	</div>  
	<button type="submit">S'inscrire</button>
	</form>
	<p>Vous avez déjà un compte ? <Link to="/login">Connectez-vous ici</Link></p>
</div>
  );
}

export default Inscription;
