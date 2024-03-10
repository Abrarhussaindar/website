import React from 'react'
import "./home.scss"
import Navbar from '../../individuals/Navbar/Navbar'
import Footer from '../../individuals/Footer/Footer'

function Home() {
    return (
        <div className='homepage'>
            <Navbar />
            <div>
                main section
            </div>
            <Footer />
        </div>
    )
}

export default Home