import { ArrowUpRight } from "lucide-react";

export default function AICallCard() {
  return (
    <div className="flex items-center justify-center py-14" >
    <div className="w-[100%] md:w-[750px] max-w-[750px] h-[363px]  rounded-[12px] flex flex-col justify-center items-center px-4 py-[80px] gap-[15px] text-center bg-white/30 backdrop-blur-md border-gray-600">
      <h2 className="text-white text-3xl md:text-4xl font-semibold leading-tight">
        Let AI do the Work so <br /> you can <span className="text-[#134341]">Scale Faster</span>
      </h2>
      <p className="text-gray-300 text-base md:text-lg">Book a Call Today and Start Automating</p>
      <button className="mt-2 px-5 py-3 text-white bg-[#134341]  rounded-md font-medium flex items-center gap-2 hover:text-[#134341] transition">
        Book a free call <ArrowUpRight size={16} />
      </button>
    </div>
    </div>
  );
}
