import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Contact from '../Components/Contact'

function Contacts() {
  return (
    <>
    <div>
    <Navbar/>
    <div className='min-h-screen  dark:bg-slate-900 dark:text-white '>
        <Contact/>
    </div>
    <Footer/>
    </div></>
  )
}

export default Contacts