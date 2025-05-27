import Tag from "@/components/ui/Tag";
import React from "react";
import Card from "./Card";

export default function Page() {
  return (
    <div className="flex flex-col items-center bg-black text-white min-h-screen">
      {/* Heading Section */}
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

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-6 py-12 px-4 max-w-6xl w-full">
        {[...Array(6)].map((_, idx) => (
          <Card key={idx} step={idx + 1} />
        ))}
      </div>
    </div>
  );
}
