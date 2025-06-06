import { TextAnimate } from '@/components/magicui/text-animate'
import Tag from '@/components/ui/Tag'
import React from 'react'
import { MailOpen } from 'lucide-react';
import ContactForm from './contactForm';

export default function page() {
  return (
    <div className='flex flex-col items-center'>
        <div className="md:mt-8 mt-20 flex max-w-6xl items-center flex-col px-4 justify-end mb-8 h-[50vh]">
                <Tag>Contact Us</Tag>
                <TextAnimate
                  animation="blurInUp"
                  by="character"
                  once
                  className="lg:text-[70px] md:text-[60px] text-[38px] text-center  text-white mb-1"
                >
                  Get in Touch with Us
                </TextAnimate>
        
                <div className="text-white/60">
                  <TextAnimate className="md:text-[24px] text-[16px] mt-4 px-6 text-center">
                    Have questions or need AI solutions? Let us know by filling out the form, and we’ll be in touch!
                  </TextAnimate>
                </div>
              </div>

        <div className="flex md:flex-row flex-col w-full md:w-5xl md:px-0 px-4 items-center justify-center gap-5">
              <div className="flex flex-col md:w-[50%] w-full  items-start justify-center border border-[#2b5755] rounded-sm p-6 bg-[#2b5755]">
                <div className="flex gap-2">
                    <MailOpen size={22} className=' text-white' />
                    <p className='text-white text-[18px] font-medium'>Email</p>
                </div>
                <p className='text-white/60 text-[16px]'>Admin@ladyfoxx.com</p>
              </div>

              <div className="flex flex-col md:w-[50%] w-full  items-start justify-center border border-[#2b5755] rounded-sm p-6 bg-[#2b5755]">
                <div className="flex gap-2">
                    <MailOpen size={22} className=' text-white' />
                    <p className='text-white text-[18px] font-medium'>Email</p>
                </div>
                <p className='text-white/60 text-[16px]'>Admin@ladyfoxx.com</p>
              </div>
              </div>


              
                <ContactForm/>
                
             
    </div>
  )
}
