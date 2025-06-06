import Tag from "@/components/ui/Tag";
import React from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import WhyUs from "@/Pages/Home/whyus/page";
import OurTeam from "@/Pages/aboutus/ourTeam/page";
import FootCard from "@/Pages/Home/footCard/page";
import FAQSection from "@/Pages/Home/faq/page";

export default function page() {
  return (
    <div className="flex flex-col bg-[#134341] items-center justify-center  min-h-screen">
      <div className="w-full flex flex-col justify-center items-center bg-[linear-gradient(180deg,_#134341_0.84%,_rgba(19,67,65,0)_100.84%)]">
        <div className="md:mt-8  w-full mt-20 flex max-w-6xl items-center flex-col justify-center h-screen">
        <Tag>About Us</Tag>
        <TextAnimate
          animation="blurInUp"
          by="character"
          once
          className="lg:text-[70px] md:text-[60px] text-[45px]  text-white mb-1"
        >
          Who are We?
        </TextAnimate>

        <div className="text-white/60">
          <TextAnimate className="md:text-[24px] text-[16px] mt-9 px-6 text-center">
            LadyFoxx is a next-generation investment platform built to democratize wealth creation through 
            cutting-edge AI, secure blockchain technology, and a community-first approach. 
            We eliminate entry barriers, offer intelligent portfolio management, and empower 
            users with full control and transparency. Whether you&lsquo;re investing ₹100 or ₹1 lakh, 
            our mission is the same: to make smart investing accessible, rewarding, and truly inclusive for everyone.
          </TextAnimate>
        </div>
      </div>
      </div>
      

      <WhyUs />
      <OurTeam />
      <FAQSection />
      <FootCard />
    </div>
  );
}
