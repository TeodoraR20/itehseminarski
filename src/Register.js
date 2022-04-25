import React, {useState, useEffect} from 'react'
import {useNavigate } from "react-router-dom";
import Header from './Header';


function Register()
{

    useEffect(()=>{

if(localStorage.getItem('user-info'))
{
    navigate("/add");
}

    },[])

    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    let navigate = useNavigate();

async function signUp()
{

    let item = {name,password,email}
console.warn(item);

let result = await fetch("http://localhost:8000/api/register", {

method:'POST',
body:JSON.stringify(item),
headers:{
    "Content-Type":'application/json',
    "Accept":'application/json'
}

});

result =  await result.json();
//console.warn("result",result)

localStorage.setItem("user-info",JSON.stringify(result));
navigate("/add");

}

return (

<>

<Header/>
<div className="col-sm-6 offset-sm-3">

<h1>Register page</h1>

<br></br>
<input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="name"></input>
<br></br>
<input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password"></input>
<br></br>

<input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email"></input>

<br></br>
<button onClick={signUp} className="btn btn-primary">Uloguj se</button>


</div>
</>

)
}



export default Register;