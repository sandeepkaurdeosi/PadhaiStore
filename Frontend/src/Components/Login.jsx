import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
import {  useLocation, useNavigate } from 'react-router-dom';
import Signups from '../Signup/Signups'
import axios from 'axios'
import toast from 'react-hot-toast'

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const userInfo={
         
          email:data.email,
          password:data.password,
        }
        await axios.post("http://localhost:4000/user/login",userInfo)
        .then((res)=>{
          console.log(res.data)
          if(res.data){
            toast.success('Successfully LoggedIn!');
            document.getElementById("my_modal_3").close();
            setTimeout(() => {
              window.location.reload();
              localStorage.setItem("Users", JSON.stringify(res.data.user));
            }, 1000);
          }
          
        }).catch((err)=>{
          if(err.response)
          {
            console.log(err);
            toast.error("error:"+err.response.data.message);
            setTimeout(() => {}, 2000);
          }
        })
      }
      
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
        <dialog id="my_modal_3" className="modal">
  <div className="modal-box  dark:text-white dark:bg-slate-900">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>✕</button>
    
    <h1 className=" text-3xl">Login</h1>
    <div className='space-y-2 mt-6'>
        <span>Email</span> 
        <br/>
        <input type='email' placeholder='Enter your email' className='w-80 outline-none  dark:text-white dark:bg-slate-900' {...register("email", { required: true })}></input>
       <br/> {errors.email && <span className='text-pink-500 mt-2'>*This field is required</span>}
    </div>
    <div className='space-y-2 mt-8'>
        <span>Password</span> 
        <br/>
        <input type='text' placeholder='Enter your password' className='w-80 outline-none  dark:text-white dark:bg-slate-900' {...register("password", { required: true })}></input>
       <br/> {errors.password && <span className='text-pink-500 mt-2'>*This field is required</span>}
    </div>
    <div className='flex justify-between mt-9'>
        <button type='submit'  className='bg-pink-500 text-white rounded px-4 py-1'>Login</button>
        <p>Not registered?<Link to="/Signups" className='text-sky-500 underline'>Signup</Link></p>
    </div>
    </form>
  </div>
</dialog>
    </div>
  )
}

export default Login