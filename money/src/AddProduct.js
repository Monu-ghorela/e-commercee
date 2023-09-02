import { useState } from "react";
import axios from "axios";
import React from "react";

const AddProduct = () => {
  const [name, Setname] = useState("");
  const [price, Setprice] = useState("");
  const [category, Setcategory] = useState("");
  
  const[data,set_data]=useState([])
  let[image,set_Image]=useState('')
  let [error, SetError] = useState("");


  
  const AddUpProduct = async () => {

    if (!name || !price || !category) {
      SetError(true);
      console.warn(error);
      return false;
    }

    console.warn(name, price, category);
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    console.warn("userId", userId);
    let url='http://localhost:5000/api'
    const formdata= new FormData()
 formdata.append('image',image)
 formdata.append('category',category)
 formdata.append('price',price)
 formdata.append('name',name)

 axios.post(url,formdata).then((resp)=>{
   set_data(resp.data)
   console.log(data);
 })
 .catch(err=>{
   console.log(err)
 })
     };
 
  const twoFunctions = () => {
    AddUpProduct();
  };
  return (
      <>
    <div className="AddProduct">
    <form action="">

<label class="label" htmlFor="imageSelect">
  <input
    id="imageSelect"
    name="image"
    type="file"
    onChange={event=> set_Image(event.target.files[0])}
    required
  />
  <span>Edit</span>
</label>
<div className="image_block">hi</div>


      <input
        type="text"
        name="name"
        onChange={(e) => Setname(e.target.value)}
        value={name}
        placeholder="enter  Product name"
      />
      {error && !name && <span className="errorhandle">Enter Valid name</span>}
      <input
        type="text"
        name="price"
        onChange={(e) => Setprice(e.target.value)}
        value={price}
        placeholder="enter product  Price "
        />
      {error && !price && (
        <span className="errorhandle">Enter Valid price</span>
        )}

      <input
        type="text"
        name="category"
        onChange={(e) => Setcategory(e.target.value)}
        value={category}
        placeholder="enter category of product"
        />
      {error && !category && (
        <span className="errorhandle">Enter Valid category</span>
        )}

      <button onClick={twoFunctions}>Add Product</button>
        </form>
    </div>
    </>
  );
};
export default AddProduct;
