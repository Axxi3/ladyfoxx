import Tag from "@/components/ui/Tag";
import React from "react";
import { LucideIcon } from "lucide-react";

interface CardProps {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function Card({ step, title, description, icon: Icon }: CardProps) {
  return (
    <div className="flex flex-col items-start justify-between p-6 bg-[#2B5755] rounded-2xl gap-1 w-full h-full transition-transform hover:scale-[1.02] duration-200">
      <div className="flex flex-col gap-2 mb-6">
        <Tag className="text-white">{`STEP 0${step}`}</Tag>
        <div className="flex flex-col gap-1">
          <h4 className="text-lg md:text-[23px] text-white font-semibold">
            {title}
          </h4>
          <p className="text-sm md:text-[15px] text-white/60">{description}</p>
        </div>
      </div>

      <div className="relative w-20 h-20 mx-auto mb-2">
        <div className="absolute inset-0 rounded-full bg-[#476F58]/60 scale-125 z-0"></div>
        <div className="absolute inset-1 rounded-full bg-[#476F58] scale-110 z-10"></div>
        <div className="relative z-20 flex items-center justify-center w-full h-full rounded-full bg-[#B9FBC0]">
          <Icon className="w-8 h-8 text-[#134341]" />
        </div>
      </div>
    </div>
  );
}
