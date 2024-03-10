import React from 'react'
import "./navbar.scss";
import { Link } from "react-router-dom";

const menu = require("../../../../src/images/menu.png")

function Navbar() {
    return (
        <div className='navbarContainer'>
            <div className='navbarWrapper'>
                <Link to="/" className="logoLink">
                    <h1>Dummy<span>Logo</span></h1>
                </Link>

                <nav>

                    <ul>
                        <Link to="/aboutus">
                            <li>About Us</li>
                        </Link>
                        <Link to="/contactus">
                            <li>Contact Us</li>
                        </Link>
                        <Link to="/login">
                            <li>Login</li>
                        </Link>
                        
                    </ul>
                    <img src={menu} alt="" />
                </nav>
            
            </div>
        </div>
    )
}

export default Navbar