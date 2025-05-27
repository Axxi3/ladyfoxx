'use client';

import React from 'react';
import './Hero.css'; // If using custom animations
import Button from '@/components/ui/Button';



const Hero = () => {
  return (
    <div className="relative h-screen w-full mt-12 bg-black md:bg-red flex items-center justify-center overflow-hidden">
      
      {/* Spinning SVG Background */}
      <div className="absolute opacity-60 w-[406px] h-[406px] blur-[10px] z-0">
        {/* Outer Circle */}
        <div className="absolute animate-spin-slow-reverse w-full h-full">
          <svg width="406" height="407" viewBox="0 0 406 407" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect
              x="-25.05"
              y="29.12"
              width="405.993"
              height="405.993"
              rx="202.997"
              transform="rotate(-7.59599 -25.05 29.12)"
              fill="url(#paint0_linear_1_63)"
            />
            <defs>
              <linearGradient id="paint0_linear_1_63" x1="394.081" y1="44.2336" x2="-38.1881" y2="419.999" gradientUnits="userSpaceOnUse">
                <stop offset="0.13" stopColor="#DF7AFE" />
                <stop offset="0.350236" stopColor="#C96EF0" stopOpacity="0" />
                <stop offset="0.641724" stopColor="#A45CDB" stopOpacity="0" />
                <stop offset="0.88" stopColor="#814AC8" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Inner Circle */}
        <div className="absolute animate-spin-slow w-full h-full flex items-center justify-center">
          <svg width="394" height="395" viewBox="0 0 394 395" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[300px] h-[300px]">
            <rect
              x="117.47"
              y="394.16"
              width="300.001"
              height="300.001"
              rx="150"
              transform="rotate(-112.98 117.47 394.16)"
              fill="url(#paint0_linear_1_64)"
            />
            <defs>
              <linearGradient id="paint0_linear_1_64" x1="134.702" y1="380.206" x2="400.238" y2="708.115" gradientUnits="userSpaceOnUse">
                <stop offset="0.13" stopColor="#DF7AFE" />
                <stop offset="0.350236" stopColor="#C96EF0" stopOpacity="0" />
                <stop offset="0.641724" stopColor="#A45CDB" stopOpacity="0" />
                <stop offset="0.88" stopColor="#814AC8" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Foreground Text */}
      <div className="relative z-10 text-center text-white px-6">
        <div className="mb-4 inline-block bg-white/10 text-sm  text-purple-300 px-3 py-1 rounded-full font-medium">
          <span className="font-bold text-purple-400">New</span> Automated Lead Generation
        </div>
        <h1 className="text-4xl md:text-6xl font-medium leading-tight">
          Intelligent Automation for <br /> Modern Businesses.
        </h1>
        <p className="text-gray-300 mt-4 max-w-xl mx-auto">
          Xtract brings AI automation to your fingertips &amp; streamlines tasks.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button variant='primary' >
            Get in touch →
          </Button>
          <Button variant='secondary' >
            View services
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
