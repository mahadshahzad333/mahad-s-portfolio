import React from 'react';
import pfp2 from '../assets/imgs/pfp2.jpg';

const Home = () => {
  return (
    <>
      {/* Added pt-20 to prevent content from hiding behind fixed navbar on mobile */}
      <main className="min-h-screen pt-20 md:pt-0 flex items-center justify-center px-6 py-12 md:px-16 lg:px-24">
        
        {/* Added 'flex-col-reverse' on mobile so text comes AFTER image if you want, 
            but standard is image bottom. Your grid-cols-1 is fine. */}
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
          
          {/* Left Column: Text */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 leading-tight">
                Mahad Shahzad
              </h1>
            </div>

            <h2 className="text-xl md:text-2xl font-semibold text-blue-400">
              Full Stack Web Developer
            </h2>

            <blockquote className="text-gray-400 italic text-lg leading-relaxed max-w-lg mx-auto md:mx-0 pl-0 md:pl-4 md:border-l-4 md:border-blue-400/50">
              "Passion drives my code, and precision guides my design. I am dedicated to pushing the boundaries of web development, turning abstract ideas into functional, high-performance digital reality."
            </blockquote>
          </div>
          
          {/* Right Column: Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <img 
                // Changed fixed w-48 to responsive sizing
                className="w-64 h-64 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl ring-4 ring-blue-500/50 transition-transform duration-300 hover:scale-105" 
                src={pfp2} 
                alt="Mahad Shahzad Profile" 
              />
            </div>
          </div>

        </div>
      </main>
      </>
  );
};

export default Home;