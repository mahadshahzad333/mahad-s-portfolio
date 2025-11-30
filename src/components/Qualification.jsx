import React, { useState, useEffect, useRef } from 'react'
import BackgroundLayout from './backgroungLayout'

const Qualification = () => {
  const sectionRef = useRef(null);
  const [activeTab, setactiveTab] = useState("education")
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setIsAnimating(false);
    const timer = setTimeout(() => {
      if (sectionRef.current) {
        setIsAnimating(true);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [activeTab]);

  // RESPONSIVE FIX:
  // Changed h-[60vh] inside the card logic below to h-auto min-h-[400px] for mobile.
  // The 'glass' class here handles the shell.
  const glass = "rounded-2xl bg-slate-800/30 backdrop-blur-md border border-white/10 shadow-xl hover:-translate-y-2 transition-all duration-300 hover:shadow-cyan-500/20 overflow-hidden group relative"
  
  const animation = `transition-all duration-700 ease-out transform ${
    isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
  }`;

  return (
    <div ref={sectionRef} className="pb-20">
      <div className={`container flex flex-col items-center mt-10 ${animation}`}>
        <div className="pt-[10px] text-center">
          <p className="font-bold mt-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-2xl flex justify-center">
            Qualifications
          </p>
          <p className='text-gray-400 text-center mt-2'>My Academic Journey</p>
        </div>

        {/* --- BUTTONS --- */}
        <div className="flex gap-6 mt-8 mb-4">
          <button onClick={() => setactiveTab('education')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full border transition-all duration-300 font-medium relative group ${
              activeTab === 'education' 
              ? 'bg-blue-600/20 border-blue-500 text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.3)]' 
              : 'bg-transparent border-white/10 text-gray-400 hover:text-white hover:border-white/30'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            Education
          </button>

          <button onClick={() => setactiveTab('experience')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full border transition-all duration-300 font-medium relative group ${
              activeTab === 'experience' 
              ? 'bg-cyan-600/20 border-cyan-500 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.3)]' 
              : 'bg-transparent border-white/10 text-gray-400 hover:text-white hover:border-white/30'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            Experience
          </button>
        </div>
      </div>

      {/* --- GRID LAYOUT --- */}
      {/* Changed grid-cols-3 to grid-cols-1 md:grid-cols-3 */}
      <div className="cards grid grid-cols-1 md:grid-cols-3 gap-6 px-[20px] md:px-[50px] pb-10 mt-6 max-w-7xl mx-auto">
        
        {/* ================= EDUCATION TAB ================= */}
        {activeTab === 'education' && (
          <>
            <div className={`${glass} ${animation} h-auto min-h-[400px] md:h-[60vh] p-8 flex flex-col items-center justify-between`} style={{transitionDelay: isAnimating ? '100ms' : '0ms'}}>
               <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>
               <div className="flex flex-col items-center text-center w-full h-full">
                 <div className="px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-6">2018 - 2020</div>
                 <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Matriculation</h3>
                 <p className="text-lg text-blue-300 font-medium mb-1">Computer Science</p>
                 <p className="text-gray-400 text-sm ">Govt. High School</p>
                 <p className="text-gray-400 text-sm ">Faisalabad</p>
                 <div className="w-[1px] h-16 bg-gradient-to-b from-blue-500/50 to-transparent mt-6"></div>
               </div>
               <div className="w-full pt-4 border-t border-white/5 mt-auto"><p className="text-center text-xs tracking-wider uppercase font-bold text-gray-500">Completed</p></div>
            </div>

            <div className={`${glass} ${animation} h-auto min-h-[400px] md:h-[60vh] p-8 flex flex-col items-center justify-between`} style={{transitionDelay: isAnimating ? '200ms' : '0ms'}}>
               <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>
               <div className="flex flex-col items-center text-center w-full h-full">
                 <div className="px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-6">2020 - 2022</div>
                 <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Intermediate</h3>
                 <p className="text-lg text-blue-300 font-medium mb-1">ICS (Computer Science)</p>
                 <p className="text-gray-400 text-sm ">Punjab Group of Colleges</p>
                 <p className="text-gray-400 text-sm ">Faisalabad</p>
                 <div className="w-[1px] h-16 bg-gradient-to-b from-blue-500/50 to-transparent mt-6"></div>
               </div>
               <div className="w-full pt-4 border-t border-white/5 mt-auto"><p className="text-center text-xs tracking-wider uppercase font-bold text-gray-500">Completed</p></div>
            </div>

            <div className={`${glass} ${animation} h-auto min-h-[400px] md:h-[60vh] p-8 flex flex-col items-center justify-between`} style={{transitionDelay: isAnimating ? '300ms' : '0ms'}}>
               <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>
               <div className="flex flex-col items-center text-center w-full h-full">
                 <div className="px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-6">2022 - Present</div>
                 <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Bachelor's Degree</h3>
                 <p className="text-lg text-blue-300 font-medium mb-1">BS Computer Science</p>
                 <p className="text-gray-400 text-sm ">University Of Central Punjab</p>
                 <p className="text-gray-400 text-sm ">Faisalabad</p>
                 <div className="w-[1px] h-16 bg-gradient-to-b from-blue-500/50 to-transparent mt-6"></div>
               </div>
               <div className="w-full pt-4 border-t border-white/5 mt-auto"><p className="text-center text-xs tracking-wider uppercase font-bold text-green-400">Pursuing</p></div>
            </div>
          </>
        )}

        {/* ================= EXPERIENCE TAB ================= */}
        {activeTab === 'experience' && (
          <>
            {/* Experience Card 1 */}
            <div className={`${glass} ${animation} h-auto min-h-[400px] md:h-[60vh] p-8 flex flex-col items-center justify-between`} style={{transitionDelay: isAnimating ? '100ms' : '0ms'}}>
               <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
               <div className="flex flex-col items-center text-center w-full h-full">
                 <div className="px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium mb-6">2023 - Present</div>
                 <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Frontend Intern</h3>
                 <p className="text-lg text-cyan-300 font-medium mb-1">React & Tailwind</p>
                 <p className="text-gray-400 text-sm ">Software House Name</p>
                 <p className="text-gray-400 text-sm ">Remote / On-site</p>
                 <div className="w-[1px] h-16 bg-gradient-to-b from-cyan-500/50 to-transparent mt-6"></div>
               </div>
               <div className="w-full pt-4 border-t border-white/5 mt-auto"><p className="text-center text-xs tracking-wider uppercase font-bold text-green-400">Active</p></div>
            </div>

            {/* Experience Card 2 */}
            <div className={`${glass} ${animation} h-auto min-h-[400px] md:h-[60vh] p-8 flex flex-col items-center justify-between`} style={{transitionDelay: isAnimating ? '200ms' : '0ms'}}>
               <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
               <div className="flex flex-col items-center text-center w-full h-full">
                 <div className="px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium mb-6">2022 - 2023</div>
                 <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Freelancer</h3>
                 <p className="text-lg text-cyan-300 font-medium mb-1">Web Development</p>
                 <p className="text-gray-400 text-sm ">Upwork / Fiverr</p>
                 <p className="text-gray-400 text-sm ">Global</p>
                 <div className="w-[1px] h-16 bg-gradient-to-b from-cyan-500/50 to-transparent mt-6"></div>
               </div>
               <div className="w-full pt-4 border-t border-white/5 mt-auto"><p className="text-center text-xs tracking-wider uppercase font-bold text-gray-500">Completed</p></div>
            </div>
            
            {/* Empty placeholder to keep grid layout balanced if needed, or remove */}
             <div className="hidden md:block"></div>
          </>
        )}

      </div>
    </div>
  )
}

export default Qualification