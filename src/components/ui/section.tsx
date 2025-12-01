import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../utils/cn";


interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ asChild, className, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "section";

    return (
      <Comp
        ref={ref}
        className={cn("w-full font-sans py-20 px-4 md:px-12", className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Section.displayName = "Section";
