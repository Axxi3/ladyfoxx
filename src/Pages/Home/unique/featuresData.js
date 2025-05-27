import { Vote, GraduationCap, Globe, Landmark } from "lucide-react";

const iconClass = "w-12 h-12 text-primary";

const featuresData = [
  {
    icon: <Vote className={iconClass} />,
    title: "Voice & Vote in Every Upgrade",
    description:
      "With LadyFoxx DAO, your ideas matter. Suggest platform features, improvements, or new asset classes—and watch your proposals come to life through community voting.",
  },
  {
    icon: <GraduationCap className={iconClass} />,
    title: "Learn-to-Earn Revolution",
    description:
      "LadyFoxx rewards users for financial learning. Complete educational modules, quizzes, or share knowledge with friends and earn LDFX rewards—turning learning into real investing power.",
  },
  {
    icon: <Globe className={iconClass} />,
    title: "Global Reach, Local Touch",
    description:
      "The LadyFoxx app is available in Hindi, English, and regional languages. No matter where you're from, you'll get a fully localized and supportive experience.",
  },
  {
    icon: <Landmark className={iconClass} />,
    title: "LadyFoxx for Institutions",
    description:
      "Multilingual & Inclusive platform designed to serve institutional needs with comprehensive financial tools and educational resources for organizations.",
  },
];

export default featuresData;
