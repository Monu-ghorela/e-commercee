import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <div className="Navbar">
      <img className="mCartLogo" src="mCartLogo.png" alt="logo" />
<ul className="navbar-ul">


<li> <Link className="navbar-link" to="/ConsultOnline"> Doctors </Link></li>
<li> <Link className="navbar-link" to="/Pharmacy">Pharma </Link></li>
<li> <Link className="navbar-link" to="/LabTests"> Lab Tests </Link></li>
<li> <Link className="navbar-link" to="/Blogs"> Blogs </Link></li>
<li> 
  <Link className="cartImage" to="/cart"><img src="pexels-photo-953864.webp" alt="" /></Link>
        
      </li>
      <li> 
  <Link className="cartImage" to="/profile"><img src="profileLogo.jpg" alt="" /></Link>
        
      </li>
      </ul>
    </div>
   
    </>
  );
}
