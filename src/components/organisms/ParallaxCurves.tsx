import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxCurvesProps {
  className?: string;
}

export function ParallaxCurves({ className }: ParallaxCurvesProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -260]);

  return (
    <div
      ref={ref}
      className={`relative w-[120vw] left-1/2 -translate-x-1/2 h-[250px] md:h-[450px] overflow-hidden mt-0 mb-0 bg-white ${className || ""}`}
    >
      <svg
        className="absolute w-full h-full top-0 overflow-visible"
        viewBox="0 0 2198 879"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="parallax-gradient-1"
            x1="1099"
            x2="1099"
            y1="-124.5"
            y2="324"
          >
            <stop offset="0.0961538" stopColor="#FFD700" />
            <stop offset="1" stopColor="#FFFFFF" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="parallax-gradient-2"
            x1="1099"
            x2="1099"
            y1="-31.5"
            y2="417"
          >
            <stop offset="0.0961538" stopColor="#FFD700" />
            <stop offset="1" stopColor="#FFFFFF" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="parallax-gradient-3"
            x1="1099"
            x2="1099"
            y1="61.5"
            y2="510"
          >
            <stop offset="0.0961538" stopColor="#FFD700" />
            <stop offset="1" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>

        <motion.ellipse
          style={{ y: y1 }}
          cx="1099"
          cy="346.5"
          rx="1099"
          ry="346.5"
          fill="url(#parallax-gradient-1)"
        />
        <motion.ellipse
          style={{ y: y2 }}
          cx="1099"
          cy="439.5"
          rx="1099"
          ry="346.5"
          fill="url(#parallax-gradient-2)"
        />
        <motion.ellipse
          style={{ y: y3 }}
          cx="1099"
          cy="532.5"
          rx="1099"
          ry="346.5"
          fill="url(#parallax-gradient-3)"
        />
      </svg>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>
  );
}
