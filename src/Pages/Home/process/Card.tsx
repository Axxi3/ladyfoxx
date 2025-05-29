import Tag from '@/components/ui/Tag'
import React from 'react'

interface CardProps {
  step: number;
}

export default function Card({ step }: CardProps) {
  return (
    <div className="flex flex-col items-start justify-between p-6 bg-[#0A0A0A] rounded-2xl gap-4 w-full h-full transition-transform hover:scale-[1.02] duration-200">
      <Tag>{`STEP 0${step}`}</Tag>
      <h4 className="text-lg md:text-[23px] text-white font-semibold">
        SMART INVESTING
      </h4>
      <p className="text-sm md:text-lg text-white/60">
        We assess your needs and identify AI solutions to streamline workflows and improve efficiency.
      </p>
      <img src="https://placehold.co/480x250" alt="Feature visual" className="rounded-md object-cover w-full" />
    </div>
  );
}
