import { set } from 'mongoose'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AdminSignUp() {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({})
  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
    const res = await fetch('/api/auth/signup', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    const data = await res.json();
    console.log(data)
    if (data.success === false) {
      setLoading(false);
      setError(data.message);
      
      return
    }
    setLoading(false)
    setError(null)
    navigate('/admin-sign-in')
    } catch (error) {
      setLoading(false)
      setError(error.message)
    }
    
    
  }

  console.log(formData)
  return (
    <div className='p-5 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Admin Sign Up</h1>
      <form onSubmit={handleSubmit} className=' flex flex-col gap-4'>   
        <input
         type="text" 
         placeholder='Full Name' 
         className='border p-3 rounded-lg' 
         id='full_name'
         onChange={handleChange} 
        />
        
        <input 
          type="text" 
          placeholder='Admin Id' 
          className='border p-3 rounded-lg' 
          id='admin_id'
          onChange={handleChange}
        />

        <input 
          type="email" 
          placeholder='Email' 
          className='border p-3 rounded-lg' 
          id='email' 
          onChange={handleChange}
        />
        <input 
          type="password" 
          placeholder='Password' 
          className='border p-3 rounded-lg' 
          id='password'
          onChange={handleChange}
        />
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg upercase hover:opacity-95 disabled:opacity-80' > {loading ? "Loading...." : 'Sign Up'}</button>
      </form>

      <div className='flex gap-3 mt-5'>
        <p>An admin already?</p>
        <Link to={'/admin-sign-in'} className='text-blue-700 hover:underline'>Sign In</Link>
        <div>
          {error && <p className='text-red-500'>{error}</p>}
        </div>
      

      </div>
    </div>
  )
}
