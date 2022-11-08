import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
const Login = ()=>{

    const [email, setEmail]=useState("");
    const [password, setPassword]= useState("");
    const navigate = useNavigate();
    

    useEffect(() => {
        const auth = localStorage.getItem("user");
        if(auth)
        {
            navigate('/');
        }
    }, [])
    const LoginHandle =async()=>{
        
        // let result= await fetch ('http://localhost:5000/login', {
        //     method: 'post',
        //     body: JSON.stringify({email,password}),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        // }) ;
        const LoginData = {
            email,
            password,
        }
        const {data} = await axios.post('http://localhost:5000/login', LoginData)
        console.log("login response: ", data);
        if(data.status == 200)
        {
            localStorage.setItem("user", JSON.stringify(data));
            navigate('/');
        }else{
            alert(data.message);
        }
    }
    return (
        <div className="register">
        <h1>Login Component </h1>
        <input className="registerbox" type='text' placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input className="registerbox"  type='password' value={password} placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={LoginHandle} className="appButton" type="button" >Login</button>
    </div>
        
    )
}

export default Login;