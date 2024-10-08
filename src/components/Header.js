import { LOGO_URL } from "../utils/constants.js";
import { useState } from "react";
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus'
const Header = () => {
   const [btnName, setBtnName] = useState("Login");
   const onlineStatus = useOnlineStatus();
   return (
      <div className='header-container'>
         <div className="logo-conatiner">
            <div className='logo'>
               <img src={LOGO_URL}></img>
            </div>


         </div>
         <div className='nav-cont'>
            <ul>
               <li> <b>Status: {onlineStatus === true ? "Online" : "Offline"}</b> </li>
               <li className='nav-item'>
                  <Link to="/grocery">Grocery</Link></li>
               <li className='nav-item'></li>
               <li className='nav-item'>
                  <Link to="/">Home</Link></li>
               <li className='nav-item'>
                  <Link to="/about">About</Link></li>
               <li className='nav-item'>   <Link to="/contact">Contact</Link></li>
               <li className='nav-item'>Cart</li>
               <button onClick={() => {
                  btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
               }}>{btnName}</button>

            </ul>

         </div>
      </div>
   )

}

export default Header