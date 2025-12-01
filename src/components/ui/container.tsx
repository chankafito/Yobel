import React from "react";
import { cn } from "../../utils/cn";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn("max-w-[1340px] mx-auto", className)} 
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";
