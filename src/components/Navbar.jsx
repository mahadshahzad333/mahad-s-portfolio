import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  // Simple state to handle Mobile Menu (Open/Close)
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Common link classes to avoid repetition
  const linkClasses = (item) => `cursor-pointer transition-colors duration-300 capitalize ${activeLink === item ? "text-blue-400" : "hover:text-gray-200"}`;

  return (
    <nav className='flex justify-between h-[70px] items-center px-6 md:px-10 fixed w-full z-50 bg-slate-800/30 backdrop-blur-md border-b border-white/10 shadow-lg text-gray-300'>
        
        {/* Logo */}
        <div className="logo flex justify-center cursor-pointer z-50">
            <Link to="home" smooth={true} duration={500}>
                <span className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 flex justify-center '>MS</span>
            </Link>
        </div>
        
        {/* --- MOBILE HAMBURGER BUTTON (Only visible on small screens 'md:hidden') --- */}
        <div className="md:hidden z-50" onClick={toggleMenu}>
            <svg className="w-8 h-8 text-white cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
            </svg>
        </div>

        {/* --- NAVIGATION LINKS --- */}
        {/* 1. 'absolute md:static': Absolute on mobile to float below navbar, static on desktop to sit inside it.
            2. 'top-[70px] left-0': Positions it right below the navbar on mobile.
            3. 'flex-col md:flex-row': Vertical stack on mobile, horizontal row on desktop.
            4. 'bg-slate-900 md:bg-transparent': Dark background on mobile, transparent on desktop.
            5. 'hidden md:flex': If not open, hidden on mobile. BUT if open (isOpen check below), we show it.
        */}
        <ul className={`
            flex gap-8 items-center 
            absolute md:static top-[70px] left-0 w-full md:w-auto 
            flex-col md:flex-row bg-slate-900 md:bg-transparent 
            p-10 md:p-0 transition-all duration-300 ease-in-out
            ${isOpen ? 'flex' : 'hidden md:flex'} 
        `}>
            
            {['home', 'about', 'skills', 'qualification'].map((item) => (
               <li key={item} className="relative cursor-pointer">
                  <Link 
                    to={item} 
                    spy={true} 
                    smooth={true} 
                    offset={-70} 
                    duration={500} 
                    onSetActive={() => setActiveLink(item)}
                    onClick={() => setIsOpen(false)} // Close menu when clicked on mobile
                    className={linkClasses(item)}
                  >
                    {item}
                  </Link>

                  {/* Underline Effect (Kept your exact logic) */}
                  <span className={`hidden md:block absolute left-1/2 top-[44px] w-0 h-[2px] bg-blue-500 rounded shadow-[0_0_12px_#3b82f6] transition-all duration-300 ease-out -translate-x-1/2 ${activeLink === item ? "w-12" : ""}`}></span>
                  
                  {/* Pulse Dot */}
                  {activeLink === item && (
                      <span className="hidden md:block absolute left-1/2 -bottom-[6px] w-[6px] h-[6px] rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa] -translate-x-1/2 animate-pulse"></span>
                  )}
               </li>
            ))}

            {/* CONNECT BUTTON */}
            <Link 
                to="connect" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
                onSetActive={() => setActiveLink('connect')}
                onClick={() => setIsOpen(false)}
                className="relative group cursor-pointer"
            >
                <button className="relative z-10 text-white font-semibold px-6 py-2 rounded-lg bg-[#4f46e5] border border-indigo-300 shadow-[0_0_20px_#6366f1,0_0_35px_#4f46e5] transition-all duration-[1200ms] ease-out group-hover:shadow-[0_0_28px_#818cf8,0_0_55px_#6366f1]">
                    Let’s Connect
                    <span className={`hidden md:block absolute left-1/2 top-[44px] w-0 h-[2px] bg-blue-500 rounded shadow-[0_0_12px_#3b82f6] transition-all duration-300 ease-out -translate-x-1/2 ${activeLink === 'connect' ? "w-full mt-2" : ""}`}></span>
                </button>
            </Link>

        </ul>
    </nav>
  )
}

export default Navbar;