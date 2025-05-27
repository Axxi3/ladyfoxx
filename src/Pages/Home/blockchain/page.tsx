import Tag from "@/components/ui/Tag";
import React from "react";
import Card from "./Card";
import { CompactLadyFoxxTags } from "./CompactLadyFoxxTags";

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
      <div
        className="
      w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
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

      <CompactLadyFoxxTags />
    </div>
  );
}
