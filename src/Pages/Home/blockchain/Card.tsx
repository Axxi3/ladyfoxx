import React from 'react';
import { X } from 'lucide-react';

interface CardProps {
  title?: string;
  points?: string[];
  className?: string;
}

export default function Card({ 
  title = "Manual work", 
  points = ["Point 1", "Point 2", "Point 3", "Point 4", "Point 5"],
  className = ""
}: CardProps) {
  return (
    <div className={`
      flex flex-col items-start gap-3 sm:gap-4 
      bg-[#2B5755] 
      p-4 sm:p-5 lg:p-6
      w-full 
      border border-[#2B5755] 
      rounded-lg sm:rounded-xl
      transition-all duration-200
      hover:border-[#2b5755b0]
      hover:bg-[#2b5755b0]
      ${className}
    `}>
      <h4 className='text-lg sm:text-xl lg:text-2xl font-medium text-white leading-tight'>
        {title}
      </h4>
      <ul className='space-y-2 sm:space-y-3 w-full'>
        {points.map((point, index) => (
          <li 
            key={index}
            className='text-sm sm:text-base text-white/60 flex items-start gap-2 sm:gap-3'
          >
            <X 
              className='flex-shrink-0 mt-0.5 text-red-400/70' 
              height={16} 
              width={16}
            />
            <span className='leading-relaxed'>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}