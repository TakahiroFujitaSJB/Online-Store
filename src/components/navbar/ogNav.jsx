import "./navbar.scss"
import Logo from '../../assets/img/Logo.png'
import menuIcon from '../../assets/img/menu.png'
import React, { useState } from "react";

function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav>
            <div className='left'>
                <a href="/" className="logo">
                    <img src={Logo}  alt="" />
                    <span> Online Store </span>
                </a>
                <a href="/"> Home </a>
                <a href="/list"> Explore </a>
            </div>
            <div className='right'>
                <a href="/login" > Sign In </a>
                <a href="/signup" className="register"> Sign Up </a>
                <div className="menuIcon">
                    <img 
                        src={menuIcon} 
                        alt='' 
                        onClick={() => setOpen((prev) => !prev)}
                    />
                </div>

                <div className={open ? "menu active" : "menu"}>
                    <a href="/"> Home </a>
                    <a href="/list"> Explore </a>
                    <a href="/"> Sign In </a>
                    <a href="/"> Sign Up </a>
          
                </div>
            </div>

        </nav>
    )
}

export default Navbar;