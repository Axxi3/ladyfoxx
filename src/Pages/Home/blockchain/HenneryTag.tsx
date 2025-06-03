import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface TagProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  icon: React.ReactNode;
}

export default function HenneryTag({ name, icon, className, ...otherProps }: TagProps) {
  return (
    <div
      className={twMerge(
        "inline-flex items-center gap-2 px-4 py-2 rounded-[99px] bg-[#F1FFD2] text-green-800 ",
        className
      )}
      {...otherProps}
    >
      <div className="flex items-center justify-center w-9 h-9 rounded-full  text-yellow-500">
        {icon}
      </div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}
