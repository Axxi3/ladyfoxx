import Tag from "@/components/ui/Tag";
import React from "react";


// interface CardProps {
//   step: number;
// }

export default function Card() {
  return (
    <div className="flex flex-col items-start justify-between p-6 bg-[#0A0A0A] rounded-2xl gap-4 w-full h-full transition-transform hover:scale-[1.02] duration-200">
      <Tag>{`STEP 0`}</Tag>
      <h4 className="text-lg md:text-[23px] text-white font-semibold">
        SMART INVESTING
      </h4>

      <div className="">
        <ul>
          <li className="">
            <p className="text-sm md:text-lg text-white/60">
             • Custom-built for secure, transparent, and lightning-fast investing
            </p>
          </li>
          <li>
            <p className="text-sm md:text-lg text-white/60">
             • Custom-built for secure, transparent, and lightning-fast investing
            </p>
          </li>
          <li>
            <p className="text-sm md:text-lg text-white/60">
             • Custom-built for secure, transparent, and lightning-fast investing
            </p>
          </li>
        </ul>
      </div>

     
    </div>
  );
}
