import { TextAnimate } from '@/components/magicui/text-animate'
import Tag from '@/components/ui/Tag'
import React from 'react'
import WhyUs from '@/Pages/Home/whyus/page'
import Card from '@/Pages/Home/blockchain/Card'
import FAQSection from '@/Pages/Home/faq/page'
import FootCard from '@/Pages/Home/footCard/page'

export default function page() {
  return (
    <div className='flex flex-col items-center justify-center  mt-42'>
         <div className="md:mt-8 mt-20 flex max-w-6xl items-center flex-col justify-center ">
                <Tag>Services</Tag>
                <TextAnimate
                  animation="blurInUp"
                  by="character"
                  once
                  className="lg:text-[70px] text-center md:text-[60px] text-[45px]  text-white mb-1"
                >
                  How Our Platform Works
                </TextAnimate>
        
                <div className="text-white/60">
                  <TextAnimate className="md:text-[24px] text-[16px] mt-4 px-6 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
                    doloremque corporis facere sit unde consequatur minus eos dolores
                    dolore nostrum, doloribus quas quae eaque temporibus.
                  </TextAnimate>
                </div>
              </div>

              <div
                      className="
                    w-full max-w-7xl mt-8 mx-auto px-4 sm:px-6 lg:px-8
                    grid grid-cols-1 md:grid-cols-2 
                    gap-4 sm:gap-6 lg:gap-8
                    py-4 sm:py-6 lg:py-8
                  "
                    >
                      <Card
                        title="Manual Processes"
                        points={[
                          "Time-consuming data entry",
                          "Error-prone calculations",
                          "Repetitive task execution",
                          "Manual report generation",
                          "Inefficient workflow management",
                        ]}
                      />
                      <Card
                        title="Automated Solutions"
                        points={[
                          "Streamlined data processing",
                          "Accurate automated calculations",
                          "Intelligent task scheduling",
                          "Real-time report generation",
                          "Optimized workflow automation",
                        ]}
                      />
                    </div>


                    <WhyUs />
                    <FAQSection/>
                    <FootCard/>
    </div>
  )
}
