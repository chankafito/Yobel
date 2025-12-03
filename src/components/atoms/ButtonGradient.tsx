import React from "react";

interface ButtonGradientProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const ButtonGradient = React.forwardRef<HTMLButtonElement, ButtonGradientProps>(
  ({ children, onClick, className = "", type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        className={`px-4 py-4 rounded-[30px] border-[1.5px] border-black bg-black text-white relative overflow-hidden group text-2xl leading-6 font-medium transition-all duration-500 hover:!border-0 hover:!px-[calc(1rem+1.5px)] hover:!py-[calc(1rem+1.5px)] ${className}`}
        {...props}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-[#FFF700] via-[#FFF700] via-32% via-[#FFE300] via-70% to-[#5dd3c0] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[30px]"></span>
        <span className="relative z-10 group-hover:text-black transition-colors duration-500">{children}</span>
      </button>
    );
  }
);

ButtonGradient.displayName = "ButtonGradient";