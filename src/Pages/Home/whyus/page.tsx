import Tag from '@/components/ui/Tag'
import React from 'react'

export default function page() {
  return (
    <div className='flex items-center flex-col bg-black text-white min-h-screen'>
        <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center pt-8 sm:pt-12 lg:pt-16">
            <Tag className='uppercase mb-4 sm:mb-6'>Why Choose Us?</Tag>
            <div className="max-w-4xl flex flex-col items-center justify-center gap-3 md:gap-2 py-3 pb-8 md:pb-0">
              <h1 className='text-2xl md:text-[40px] text-center font-medium leading-tight px-4'>
                Why Choose LadyFoxx Financial?
              </h1>
              <p className='text-sm md:text-[18px] text-center text-white/60 leading-relaxed px-4'>
                Your Journey to Financial Freedom Begins with LadyFoxx, where intelligent AI meets expert financial insight to help you make smarter decisions, grow your wealth faster.
              </p>
            </div>
          </div>

          {/* Features section */}
          <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-12 pb-8 sm:pb-12">
            
            {/* Feature 1 */}
            <div className="flex feature-section items-center justify-between gap-6 md:gap-8 py-6 md:py-10 w-full px-4">
              <img 
                src="https://placehold.co/450x350" 
                alt="Feature illustration" 
                className="w-full max-w-sm md:max-w-none md:w-auto"
              />
              <div className="flex flex-col items-start justify-center gap-3 md:gap-4">
                <Tag>Test</Tag>
                <h3 className='text-xl md:text-[32px] font-medium leading-tight'>
                  Automate repetitive tasks
                </h3>
                <p className='text-sm md:text-[18px] text-white/60 leading-relaxed'>
                  We help you streamline internal operations by automating manual workflows like data entry, reporting, and approval chains saving time and cutting down errors.
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  <Tag>This is output</Tag>
                  <Tag>This is output</Tag>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 py-6 md:py-10 w-full px-4">
              
              <img 
                src="https://placehold.co/450x350" 
                alt="Feature illustration" 
                className="w-full max-w-sm md:max-w-none md:w-auto order-1 md:order-2"
              />

              <div className="flex flex-col items-start justify-center gap-3 md:gap-4 order-2 md:order-1 md:px-8">
                <Tag>Test</Tag>
                <h3 className='text-xl md:text-[32px] font-medium leading-tight'>
                  Automate repetitive tasks
                </h3>
                <p className='text-sm md:text-[18px] text-white/60 leading-relaxed'>
                  We help you streamline internal operations by automating manual workflows like data entry, reporting, and approval chains saving time and cutting down errors.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex feature-section  items-center justify-between gap-6 md:gap-8 py-6 md:py-10 w-full px-4">
              <img 
                src="https://placehold.co/450x350" 
                alt="Feature illustration" 
                className="w-full max-w-sm md:max-w-none md:w-auto"
              />
              <div className="flex flex-col items-start justify-center gap-3 md:gap-4">
                <Tag>Test</Tag>
                <h3 className='text-xl md:text-[32px] font-medium leading-tight'>
                  Automate repetitive tasks
                </h3>
                <p className='text-sm md:text-[18px] text-white/60 leading-relaxed'>
                  We help you streamline internal operations by automating manual workflows like data entry, reporting, and approval chains saving time and cutting down errors.
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}