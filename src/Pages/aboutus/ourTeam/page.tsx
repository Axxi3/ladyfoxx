import Tag from '@/components/ui/Tag'
import React from 'react'
import TeamSection from './teamSection'

export default function page() {
  return (
    <div className="flex items-center flex-col bg-black text-white ">
          <div className="flex flex-col items-center pt-8 sm:pt-12 lg:pt-16">
            <Tag className="uppercase mb-2 sm:mb-6">Why Choose Us?</Tag>
            <div className="max-w-4xl flex flex-col items-center justify-center gap-3 md:gap-2 py-1 pb-8 md:pb-0">
              <h1 className="text-2xl md:text-[40px] text-center font-medium leading-tight px-4">
                Why Choose LadyFoxx Financial?
              </h1>
              <p className="text-sm md:text-[18px] text-center text-white/60 leading-relaxed px-4">
                Your Journey to Financial Freedom Begins with LadyFoxx, where
                intelligent AI meets expert financial insight to help you make
                smarter decisions, grow your wealth faster.
              </p>
            </div>
          </div>

          <TeamSection/>
    </div>
  )
}
