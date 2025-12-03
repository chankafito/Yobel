import React from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface SectionColorTransitionProps {
  children: (textColor: MotionValue<string>) => React.ReactNode;
  colors?: string[];
  scrollPoints?: number[];
  textColorTransition?: {
    points: number[];
    colors: string[];
  };
  className?: string;
}

// Degradado por defecto (Historia)
const DEFAULT_COLORS = [
  "#FFF700", "#E7EF20", "#CFE842", "#B8E063", "#A1D883",
  "#88CFA3", "#70C9C5", "#59C1E6", "#97E4FF", "#FFFFFF"
];

const DEFAULT_SCROLL_POINTS = [0, 0.11, 0.22, 0.33, 0.44, 0.55, 0.66, 0.77, 0.88, 1.0];

export function SectionColorTransition({
  children,
  colors = DEFAULT_COLORS,
  scrollPoints = DEFAULT_SCROLL_POINTS,
  textColorTransition = { points: [0, 1], colors: ["#000000", "#000000"] },
  className = ""
}: SectionColorTransitionProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    scrollPoints,
    colors
  );

  const textColor = useTransform(
    scrollYProgress,
    textColorTransition.points,
    textColorTransition.colors
  );

  return (
    <motion.div
      ref={containerRef}
      className={`relative w-full ${className}`}
      style={{ backgroundColor }}
    >
      {children(textColor)}
    </motion.div>
  );
}
