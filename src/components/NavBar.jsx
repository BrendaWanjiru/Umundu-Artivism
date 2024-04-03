import React from 'react'
import log from '/logo.png'
import { useState } from 'react';


export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className='w-screen relative px-6 bg-white'>
    <nav className='flex flex-row justify-between items-center container mx-auto sticky top-0 z-50 bg-white'>
      <img src={log} alt="logo" srcSet="" />
      <div className="md:hidden sm:block">
        <button onClick={handleToggleMenu} className="text-black text-2xl bg-transparent">
          {menuOpen ? "x" : "\u2261"}
        </button>
      </div>
      <ul className={`absolute top-full right-0 md:flex w-1/6 sm:w-1/3 p-4 space-y-4 flex-col pr-6 text-[#dd9445] bg-[#f4daa1] ${menuOpen ? 'opacity-100 visible transition-opacity duration-300' : 'opacity-0 invisible transition-opacity duration-300'}`}>
        <li><a className=' text-[#dd9445]' href="/">Home</a></li>
        <li><a href="about" className=' text-[#dd9445]'>About</a></li>
        <li><a href="blog"  className=' text-[#dd9445]'>Blog</a></li>
      </ul>
    </nav>
  </div>
  
  )
}
