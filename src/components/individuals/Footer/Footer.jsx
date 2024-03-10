import React from 'react'
import "./footer.scss"

const logo = require("../../../images/logo.jpg")
function Footer() {
    return (
        <div className='footerContainer'>
            <div className='footerWrapper'>
                <div className='footerDetails'>
                    <div className='brandDetails'>
                        <img src={logo} alt="" />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, sed qui voluptatum veritatis debitis porro amet necessitatibus ipsum reiciendis iure neque eius nesciunt tempora. Odio porro doloribus itaque temporibus ratione?</p>
                    </div>

                    <div className='siteLinks'>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Contact Us</li>
                            <li>Login</li>
                        </ul>
                    </div>

                </div>
                <div className='footerAddress'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aut provident eos a dolor aliquid? Unde minima, cupiditate quae suscipit hic obcaecati nemo modi numquam placeat illo ipsa itaque odit?</p>
                </div>
            </div>
        </div>
    )
}

export default Footer