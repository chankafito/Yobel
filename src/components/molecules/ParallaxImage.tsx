import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../../utils/cn";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  yValues?: [number, number];
}

export function ParallaxImage({
  src,
  alt,
  className,
  yValues = [-100, 0],
}: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], yValues);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className={cn(
        "mt-auto w-full aspect-[4/3] rounded-[30px] overflow-hidden relative shadow-sm",
        className
      )}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </motion.div>
  );
}
