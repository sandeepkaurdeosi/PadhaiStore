import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Course from '../Components/Course'


function Courses() {
  return (
    <>
   <div className='dark:bg-slate-900 dark:text-white'>
   <div className='dark:bg-slate-900 dark:text-white'>
        <Navbar/>
        <div className='min-h-screen  dark:bg-slate-900 dark:text-white '>
            <Course/>
        </div>
        <Footer/>
    </div>
   </div>
    </>
  )
}
export default Courses