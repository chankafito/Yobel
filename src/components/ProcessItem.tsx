import React from "react";
import { cn } from "../utils/cn";

interface ProcessItemProps {
  icon: string; // SVG como string
  title: string;
  description: string;
  className?: string;
}

export function ProcessItem({ icon, title, description, className }: ProcessItemProps) {
  return (
    <div className={cn("flex flex-col lg:flex-row gap-[60px] lg:gap-[200px] items-start py-12 w-full", className)}>
      <div className="shrink-0 lg:w-[40%]">
        <div 
          className="relative w-[153px] h-[153px] flex items-center justify-center [&_svg]:w-full [&_svg]:h-full"
          dangerouslySetInnerHTML={{ __html: icon }}
        />
      </div>
      <div className="flex flex-col items-start gap-[20px] w-full lg:w-[60%]">
        <h3 className="text-[36px] font-augenblick leading-[32px] text-black w-full">{title}</h3>
        <p className="text-[22px] font-augenblick leading-[24px] text-black w-full">{description}</p>
      </div>
    </div>
  );
}