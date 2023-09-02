import { useEffect } from "react";
import { ReactDOM } from "react";
import { json, useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
const Updateproduct = () => {
    const [name, Setname] = useState("");
    const [price, Setprice] = useState("");
    const [category, Setcategory] = useState("");
    const params = useParams();
    const navigate= useNavigate();
    useEffect(() => {
        getProductDetails();
    },[]

    )
    const getProductDetails = async() => {
        console.warn(params)
        let result= await fetch(`http://localhost:5000/Product/${params.id}`)
        result= await result.json();
        Setname(result.name)
        Setcategory(result.category)
        Setprice(result.price);



    }




    const updateProduct = async () => {
        
        let result=await fetch(`http://localhost:5000/Product/${params.id}`,
    {method:'put',
body:JSON.stringify({name,category,price}),
headers:{
    
    'Content-Type': 'application/json',
}
    }
        ) 
        result=await result.json()
        console.warn(result)
        navigate('/products')



    }
    return (
        <div className="AddProduct">

            <h1>update product</h1>
            <input type="text" onChange={(e) => Setname(e.target.value)} value={name} placeholder="enter  Product name" />

            <input type="text" onChange={(e) => Setprice(e.target.value)} value={price} placeholder="enter product  Price " />

            <input type="text" onChange={(e) => Setcategory(e.target.value)} value={category} placeholder="enter category of product" />


            <button onClick={updateProduct}>update Product</button>
        </div>
    )
}
export default Updateproduct;