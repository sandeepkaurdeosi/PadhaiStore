import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
  
    try {
      const res = await axios.post('http://localhost:4000/user/signup', userInfo);
  
      // Log the response to see its structure
      console.log(res.data);
  
      // Check and store the user data in localStorage
      if (res.data) {
        localStorage.setItem("User", JSON.stringify(res.data));
        toast.success('Successfully signed up!');
        navigate(from, { replace: true });
      } else {
        console.log("No user data found in the response");
      }
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error('Error: ' + err.response.data.message);
      } else {
        toast.error('An error occurred. Please try again.');
      }
    }
  };
  
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px]">
        <div className="modal-box dark:text-white dark:bg-slate-900">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            
            <h3 className=" text-3xl">Signup</h3>
            <div className='space-y-2 mt-6'>
              <span>Full Name</span>
              <br/>
              <input type='text' placeholder='Enter your full name' className='w-80 outline-none dark:text-white dark:bg-slate-900' {...register("fullname", { required: true })} />
              <br/> {errors.fullname && <span className='text-pink-500 mt-2'>*This field is required</span>}
            </div>
            <div className='space-y-2 mt-6'>
              <span>Email</span>
              <br/>
              <input type='email' placeholder='Enter your email' className='w-80 outline-none dark:text-white dark:bg-slate-900' {...register("email", { required: true })} />
              <br/> {errors.email && <span className='text-pink-500 mt-2'>*This field is required</span>}
            </div>
            <div className='space-y-2 mt-8'>
              <span>Password</span>
              <br/>
              <input type='password' placeholder='Enter your password' className='w-80 outline-none dark:text-white dark:bg-slate-900' {...register("password", { required: true })} />
              <br/> {errors.password && <span className='text-pink-500 mt-2'>*This field is required</span>}
            </div>
            <div className='flex justify-between mt-9'>
              <button className='bg-pink-500 text-white rounded px-4 py-1'>Signup</button>
              <p>Already registered?{" "}
                <button
                  className="underline text-sky-400 cursor-pointer"
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                >
                  Login
                </button>{" "}
                <Login />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup;
