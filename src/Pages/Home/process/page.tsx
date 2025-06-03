import Tag from "@/components/ui/Tag";
import React from "react";
import Card from "./Card";
import {
  UserPlus,
  LineChart,
  SlidersHorizontal,
  ShieldCheck,
  BellRing,
  Users,
} from "lucide-react";

export default function Page() {
  const smartWealthSteps = [
    {
      step: 1,
      title: "Onboard & Personalize",
      description:
        "Sign up in minutes. Set your goals and risk profile. Lady Foxx tailors your experience from the start.",
      icon: UserPlus,
    },
    {
      step: 2,
      title: "AI Portfolio Creation",
      description:
        "Our AI Portfolio Manager, powered by OpenAI, analyzes your answers and current market data to build a personalized, diversified investment plan.",
      icon: LineChart,
    },
    {
      step: 3,
      title: "You’re Always in Control",
      description:
        "Review, edit, or approve your portfolio. Get simple, clear explanations for every AI recommendation.",
      icon: SlidersHorizontal,
    },
    {
      step: 4,
      title: "Secure Blockchain Protection",
      description:
        "Your investments and all transactions are securely recorded on LadyFoxx’s Layer-1 blockchain with LDFX.",
      icon: ShieldCheck,
    },
    {
      step: 5,
      title: "Real-Time Alerts & Learning",
      description:
        "Receive performance updates, actionable alerts, and daily tips from Lady Foxx—so you never miss an opportunity.",
      icon: BellRing,
    },
    {
      step: 6,
      title: "Grow & Participate",
      description:
        "As your portfolio grows, unlock advanced features, learn new strategies, and join the LadyFoxx community. Vote on platform changes via our DAO.",
      icon: Users,
    },
  ];

  return (
    <div className="flex flex-col items-center  text-white min-h-screen">
      <div className="flex flex-col items-center pt-12 sm:pt-16 lg:pt-20 text-center px-4">
        <Tag className="uppercase mb-2 sm:mb-3">Process</Tag>
        <div className="max-w-4xl space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-[40px] font-semibold leading-tight">
            How LadyFoxx Works?
          </h1>
          <p className="text-sm md:text-lg text-white/60 leading-relaxed">
            From sign-up to smart investing, here&apos;s how LadyFoxx helps you
            take control of your financial future.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-6 py-12 px-4 max-w-6xl w-full">
        {smartWealthSteps.map((step) => (
          <Card
            key={step.step}
            step={step.step}
            title={step.title}
            description={step.description}
            icon={step.icon}
          />
        ))}
      </div>
    </div>
  );
}
