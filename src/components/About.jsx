import React, { useState, useEffect, useRef } from 'react'
import comp from "../assets/comp.svg"
import coffee from "../assets/coffee.svg"
import experience from "../assets/experience.svg"

const About = () => {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // RESPONSIVE FIXES:
  // 1. Changed w-[20vw] to w-full md:w-[20vw] (Full width on mobile, 20vw on desktop)
  // 2. Changed h-[28vh] to h-auto min-h-[250px] (Expands with content on mobile)
  const glassCard = "h-auto min-h-[250px] w-full md:w-[20vw] min-w-[250px] rounded-2xl bg-slate-800/30 backdrop-blur-md border border-white/10 shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 hover:shadow-cyan-500/20";

  const animation = `transition-all duration-700 ease-out transform ${isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`;
  
  return (
    <div ref={sectionRef} className="w-full flex flex-col items-center min-h-screen py-20 overflow-x-hidden">

      <div className={`aboutMe mb-8 text-center ${animation}`}>
        <div className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 pb-2'>
          About Me
        </div>
        <div className='text-gray-400 mt-2 text-lg'>
          My Introduction
        </div>
      </div>

      <main className={`flex justify-center w-full mb-12 px-6 ${animation}`} style={{transitionDelay: isAnimating ? '100ms' : '0ms'}}>
        <p className="max-w-3xl text-md text-slate-200 leading-relaxed text-center md:text-justify">
          I’m a Full Stack Software Engineer. I specialize in building scalable, user-focused web applications using modern technologies. My expertise includes RESTful APIs, cloud integration, database design, and responsive UIs.
        </p>
      </main>

      <div className="cardflex flex flex-wrap gap-8 justify-center px-4 w-full max-w-7xl">

        <div className={`${glassCard} ${animation}`} style={{transitionDelay: isAnimating ? '200ms' : '0ms'}}>
          <div className="p-4 h-full relative flex flex-col justify-between">
            <div>
                <p className='text-2xl font-bold text-white'>Completed </p>
                <p className='text-2xl font-bold text-cyan-400'>Projects </p>
            </div>
            <img className='invert w-[60px] absolute right-4 bottom-16 opacity-90 group-hover:scale-110 transition-transform' src={comp} alt="" />
            <div className="mt-10">
              <p className='text-3xl font-bold text-white'>7+</p>
              <p className='text-sm text-slate-300'>Projects delivered</p>
            </div>
          </div>
        </div>

        <div className={`${glassCard} ${animation}`} style={{transitionDelay: isAnimating ? '300ms' : '0ms'}}>
          <div className="p-4 h-full relative flex flex-col justify-between">
            <div>
                <p className='text-2xl font-bold text-white'>Experience </p>
                <div className="w-[70%] h-2 bg-slate-900/60 rounded-full mt-3 mb-1 border border-white/5">
                <div className="h-full w-[70%] rounded-full bg-gradient-to-r from-cyan-300 to-blue-400 shadow-[0_0_10px_#22d3ee]"></div>
                </div>
            </div>
            <img className='w-[60px] invert absolute right-4 bottom-16 opacity-90 group-hover:scale-110 transition-transform' src={experience} alt="" />
            <div className="mt-10">
              <p className='text-3xl font-bold text-white'>6+ Months</p>
              <p className='text-sm text-slate-300'>Professional growth</p>
            </div>
          </div>
        </div>

        <div className={`${glassCard} ${animation}`} style={{transitionDelay: isAnimating ? '400ms' : '0ms'}}>
          <div className="p-4 h-full relative flex flex-col justify-between">
            <div>
                <p className='text-2xl font-bold text-white'>Coffee </p>
                <div className="flex items-center gap-1.5 mt-3">
                    <div className="w-5 h-2.5 bg-cyan-300 -skew-x-[20deg] shadow-[0_0_10px_#22d3ee]"></div>
                    <div className="w-5 h-2.5 bg-cyan-300 -skew-x-[20deg] shadow-[0_0_10px_#22d3ee]"></div>
                    <div className="w-5 h-2.5 bg-cyan-300 -skew-x-[20deg] shadow-[0_0_10px_#22d3ee]"></div>
                </div>
            </div>
            <img className='w-[60px] invert absolute right-4 bottom-16 opacity-90 group-hover:scale-110 transition-transform' src={coffee} alt="" />
            <div className="mt-10">
              <p className='text-3xl font-bold text-white'>500+ Cups</p>
              <p className='text-sm text-slate-300'>Fueling Creativity</p>
            </div>
          </div>
        </div>

      </div>

      <div className={`button flex justify-center mt-8 mb-6 ${animation}`} style={{transitionDelay: isAnimating ? '500ms' : '0ms'}}>
        <button className="relative z-10 cursor-pointer text-white font-semibold px-8 py-3 rounded-full bg-blue-500/50 border border-indigo-300/30 shadow-[0_0_12px_#3b82f6] transition-all duration-300 hover:scale-105">
            Download CV
        </button>
      </div>
    </div>
  )
}

export default About