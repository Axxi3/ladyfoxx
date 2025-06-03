'use client';

import React from 'react';
import './Hero.css'; // If using custom animations
import Button from '@/components/ui/Button';



const Hero = () => {
  return (
    <div className="relative bg-[linear-gradient(180deg,_#134341_0.84%,_rgba(19,67,65,0)_100.84%)]  min-h-screen w-full pt-42  flex items-center justify-center overflow-hidden">
      
    

      {/* Foreground Text */}
      <div className="relative z-10 text-center text-white px-6">
        <div className="mb-4 inline-block bg-white/10 text-sm border border-teal-400/30 text-teal-300 px-3 py-1 rounded-full font-medium">
          <span className="font-bold text-teal-400">New</span> AI Financial Manager
        </div>
        <h1 className="text-3xl md:text-6xl font-medium leading-tight">
          Unlock Your Financial Potential <br /> with AI-Powered Guidance.
        </h1>
        <p className="text-gray-300 md:text-[18px] text-[14px] mt-4 max-w-xl mx-auto">
          At LadyFoxx Financial, we make smart investing simple. With AI-driven tools and expert insights, we help first-time investors grow confidently and take control of their financial future.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button variant='primary' >
            Get in touch →
          </Button>
          <Button variant='secondary' >
            View services
          </Button>
        </div>


        <div className="mt-8 max-w-6xl mx-auto">
          <img src="/card-hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;



  // Spinning SVG Background
  //     <div className="absolute opacity-60 w-[406px] h-[406px] blur-[10px] z-0">
  //       {/* Outer Circle */}
  //       <div className="absolute animate-spin-slow-reverse w-full h-full">
  //         <svg width="406" height="407" viewBox="0 0 406 407" fill="none" xmlns="http://www.w3.org/2000/svg">
  //           <rect
  //             x="-25.05"
  //             y="29.12"
  //             width="405.993"
  //             height="405.993"
  //             rx="202.997"
  //             transform="rotate(-7.59599 -25.05 29.12)"
  //             fill="url(#paint0_linear_1_63)"
  //           />
  //           <defs>
  //             <linearGradient id="paint0_linear_1_63" x1="394.081" y1="44.2336" x2="-38.1881" y2="419.999" gradientUnits="userSpaceOnUse">
  //               <stop offset="0.13" stopColor="#00B3B3" />
  //               <stop offset="0.350236" stopColor="#008080" stopOpacity="0.7" />
  //               <stop offset="0.641724" stopColor="#006666" stopOpacity="0.5" />
  //               <stop offset="0.88" stopColor="#004D4D" />
  //             </linearGradient>
  //           </defs>
  //         </svg>
  //       </div>

  //       {/* Inner Circle */}
  //       <div className="absolute animate-spin-slow w-full h-full flex items-center justify-center">
  //         <svg width="394" height="395" viewBox="0 0 394 395" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[300px] h-[300px]">
  //           <rect
  //             x="117.47"
  //             y="394.16"
  //             width="300.001"
  //             height="300.001"
  //             rx="150"
  //             transform="rotate(-112.98 117.47 394.16)"
  //             fill="url(#paint0_linear_1_64)"
  //           />
  //           <defs>
  //             <linearGradient id="paint0_linear_1_64" x1="134.702" y1="380.206" x2="400.238" y2="708.115" gradientUnits="userSpaceOnUse">
  //               <stop offset="0.13" stopColor="#FFD700" />
  //               <stop offset="0.350236" stopColor="#FFA500" stopOpacity="0.8" />
  //               <stop offset="0.641724" stopColor="#FF8C00" stopOpacity="0.6" />
  //               <stop offset="0.88" stopColor="#FF6B35" />
  //             </linearGradient>
  //           </defs>
  //         </svg>
  //       </div>
  //     </div>