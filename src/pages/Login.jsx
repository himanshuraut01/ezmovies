import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Login = () => {
    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const [error,setError]=useState('')
    const {user,logIn}=UserAuth();
    const navigate=useNavigate()

    const handleSubmit=async (e)=>{
        e.preventDefault();
        setError('')
        try{
            await logIn(email,password);
            navigate('/')
        }catch(error){
            console.log(error);
            setError(error.message)
        }
    }

  return (
    <div className='w-full h-screen'>
      <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="/" />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full h-full flex items-center justify-center px-4 py-24 z-50'>
        <div className='max-w-[450px] w-full bg-black/75 text-white rounded'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold text-center'>Sign In</h1>
            {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> : null}
            <form onSubmit={handleSubmit}className='w-full flex flex-col py-4'>
              <input onChange={(e)=>setEmail(e.target.value)}
               className='p-3 my-2 bg-gray-700 rounded w-full' type="email" placeholder='Email' autoComplete='email' />
              <input onChange={(e)=>setPassword(e.target.value)}
              className='p-3 my-2 bg-gray-700 rounded w-full' type="password" placeholder='Password' autoComplete='current-password' />
              <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
              <div className='flex justify-between items-center text-sm text-gray-600'>
                <p><input className='mr-2' type="checkbox" />Remember me?</p>
                <p>Need Help?</p>
              </div>
              <p className='py-4'><span className='text-gray-600'>New to Ezmovies?</span>{' '}<Link to='/signup'>Sign Up</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
