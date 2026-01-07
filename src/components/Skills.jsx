import React, { useEffect, useState, useRef } from 'react'
import tick from "../assets/tick.svg"

const Skills = () => {

  const sectionRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimating(true);
        } else {
          setIsAnimating(false);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // RESPONSIVE FIX:
  // Changed h-[40vh] to h-auto (Let height be determined by content)
  // Added min-h-[300px] to keep them looking substantial
  const glass = "rounded-2xl bg-slate-800/30 backdrop-blur-md border border-white/10 shadow-xl hover:-translate-y-2 transition-all duration-300 hover:shadow-cyan-500/20 overflow-hidden group"
  
  const animation = `transition-all duration-700 ease-out transform ${
    isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
  }`;

  return (
    <div ref={sectionRef} className='pb-20'>
      <div className={`container flex mt-10 justify-center ${animation}`}>
        <div className="skills m-10 pt-[10px] ">
          <p className="skills font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-2xl flex justify-center">   Skills   </p>
          <p className='text-gray-400'>My technical level</p>
        </div>
      </div>

      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-[20px] px-6 md:px-[50px] max-w-7xl mx-auto">
        
        {/* --- CARD 1: Frontend Developer --- */}
        {/* Removed h-[40vh], added h-auto */}
        <div className={`${glass} ${animation} p-6 h-auto min-h-[40vh] bg-blue-400`} style={{transitionDelay: isAnimating ? '100ms' : '0ms'}}>
          <p className='text-lg font-bold pb-[8px] text-blue-400 '>Frontend Developer</p>
          <div className="grid grid-cols-2 gap-4 py-[3px]">
            <div className="flex items-center gap-2">
              <img className='invert w-5' src={tick} alt="" />
              <div>
                <p className='font-medium'>JavaScript</p>
                <p className='text-sm text-gray-600'>Advanced</p>
              </div>
            </div>
            {/* ... Rest of your items ... */}
            <div className="flex items-center gap-2">
              <img className='invert w-5' src={tick} alt="" />
              <div>
                <p className='font-medium'>Tailwind CSS</p>
                <p className='text-sm text-gray-600'>Intermediate</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img className='invert w-5' src={tick} alt="" />
              <div>
                <p className='font-medium'>Next</p>
                <p className='text-sm text-gray-600'>Intermediate</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img className='invert w-5' src={tick} alt="" />
              <div>
                <p className='font-medium'>React</p>
                <p className='text-sm text-gray-600'>Intermediate</p>
              </div>
            </div>
            
            
          </div>
        </div>

        {/* --- CARD 2: Backend Developer --- */}
        <div className={`${glass} ${animation} p-6 h-auto min-h-[40vh] bg-blue-400`} style={{transitionDelay: isAnimating ? '200ms' : '0ms'}}>
          <p className='text-lg font-bold pb-[8px] text-blue-400 '>Backend Developer</p>
          <div className="grid grid-cols-2 gap-4 py-[3px]">
            {/* ... Your exact items ... */}
            <div className="flex items-center gap-2">
              <img className='invert w-5' src={tick} alt="" />
              <div>
                <p className='font-medium'>Node.js</p>
                <p className='text-sm text-gray-600'>Intermediate</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img className='invert w-5' src={tick} alt="" />
              <div>
                <p className='font-medium'>MySQL</p>
                <p className='text-sm text-gray-600'>Intermediate</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img className='invert w-5' src={tick} alt="" />
              <div>
                <p className='font-medium'>Python</p>
                <p className='text-sm text-gray-600'>Intermediate</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <img className='invert w-5' src={tick} alt="" />
              <div>
                <p className='font-medium'>NoSQL</p>
                <p className='text-sm text-gray-600'>Intermediate</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img className='invert w-5' src={tick} alt="" />
              <div>
                <p className='font-medium'>Java</p>
                <p className='text-sm text-gray-600'>Intermediate</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- CARD 3: DevOps Tools --- */}
        <div className={`${glass} ${animation} p-6 h-auto min-h-[40vh] bg-blue-400`} style={{transitionDelay: isAnimating ? '300ms' : '0ms'}}>
          <p className='text-lg font-bold pb-[8px] text-blue-400 '>DevOps Tools</p>
          <div className="grid grid-cols-2 gap-4 py-[3px]">
            {/* ... Your exact items ... */}
            <div className="flex items-center gap-2">
              <img className='invert w-5' src={tick} alt="" />
              <div>
                <p className='font-medium'>Docker</p>
                <p className='text-sm text-gray-600'>Basic</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img className='invert w-5' src={tick} alt="" />
              <div>
                <p className='font-medium'>Git/GitHub</p>
                <p className='text-sm text-gray-600'>Advanced</p>
              </div>
            </div>
            
            
            
            
          </div>
        </div>

        {/* --- CARD 4: Soft Skills --- */}
        <div className={`${glass} ${animation} p-6 h-auto min-h-[40vh] bg-blue-400`} style={{transitionDelay: isAnimating ? '400ms' : '0ms'}}>
          <p className='text-lg font-bold pb-[8px] text-blue-400'>Soft Skills & Methodologies</p>
          <div className="grid grid-cols-2 gap-x-2 gap-y-4 py-[6px]">
            {/* ... Your exact items ... */}
            
            <div className="flex items-start gap-2">
              <img className='invert w-5 mt-1' src={tick} alt="" />
              <div>
                <p className='font-medium text-sm md:text-base leading-tight'>Problem-solving</p>
                <p className='text-xs text-gray-600'>Intermediate</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <img className='invert w-5 mt-1' src={tick} alt="" />
              <div>
                <p className='font-medium text-sm md:text-base leading-tight'>Effective Communication</p>
                <p className='text-xs text-gray-600'>Intermediate</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <img className='invert w-5 mt-1' src={tick} alt="" />
              <div>
                <p className='font-medium text-sm md:text-base leading-tight'>Team Collaboration</p>
                <p className='text-xs text-gray-600'>Intermediate</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <img className='invert w-5 mt-1' src={tick} alt="" />
              <div>
                <p className='font-medium text-sm md:text-base leading-tight'>Time Management</p>
                <p className='text-xs text-gray-600'>Intermediate</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills