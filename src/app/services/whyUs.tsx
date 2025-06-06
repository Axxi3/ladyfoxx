import Tag from "@/components/ui/Tag";
import React from "react";

export default function whyus() {
  return (
    <div className="flex items-center flex-col rounded-tl-[60px] rounded-tr-[60px] bg-[linear-gradient(180deg,_#0C231F_0%,_#134341_100%)] w-full  text-white min-h-screen">
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center pt-8 sm:pt-12 lg:pt-16">
          <Tag className=" mb-2 sm:mb-2">Why LadyFoxx?</Tag>
          <div className="max-w-4xl flex flex-col items-center justify-center gap-3 md:gap-2  pb-8 md:pb-0">
            <h1 className="text-2xl md:text-[40px] text-center font-medium leading-tight px-4">
              Why LadyFoxx Stands Out?
            </h1>
            <p className="text-sm md:text-[18px] text-center text-white/60 leading-relaxed px-4">
              Empowering next-gen investors with smart tools, secure systems,
              and rewarding experiences.
            </p>
          </div>
        </div>

        {/* Features section */}
        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-12 pb-8 sm:pb-12">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 px-4 py-6 md:py-10 w-full feature-section">
            {/* Image Container */}
            <div className=" bg-[#2B5755] px-14 pt-6 overflow-hidden rounded-[10px] md:px-14 md:pt-14 w-full max-w-sm md:max-w-none md:w-[450px] md:h-[350px] flex-shrink-0">
              <img
                src="https://framerusercontent.com/images/x2tXWQ9bFax87lx2NUoqJHB8Wo.png"
                alt="Feature illustration"
                className="w-full h-[113%] object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col items-start justify-center gap-3 md:gap-4 text-left max-w-xl">
              <Tag>Smart</Tag>
              <h3 className="text-xl md:text-3xl font-medium leading-tight">
                Personalized AI Investing
              </h3>
              <p className="text-sm md:text-lg text-white/60 leading-relaxed">
                Our AI Portfolio Manager, powered by OpenAI, analyzes your goals
                and risk profile to build a customized, diversified investment
                plan—so you can invest smarter, not harder.
              </p>

              {/* Optional extra tags */}
              {/* 
    <div className="flex flex-wrap gap-2 md:gap-3">
      <Tag>Insightful</Tag>
      <Tag>Custom Built</Tag>
    </div> 
    */}
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 px-4 py-6 md:py-10 w-full feature-section">
            {/* Image */}
            <div className="pl-[25px] pr-[25px] pt-[25px] bg-[#2B5755] rounded-[10px] w-full max-w-sm md:max-w-none md:w-[450px] md:h-[350px] order-1 md:order-2 flex-shrink-0">
              <img
                src="https://framerusercontent.com/images/Ywn2i5CuHLg9CU9BxCkMSGwgo.png?scale-down-to=1024"
                alt="Feature illustration"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col items-start justify-center gap-3 md:gap-4 order-2 md:order-1 max-w-xl md:px-8 text-left">
              <Tag>Secure</Tag>
              <h3 className="text-xl md:text-3xl font-medium leading-tight">
                Secure & Transparent Blockchain Tracking
              </h3>
              <p className="text-sm md:text-lg text-white/60 leading-relaxed">
                Every transaction is securely recorded on LadyFoxx&apos;s
                Layer-1 blockchain. Enjoy peace of mind with full transparency
                and control over your investments.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 px-4 py-6 md:py-10 w-full feature-section">
            {/* Image */}
            <div className="pl-[25px] pr-[25px] pt-[25px] bg-[#2B5755] rounded-[10px] md:p-14 w-full max-w-sm md:max-w-none md:w-[450px] md:h-[350px] flex-shrink-0">
              <img
                src="https://framerusercontent.com/images/g1fnEeoRrBQWGYoJSA6waGStqxk.svg"
                alt="Feature illustration"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col items-start justify-center gap-3 md:gap-4 max-w-xl text-left">
              <Tag>Rewarding</Tag>
              <h3 className="text-xl md:text-3xl font-medium leading-tight">
                A Learn-to-Earn with Real Rewards
              </h3>
              <p className="text-sm md:text-lg text-white/60 leading-relaxed">
                We believe knowledge is power—and profit. Complete financial
                education modules and quizzes to earn LDFX rewards and grow both
                your portfolio and financial literacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
