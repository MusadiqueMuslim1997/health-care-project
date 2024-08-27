import React from 'react'
import '../css/NavBar.css'
import logo from '../images/healthwire_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faLocationCrosshairs,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


export default function NavBar() {
  return (
  <>
  
  <header>
    <div className="header-container">
    <div className="header-a">
        <div className="logoSec">
            <div className="logo"><img src={logo} alt="" /></div>
            <div className="logo-title">Healthwire</div>
        </div>
        <div className="search-bar">
         <div className="city-list">
            <div className="location-sec">
                <div className="location-icn"><FontAwesomeIcon icon={faLocationCrosshairs}/></div>
                <div className="dropdown">
                <select>
      <option value="">
        City
      </option>
      <option value="option1">Karachi</option>
      <option value="option2">Islamabad</option>
      <option value="option3">Lahore</option>
    </select>
    </div>
    </div>
        </div>
         <div className="searching-tab">
            <input type="text"  placeholder='Search for medicines, lab tabs and doctors ...'/>
         </div>
         <div className="search-btn"><button><FontAwesomeIcon icon={faMagnifyingGlass}/></button></div>   
        </div>
       <div className="cart-btn">
        <div className="cart"><FontAwesomeIcon icon={faCartShopping} /></div>
        <div className="btn">
            <button className="login">Login</button> / 
            <button className="signup">Signup</button>
        </div>
        
        </div>
    </div>
    <div className="header-b"></div>
    </div>
  </header>
  
  </>
  )
}
