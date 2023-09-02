import axios from "axios";
import React from "react";
import { useState } from "react";
// import Post from "./Postservice";
// import axios from "axios"
// const FormData = require('form-data');

export default function UploadFile() {
  let[image,set_Image]=useState('')
  const[data,set_data]=useState([])

  const Set_Image=async(event)=>{
    console.log(image)
    let url='http://localhost:5000/api'
   const formdata= new FormData()
formdata.append('image',image)
axios.post(url,formdata).then((resp)=>{
  set_data(resp.data)
})
.catch(err=>{
  console.log(err)
})
}
console.log(data)
  
  return (
    <>
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
      <button  onClick={Set_Image}>submit</button>
      </form>
      <div id="profilePic"></div>
    </>
  );
}
