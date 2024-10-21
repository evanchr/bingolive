import React,{useState} from 'react' 

function Inscription() { 
	const [email,setEmail]=useState(""); // Permet de stocker les valeurs donnés par l'utilistaeur 
	const [passw,setPassw]=useState(""); 
    const [nom,setNom]=useState(""); 
	const [prenom,setPrenom]=useState("");
	const[dataInput, setDataInput]=useState(""); 

	const submitThis=()=>{
		const info={email:email,passw:passw, nom:nom,prenom:prenom}; 
		setDataInput([info]);
	};
    
	return(
	<div>
		<form action="" onSubmit={submitThis}> 
            <div> 
				<label htmlFor="email">Nom</label>
				<input type="text" name="nom" id="nom" value={email} onChange={(e)=>setNom(e.target.value)}/> 
			</div> 
            <div> 
				<label htmlFor="email">Prenom</label>
				<input type="text" name="prenom" id="prenom" value={email} onChange={(e)=>setPrenom(e.target.value)}/> 
			</div> 
			<div> 
				<label htmlFor="email">Email</label>
				<input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/> 
			</div> 
			<div> 
				<label htmlFor="passw">Mot de passe</label>
			<input type="password" name="passw" id="passw" value={passw} onChange={(e)=>setPassw(e.target.value)}/> 
			</div>  
			<button type="submit">Inscription</button>
		</form>
	</div>
)} 

export default Inscription  
