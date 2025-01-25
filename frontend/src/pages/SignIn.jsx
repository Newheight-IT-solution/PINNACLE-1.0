import React from 'react'
import { Link } from 'react-router-dom'

export default function SignIn() {
  return (
    <div className='p-5 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className=' flex flex-col gap-4'>  
        <input type="text" placeholder='Full Name' className='border p-3 rounded-lg' id='fullname' />
        <input type="text" placeholder='Admin Id' className='border p-3 rounded-lg' id='admin_id' />
        <input type="email" placeholder='Email' className='border p-3 rounded-lg' id='email' />
        <input type="text" placeholder='Contact No' className='border p-3 rounded-lg' id='contact_no' />
        <input type="password" placeholder='Password' className='border p-3 rounded-lg' id='password' />
        <button className='bg-slate-700 text-white p-3 rounded-lg upercase hover:opacity-95 disabled:opacity-80' >Sign Up</button>
      </form>

      <div className='flex gap-3 mt-5'>
        <p>An admin already?</p>
        <Link to={'/sign-in'} className='text-blue-700 hover:underline'>Sign In</Link>
      

      </div>
    </div>
  )
}
