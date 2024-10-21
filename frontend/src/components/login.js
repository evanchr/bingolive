import React,{useState} from 'react' 

const Login=()=>{ 
	const [email,setEmail]=useState(""); // Permet de stocker les valeurs donnés par l'utilistaeur 
	const [passw,setPassw]=useState(""); 
	const[dataInput, setDataInput]=useState(""); 
	const submitThis=()=>{
		const info={email:email,passw:passw}; 
		setDataInput([info]);
	}
	return(
	<div>
		<form action="" onSubmit={submitThis}> 
            
			<div> 
				<label htmlFor="email">Email</label>
				<input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/> 
			</div> 
			<div> 
				<label htmlFor="passw">Mot de passe</label>
			<input type="password" name="passw" id="passw" value={passw} onChange={(e)=>setPassw(e.target.value)}/> 
			</div>  
			<button type="submit">Connexion</button>
		</form>
	</div>
)} 

export default Login    
