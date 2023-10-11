import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import {Link, useNavigate } from "react-router-dom";
function Navbar() {
    const [open,setOpen] = useState(false); 
    const currentUser=false;

     return ( 

    <div className= "navbar">
        
        <div className="container">
            <div className="logo">
                <Link to = "/" className='link'>
                    <span className='logo-txt'>Zairzest<al>2.0</al></span>
                </Link>
            </div>
            <div className='links'>
              
                    <Link to = "/about" className='link'>
                        <span className=''>About Us</span>
                    </Link>
                {!currentUser && <Link to="/register" className="link"><span>Register</span></Link>}
                {!currentUser &&  <Link to="/loginr" className="link"><span>Sign In</span></Link>}
                {currentUser && (
                    <div className="user" onClick={()=>setOpen(!open)}>
                        <img className='Nav-img' src = {currentUser.img || "https://picsum.photos/200"} alt = "profile" />
                        <span>{currentUser?.username} </span>
                        {open && <div className="options">
                            <Link className='link' to=  "/dashboard">My Dashboard</Link>
                        </div>}
                    </div>
                )
                }
            </div>
        </div>
    </div>      
  )
}

export default Navbar