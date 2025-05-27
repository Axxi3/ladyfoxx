import { ArrowUpRight } from "lucide-react";

export default function AICallCard() {
  return (
    <div className="flex items-center justify-center py-14" >
    <div className="w-[80%] md:w-[750px] max-w-[750px] h-[363px]  rounded-[12px] flex flex-col justify-center items-center px-[30px] py-[80px] gap-[15px] text-center bg-gradient-to-br from-[rgba(129,74,200,0.4)] via-[rgba(13,13,13,0.8)] to-[rgba(129,74,200,0.4)]">
      <h2 className="text-white text-3xl md:text-4xl font-semibold leading-tight">
        Let AI do the Work so <br /> you can <span className="text-purple-400">Scale Faster</span>
      </h2>
      <p className="text-gray-300 text-base md:text-lg">Book a Call Today and Start Automating</p>
      <button className="mt-2 px-5 py-3 bg-purple-600 text-white rounded-md font-medium flex items-center gap-2 hover:bg-purple-700 transition">
        Book a free call <ArrowUpRight size={16} />
      </button>
    </div>
    </div>
  );
}
