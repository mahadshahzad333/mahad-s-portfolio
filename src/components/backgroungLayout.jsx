import React from 'react';

const BackgroundLayout = ({ children }) => {
  return (
    // Main Container
    <div className="relative w-full min-h-screen bg-slate-950 overflow-hidden text-white selection:bg-cyan-500 selection:text-slate-900">
        
        {/* ========================================== */}
        {/* GLOBAL BACKGROUND ANIMATION LAYER        */}
        {/* ========================================== */}
        
        {/* 1. Giant Purple Glow (Top Left) */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/40 blur-[120px] animate-pulse"></div>
        
        {/* 2. Giant Cyan Glow (Bottom Right) */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-600/40 blur-[120px] animate-pulse"></div>

        {/* 3. Center Blue Haze */}
        <div className="absolute top-[30%] left-[30%] w-[400px] h-[400px] rounded-full bg-blue-700/30 blur-[100px] animate-pulse"></div>

        {/* Grid Pattern overlay for a 'Tech' feel */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

        {/* ========================================== */}
        {/* PAGE CONTENT (Children)                  */}
        {/* ========================================== */}
        <div className="relative z-10 w-full h-full">
            {children}
        </div>

    </div>
  );
};

export default BackgroundLayout;