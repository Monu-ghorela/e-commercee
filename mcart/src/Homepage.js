import React from 'react'
import { Link } from 'react-router-dom'
import NavbarSearchbar from './NavbarSearchbar'

export default function Homepage() {
  return (<><div className='Homepage'>

    <div><NavbarSearchbar/></div>
    <h1>shop By Category</h1>
    <ul className='Categories-Homepage'>
    <li> <Link className="Homepage-link navbar-link" to="/BabyCare"> <div className='Categories'><h3>Baby Care</h3></div> </Link></li>
<li> <Link className="Homepage-link navbar-link" to="/HealthNutritions"><div className='Categories'><h3>HealthNutritions</h3></div> </Link></li>
<li> <Link className="Homepage-link navbar-link" to="/WomenCare"> <div className='Categories'><h3>Women Care</h3></div></Link></li>
<li> <Link className="Homepage-link navbar-link" to="/PersonalCare"><div className='Categories'><h3>Personal Care</h3></div> </Link></li>
<li> <Link className="Homepage-link navbar-link" to="/Ayurveda"><div className='Categories'><h3>Ayurveda</h3></div> </Link></li>
<li> <Link className="Homepage-link navbar-link" to="/HealthEssentials"><div className='Categories'><h3>HealthEssentials</h3></div> </Link></li>

      
    </ul>
  </div>
  </>
  )
}
