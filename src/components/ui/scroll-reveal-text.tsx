import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface ScrollRevealStringProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

// Animates text letter-by-letter based on scroll position, preserving word wrapping
export function ScrollRevealString({ text, className = "", as: Tag = "div" }: ScrollRevealStringProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start 0.9", "end 0.6"]
  });

  const words = text.split(" ");
  const totalChars = text.length;
  let charIndex = 0;

  return (
    <Tag ref={elementRef} className={`flex flex-wrap gap-x-[0.25em] ${className}`}>
      {words.map((word, wordIndex) => {
        const wordChars = word.split("");
        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {wordChars.map((char, i) => {
              const currentGlobalIndex = charIndex;
              charIndex++;
              
              // Calculate the activation range for this character
              const start = (currentGlobalIndex / totalChars) * 0.8;
              const end = start + 0.1;

              return (
                <Char 
                  key={i} 
                  char={char} 
                  progress={scrollYProgress} 
                  range={[start, end]} 
                />
              );
            })}
            {/* Account for the space that was split out */}
            {(() => { charIndex++; return null; })()}
          </span>
        );
      })}
    </Tag>
  );
}

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Char({ char, progress, range }: CharProps) {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {char}
    </motion.span>
  );
}
