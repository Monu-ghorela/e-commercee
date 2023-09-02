import React from 'react'
import { Link } from 'react-router-dom'
import Homepage from './Homepage'

export default function NavbarSearchbar() {
  const search_handle = () => {
    console.log("butto clicked")
  }
  const HandleMouseEnter = () => {
    console.warn("MOuse enter")

    return (
      <div><Homepage /></div>
    )
  }
  return (
    <div> <div className="Navbar2">

      <ul className="navbar-ul2">

        <li> <Link className="navbar-link" to="/BabyCare" onClick={HandleMouseEnter}> Baby Care  </Link></li>
        <li> <Link className="navbar-link" to="/HealthNutritions">HealthNutritions </Link></li>
        <li> <Link className="navbar-link" to="/WomenCare"> Women Care</Link></li>
        <li> <Link className="navbar-link" to="/PersonalCare">Personal Care </Link></li>
        <li> <Link className="navbar-link" to="/Ayurveda">Ayurveda </Link></li>
        <li> <Link className="navbar-link" to="/HealthEssentials">HealthEssentials </Link></li>
        <li className='searchbar'>
          <input className="Searchbox" type="text" placeholder="Search Products Here" />
          <button onClick={search_handle}><img className=" SearchIcon" src="searchBar.webp" /></button>
        </li>

      </ul>

    </div></div>
  )
}
