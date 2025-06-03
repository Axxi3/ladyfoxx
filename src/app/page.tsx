import Hero from "@/Pages/Home/Hero/page";
import Process from "@/Pages/Home/process/page";
import WhyUs from "@/Pages/Home/whyus/page";
import Blockchain from "@/Pages/Home/blockchain/page";
import Unique from "@/Pages/Home/unique/page";
import FootCard from "@/Pages/Home/footCard/page";
import Faq from "@/Pages/Home/faq/page";


export default function Home() {
  return (
    <div className="bg-[#134341]">
      <Hero/>
      <WhyUs/>
      <Process/>
      <Blockchain/>
      <Unique/>
      <Faq/>
      <FootCard/>
     
    </div>
  );
}
