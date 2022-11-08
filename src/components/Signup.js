import React from "react";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
const Signup = ()=>{

    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("user");
        if(auth)
        {
            navigate('/');
        }
    }, [])
     const addUser =async()=>{
        // let {result}= await fetch ('http://localhost:5000/register', {
        //     method: 'post',
        //     body: {name,email,password},
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        // }) ;
        const userData = {
            name,
            email,
            password,
        }
        const {data} = await axios.post('http://localhost:5000/register', userData)
        console.warn("result data: ",data);
        // localStorage.setItem("user", JSON.stringify(result));
        if(data.status == 200)
        {
            navigate('/login');
        }else{
            alert(data.message)
        }
     }
    return(
        <div className="register">
            <h1>Signup Component </h1>
            <input className="registerbox" type='text' placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)} />
            
            <input className="registerbox" type='text' placeholder="Enter Email" value={email} onChange ={(e)=>setEmail(e.target.value)} />
            <input className="registerbox"  type='password' value={password} placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={addUser} className="appButton" type="button" >Register</button>
        </div>

    )
}

export default Signup;