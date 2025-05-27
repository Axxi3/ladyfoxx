import Tag from '@/components/ui/Tag'
import React from 'react'
import { TextAnimate } from "@/components/magicui/text-animate";
import WhyUs from '@/Pages/Home/whyus/page'
import OurTeam from '@/Pages/aboutus/ourTeam/page'
import FootCard from '@/Pages/Home/footCard/page'
import FAQSection from '@/Pages/Home/faq/page';


export default function page() {
  return (
    <div className='flex flex-col items-center justify-center  min-h-screen'>
      <div className="md:mt-8 mt-20 flex max-w-6xl items-center flex-col justify-center h-screen">
        <Tag>About Us</Tag>
        <TextAnimate animation="blurInUp" by="character" once className='lg:text-[70px] md:text-[60px] text-[45px]  text-white mb-1'>Who are We?</TextAnimate>
        
         <div className="text-white/60">
        <TextAnimate className='md:text-[24px] text-[16px] mt-9 px-6 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat doloremque corporis facere sit unde consequatur minus eos dolores dolore nostrum, doloribus quas quae eaque temporibus, possimus perferendis tempora ab, rerum veritatis officia sapiente quo pariatur! Quaerat debitis consectetur quas minima sequi totam eligendi asperiores ex aliquam esse commodi alias placeat nisi deserunt dolore aperiam beatae officia a, explicabo nam facere vero eaque? Debitis dignissimos nulla soluta culpa eius possimus iste, corporis dolore ratione, optio facere nisi sed maiores ex non?</TextAnimate>
      </div>
      </div>


      
        <WhyUs/>
        <OurTeam/>
        <FAQSection/>
        <FootCard/>

      
     
    </div>
  )
}
