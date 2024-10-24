import React,{useState} from 'react' 
import { Link } from 'react-router-dom';

const Login=()=>{ 

	const [email,setEmail]=useState(""); // Permet de stocker les valeurs donnés par l'utilistaeur 
	const [passw,setPassw]=useState(""); 
	const[dataInput, setDataInput]=useState(""); 
	const submitThis=()=>{
		const info={email:email,passw:passw}; 
		setDataInput([info]);
	}
	return(
		<div className="login">
			<h2>Connexion</h2>
			<form action="" onSubmit={submitThis}> 
				
				<div> 
					<label htmlFor="email">Email</label>
					<input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/> 
				</div> 
				<div> 
					<label htmlFor="passw">Mot de passe</label>
				<input type="password" name="passw" id="passw" value={passw} onChange={(e)=>setPassw(e.target.value)}/> 
				</div>  
				<button type="submit">Se connecter</button>
			</form>
			<p>Vous n'avez pas de compte ? <Link to="/inscription">Inscrivez-vous ici</Link></p>
		</div>
	)}
	
 

export default Login    
