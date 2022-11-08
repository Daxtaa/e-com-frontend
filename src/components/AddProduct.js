import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AddProduct = ()=>{

    const [name, setName]= useState("");
    const [price, setPrice]= useState("");
    const [category, setCategory]= useState("");
    const [brand, setBrand]= useState("");
    const navigate = useNavigate();

    // useEffect(() => {
    //     const auth = localStorage.getItem("user");
    //     if(auth)
    //     {
    //         navigate('/');
    //     }
    // }, [])

    const AddProduct =async ()=>{
        let result= await fetch ('http://localhost:5000/add-product', {
            method: 'post',
            body: JSON.stringify({name,price,category,brand}),
            headers: {
                'Content-Type': 'application/json'
            },
        }) ;
        result=await result.json();
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result));
        if(result)
        {
            navigate('/');
        }
    }
    return (

        <div className="register">
            <h1>Add Product Component </h1>
            <input className="registerbox" type='text' placeholder="Enter Product Name" value={name} onChange={(e)=>setName(e.target.value)} />
            
            <input className="registerbox" type='text' placeholder="Enter Price" value={price} onChange ={(e)=>setPrice(e.target.value)} />
            <input className="registerbox"  type='text' value={category} placeholder="Enter Category" onChange={(e)=>setCategory(e.target.value)} />
            <input className="registerbox"  type='text' value={brand} placeholder="Enter Brand Name" onChange={(e)=>setBrand(e.target.value)} />
            <button onClick={AddProduct} className="appButton" type="button" >Add Product</button>
        </div>
        

    )


}

export default  AddProduct;