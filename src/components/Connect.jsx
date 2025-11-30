import React, { useState, useEffect, useRef } from 'react'
import mail from "../assets/mail.svg"
import whatsapp from "../assets/whatsapp.svg"

const Connect = () => {
  const sectionRef = useRef(null);
  const [isAnimating, setisAnimating] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setisAnimating(true);
        } else {
          setisAnimating(false);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => observer.disconnect();
  }, [])


  const glass = "bg-slate-800/30 rounded-2xl backdrop-blur-md border border-white/10 shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer hover:shadow-cyan-500/20 overflow-hidden group"
  
  const animation = `transition-all duration-700 ease-out transform ${isAnimating ?"opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`

  return (
    <div ref={sectionRef} className="container mt-20 mb-20 px-6 mx-auto">
      
      <div className={`contactMe py-[20px] text-center ${animation}`}>
        <p className='text-2xl font-bold bg-gradient-to-r bg-clip-text from-cyan-400 to-blue-500 text-transparent'>Contact Me</p>
        <p className='text-gray-400'>get in touch</p>
      </div>

      <div className='flex flex-col md:flex-row justify-center gap-10 mt-10'>
        
        <div className="flex flex-col gap-6 items-center md:items-start">
          <p className={`text-xl font-bold text-center md:text-left ${animation}`}>Talk to me</p>
          
          {/* RESPONSIVE FIX: Changed fixed w-[300px] to w-full md:w-[300px] */}
          <div className={`crad1 ${glass} ${animation} p-6 flex items-center gap-4 w-full md:w-[300px]`} style={{transitionDelay: isAnimating ? '100ms' : '0ms'}}>
             <img className='invert w-[35px]' src={mail} alt="" />
             <div>
               <p className='font-semibold'>Email</p>
               <p className='text-gray-400 text-sm'>mahadshahzad333@gmail.com</p>
               <a className='text-sm text-blue-400' href="mailto:mahadshahzad333@gmail.com">Write me</a>
             </div>
          </div>

          <div className={`crad2 ${glass} ${animation} p-6 flex items-center gap-4 w-full md:w-[300px]`} style={{transitionDelay: isAnimating ? '200ms' : '0ms'}}>
             <img className='invert w-[35px]' src={whatsapp} alt="" />
             <div>
               <p className='font-semibold'>Whatsapp</p>
               <p className='text-gray-400 text-sm'>+92 323 4243255</p>
               <a className='text-sm text-blue-400' href="https://wa.me/+923234243255">Write me</a>
             </div>
          </div>
        </div>

        <div className={`flex flex-col gap-4 items-center md:items-start ${animation}`} style={{transitionDelay: isAnimating ? '300ms' : '0ms'}}>
           <p className='text-xl font-bold text-center md:text-left'>Write me your thoughts</p>
           
           {/* RESPONSIVE FIX: Changed fixed w-[400px] to w-full md:w-[400px] */}
           <form className="flex flex-col gap-4 w-full md:w-[400px]">
              <div className='border border-white/10 rounded-2xl p-4 relative bg-slate-800/30 backdrop-blur-sm'>
                 <label className='block text-xs font-medium text-gray-400 mb-1'>Your Name</label>
                 <input className='w-full bg-transparent focus:outline-none text-white' type="text" required placeholder='Insert your name' />
              </div>

              <div className='border border-white/10 rounded-2xl p-4 relative bg-slate-800/30 backdrop-blur-sm'>
                 <label className='block text-xs font-medium text-gray-400 mb-1'>Your Email</label>
                 <input className='w-full bg-transparent focus:outline-none text-white' type="email" required placeholder='Insert your email' />
              </div>

              <div className='border border-white/10 rounded-2xl p-4 relative bg-slate-800/30 backdrop-blur-sm'>
                 <label className='block text-xs font-medium text-gray-400 mb-1'>Your Message</label>
                 <textarea className='w-full bg-transparent focus:outline-none text-white resize-none' rows="4" required placeholder='Write your thoughts here' ></textarea>
              </div>

              <button className='w-fit px-8 py-3 rounded-full font-semibold bg-blue-500/50 border border-indigo-300/30 shadow-[0_0_12px_#3b82f6] transition-all duration-300 hover:scale-105 mx-auto md:mx-0' type="submit">
                Send Message
              </button>
           </form>
        </div>

      </div>
    </div>
  )
}

export default Connect