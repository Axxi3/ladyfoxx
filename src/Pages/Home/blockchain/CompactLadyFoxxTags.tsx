import { 
  Shield, 
  Zap, 
  Brain, 
  Layers, 
  Rocket 
} from "lucide-react";
import HenneryTag from "./HenneryTag";

export function CompactLadyFoxxTags() {
  const tags = [
    {
      name: "Layer-1 Blockchain",
      icon: <Layers className="w-4 h-4" />
    },
    {
      name: "Instant & Low-Cost",
      icon: <Zap className="w-4 h-4" />
    },
    {
      name: "Smart Contracts",
      icon: <Brain className="w-4 h-4" />
    },
    {
      name: "NFT Ready",
      icon: <Rocket className="w-4 h-4" />
    },
    {
      name: "Secure",
      icon: <Shield className="w-4 h-4" />
    }
  ];

  return (
    <div className="flex items-center justify-center flex-wrap gap-4 p-4 max-w-3xl mx-auto">
      {tags.map((tag, index) => (
        <HenneryTag
          key={index}
          name={tag.name}
          icon={tag.icon}
          className="text-xs cursor-pointer"
        />
      ))}
    </div>
  );
}