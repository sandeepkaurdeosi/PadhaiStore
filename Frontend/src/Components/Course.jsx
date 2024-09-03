import React, { useEffect, useState } from 'react'
import Card from './Card.jsx'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Course() {
    const[book,setBook]=useState([])
    useEffect(()=>{
        const getBook=async()=>{
            try {
              const res = await axios.get('http://localhost:4000/book')
                console.log(res.data)
                setBook(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getBook();
    },[])
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  dark:bg-slate-900 dark:text-white '>
    <div className='pt-28 items-center justify-center text-center  dark:bg-slate-900 dark:text-white'>
        <h1 className='text-2xl font-semibold md:text-4xl  dark:bg-slate-900 dark:text-white'>
             We're delighted to have you <span className='text-pink-500'>Here! :)</span>
             </h1>
        <p className='mt-12'>
        Dive into a world of knowledge with our specially curated courses, available exclusively after you log in. Once inside, you'll have access to a vast collection of books and resources, handpicked to enhance your learning journey. Whether you're expanding your professional skills or indulging in a new subject, our seamless platform allows you to browse, purchase, and start reading with ease. Log in now to unlock your path to learning and discover the books that will shape your future.
        </p>
        <Link to={"/"}>
        <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 mt-6">Back</button>
        </Link>
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
            book.map((item)=>(
                <Card item={item} key={item.id}/>
            ))
        }
    </div>
    </div>
    </>
  )
}

export default Course