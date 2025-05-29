
import { TextAnimate } from '@/components/magicui/text-animate'
import Tag from '@/components/ui/Tag'
import React from 'react'
import Card from './Card'
import Whyus from '@/Pages/Home/whyus/page'

export default function page() {
  return (
     <div className='flex flex-col items-center justify-center mt-42'>
             <div className="heroSection md:mt-8 mt-20 flex max-w-6xl items-center flex-col justify-center  relative overflow-hidden mb-8">
                  
                  {/* Spinning Coin Background */}
                

                  {/* Content */}
                 
                    <Tag>Our Coin</Tag>
                    <TextAnimate
                      animation="blurInUp"
                      by="character"
                      once
                      className="lg:text-[70px] text-center md:text-[60px] text-[45px] text-white"
                    >
                      Ladyfoxx Blockchain & LDFX Coin
                    </TextAnimate>
            
                    <div className="text-white/60">
                      <TextAnimate className="md:text-[24px] text-[16px] mt-4 px-6 text-center">
                        Powering the Future of Wealth Through Secure, Transparent, and Instant Blockchain Finance
                      </TextAnimate>
                    </div>
                  
              </div>

              <div
                      className="
                    w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                    grid grid-cols-1 md:grid-cols-2 
                    gap-4 sm:gap-6 lg:gap-8
                    py-4 sm:py-6 lg:py-8
                  "
                    >
                      <Card/>
                      <Card/>
                     
                    </div>

                    <Whyus/>

              
    </div>
  )
}