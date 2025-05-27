import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Tag(props:HTMLAttributes<HTMLDivElement>){
    const {className,children,...otherProps} = props;
    return(
        <div className={twMerge("inline-flex border bg-[#0A0A0A] gap-2 text-white  border-[#222222]  px-3 py-1 rounded-sm  items-center",className) } {...otherProps}>
           
            <span className="md:text-[16px] text-[12px] ">
                {children}
            </span>
        </div>
    )
}