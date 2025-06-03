import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";
import Link from "next/link";

const classes = cva(
  "border h-12 rounded-full md:text-[14px] text-[12px] px-6 font-medium transition-colors duration-200 inline-flex items-center justify-center",
  {
    variants: {
      variant: {
        primary:
          "bg-[#008080] text-white border-[#008080] hover:bg-[#DF7AFE] hover:border-[#E05517]",
        secondary:
          "border-[#008080] text-[#ffffff] transition duration-100 hover:text-white bg-transparent hover:bg-[#DF7AFE]",
      },
    },
  }
);

type ButtonProps = {
  variant: "primary" | "secondary";
  link?: string;
} & HTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant,
  className,
  children,
  link,
  ...otherProps
}: ButtonProps) {
  const combinedClasses = classes({ variant, className });

  if (link) {
    return (
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...otherProps}>
      {children}
    </button>
  );
}
