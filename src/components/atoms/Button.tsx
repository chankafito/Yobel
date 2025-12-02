import * as React from "react";
import { cn } from "../../utils/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "outline", size = "lg", children, ...props }, ref) => {
    const baseStyles = "font-augenblick rounded-full transition-colors duration-500 ease-in-out inline-flex items-center justify-center";

    const variants = {
      primary: "bg-black text-white hover:bg-gray-800",
      outline: "bg-transparent border-[1.5px] border-black text-black hover:bg-black hover:text-white",
      ghost: "bg-transparent text-black hover:bg-black/10",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-6 text-xl",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
