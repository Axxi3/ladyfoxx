import Tag from '@/components/ui/Tag'
import React from 'react'
import featuresData from './featuresData'
import HenneryCard from './HenneryCard'

export default function page() {
  return (
    <div className='text-white flex items-center justify-center flex-col '>
<div className="flex flex-col items-center pt-12 sm:pt-16 lg:pt-20 text-center px-4">
        <Tag className="uppercase mb-4 sm:mb-6">Why Choose Us?</Tag>
        <div className="max-w-4xl space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-[40px] font-semibold leading-tight">
            Why Choose LadyFoxx Financial?
          </h1>
          <p className="text-sm md:text-lg text-white/60 leading-relaxed">
            Your Journey to Financial Freedom Begins with LadyFoxx, where intelligent AI meets expert financial insight to help you make smarter decisions and grow your wealth faster.
          </p>
        </div>
      </div>



       {/* Features Grid */}
        <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-2 gap-8 place-items-center">
          {featuresData.map((feature, index) => (
            <HenneryCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

    </div>
  )
}
