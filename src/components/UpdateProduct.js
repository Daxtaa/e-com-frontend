import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const UpdateProduct = ()=>{

    const [name, setName]= useState("");
    const [price, setPrice]= useState("");
    const [category, setCategory]= useState("");
    const [brand, setBrand]= useState("");
    const navigate = useNavigate();
    const params =useParams();
    console.log("params value: ",params.id)
    // useEffect(() => {
    //     const auth = localStorage.getItem("user");
    //     if(auth)
    //     {
    //         navigate('/');
    //     }
    // }, [])
    useEffect(()=>{
         getProductDetails();
        console.warn(params);
    },[]);

    const getProductDetails =async()=> {
        console.warn(params);
        let result = await axios.get(`http://localhost:5000/get-details/${params.id}`);
    
        console.log("Result get: ",result)
        setName(result.data.name);
        setPrice(result.data.price);
        setCategory(result.data.category);
        setBrand(result.data.brand);
    }
    const update =async ()=>{
        let result = await axios.put(`http://localhost:5000/update-product/${params.id}`, {

            method: 'put',
            body: JSON.stringify({name,price,category,brand}),
            headers: {
                'Content-Type': 'application/json'
            }

        });
        result=await result.json();
        navigate('/');
    }
    return (

        <div className="register">
            <h1>update Product Component </h1>
            <input className="registerbox" type='text' placeholder="Enter Product Name" value={name} onChange={(e)=>setName(e.target.value)} />
            
            <input className="registerbox" type='text' placeholder="Enter Price" value={price} onChange ={(e)=>setPrice(e.target.value)} />
            <input className="registerbox"  type='text' value={category} placeholder="Enter Category" onChange={(e)=>setCategory(e.target.value)} />
            <input className="registerbox"  type='text' value={brand} placeholder="Enter Brand Name" onChange={(e)=>setBrand(e.target.value)} />
            <button onClick={update} className="appButton" type="button" >Update Product</button>
        </div>
        

    )


}

export default  UpdateProduct;