import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductList = ()=>{

  const user = JSON.parse(localStorage.getItem('user'));

    const [products, setProducts]= useState([]);
    const navigate = useNavigate();
    useEffect(()=> {
        getProducts();
        
    }, []);
    const getProducts = async ()=> {
        let result= await fetch ('http://localhost:5000/products');
        result = await result.json();
        setProducts(result);
    }

    const deleteProduct = async (id)=>{
        let result = await fetch (`http://localhost:5000/delete/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result)
        {
            alert("Deleted Succesfully...")
            getProducts();
        }
    }
    return (
        <div className="productList">
            
            <ul>
            <h2>Products</h2>
            <li>S.No</li>
            <li>Name</li>
            <li>Price</li>
            <li>Category</li>
            <li>Brand</li>
            <li>Operation</li>
            </ul>

            {
                products.map((item, index)=>
                <ul key={item._id}>
                
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>{item.price}</li>
                <li>{item.category}</li>
                <li>{item.brand}</li>
                <li>
                    <button onClick={()=>deleteProduct(item._id)}>Delete</button>
                    <Link to={"/update/"+item._id}>Update</Link>
                    </li>
                </ul>
                )
            }

        </div>


    )


}

export default ProductList;