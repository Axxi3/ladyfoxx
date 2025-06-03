import Tag from "@/components/ui/Tag";
import React from "react";
import Card from "./Card";
import { CompactLadyFoxxTags } from "./CompactLadyFoxxTags";

export default function page() {
  return (
    <div className="flex items-center flex-col text-white">
      <div className="flex flex-col items-center pt-8 sm:pt-12 lg:pt-16">
        <Tag className="uppercase mb-2 sm:mb-6">Why Choose Us?</Tag>
        <div className="max-w-4xl flex flex-col items-center justify-center gap-3 md:gap-2 py-1 pb-8 md:pb-0">
          <h1 className="text-2xl md:text-[40px] text-center font-medium leading-tight px-4">
            LadyFoxx Blockchain & LDFX
          </h1>
          <p className="text-sm md:text-[18px] text-center text-white/60 leading-relaxed px-4">
            The backbone of smart wealth — built for secure, instant investing and powered by a native currency designed for modern finance.
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
          title="Our Layer-1 Blockchain"
          points={[
            "Built from scratch for secure, transparent, and instant investing",
            "Every transaction is protected, recorded, and traceable",
            "Designed to handle millions of users and real-world growth",
            "Not just a token — a real Layer-1 financial blockchain",
            "Smart contracts automate rewards and protection",
          ]}
        />
        <Card
          title="Meet LDFX — The Native Currency"
          points={[
            "Powers all purchases, staking, rewards, and governance",
            "Spend, earn, and participate across the entire ecosystem",
            "Instant, borderless, and truly yours",
            "Instant settlements, ultra-low fees, no third-party risk",
            "Ready for NFTs, asset classes, and fintech integration",
          ]}
        />
      </div>

      <CompactLadyFoxxTags />
    </div>
  );
}
