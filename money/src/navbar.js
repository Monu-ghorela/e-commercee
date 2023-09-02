import React, { useEffect } from "react";
import { Link , useNavigate } from "react-router-dom";


const authorizaton = localStorage.getItem('user');
const Navbar = () => {
  
  const navigate = useNavigate();
 
  
  
  const logout = () => {
    localStorage.clear();
    window.location.reload(false);

    const authorizaton= localStorage.getItem('user');
      if(!authorizaton)
     {

      navigate('/SignUp')
     }
   

  }

  return (

    <div class="navbar">
       <img  class="profilelogo" src="OIP (1).jpg" alt="logo" /> 
      {authorizaton ?
        <ul class="navbar-ul">

          <li> <Link id="abc" to="/HOmepage"> Homepage</Link></li>
          <li> <Link id="abe" to="/AddProducts"> Add Products</Link></li>
          <li> <Link id="abd" to="/products"> Products</Link></li>
          <li> <Link id="abe" to="/profile"> Profile</Link></li>

          <li><Link id="abf" onClick={logout} to="/SignUp"> LogOut({JSON.parse(authorizaton).name})</Link></li>
        </ul>

        :
        <ul class="navbar-ul nav-right">
          <li><Link id="abf" to="/SignUp"> SignUp</Link></li>
          <li> <Link id="abc" to="/login"> login</Link></li>
        </ul>
      }




    </div>
  )


}
export { Navbar };