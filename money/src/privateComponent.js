import React from "react";
import { Navigate,Outlet } from "react-router-dom";
const PrivateComponent=()=>{
    const authorizaton= localStorage.getItem('user');

return authorizaton?<Outlet/>:<Navigate to="./Signup"/>

}
export default PrivateComponent; 