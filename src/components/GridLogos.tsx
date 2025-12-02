import React from "react";
import { cn } from "../utils/cn";

interface LogoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function GridLogos({ children, className }: LogoGridProps) {
  return (
    <div className={cn("grid grid-cols-2 md:flex md:flex-wrap md:justify-between items-center gap-x-8 gap-y-12 md:gap-12", className)}>
      {React.Children.map(children, (child) => (
        <div className="flex items-center justify-center w-full aspect-[4/3] md:aspect-auto md:w-auto [&>*]:scale-125 md:[&>*]:scale-100">
          {child}
        </div>
      ))}
    </div>
  );
}
