import React from 'react'
import Navbar from '../Components/Navbar.jsx'
import About from '../Components/About.jsx'
import Footer from '../Components/Footer.jsx'
function Abouts() {
 
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
        <Navbar/>
        <div>
            <About/>
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default Abouts