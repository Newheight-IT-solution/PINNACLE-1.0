import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-4'>
        <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Pinnacle</span>
            <span className='text-slate-700'>Rentals</span>
        </h1>
        </Link>
        <form className='bg-slate-100 p-4 rounded-lg flex items-center'>
            <input type="text" placeholder="Search" className='bg-transparent focus:outline-none w-24 sm:w-64' />
            <FaSearch className='text-slate-600'/>
        </form>
        <ul className='flex gap-4 text-slate-500'>
            <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
            </Link>
            
            <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
            </Link>
            <Link to='/properties'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>Properties</li>
            </Link>
            <Link to='/admin-sign-up'>
            <li className='text-slate-700 hover:underline'>Login/Signup</li>
            </Link>
        </ul>

        </div>
        
      
    </header>
  )
}
