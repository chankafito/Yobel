import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { yobelLogoPaths } from "../../assets/svg/icons";
import { useAssetPath } from "../../hooks/useAssetPath";

interface ScrollRevealVideoProps {
  videoSrc?: string;
  className?: string;
}

export function ScrollRevealVideo({ videoSrc, className }: ScrollRevealVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const getAssetPath = useAssetPath();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 150]);

  const defaultVideoSrc = getAssetPath("/assets/videos/camion.mp4");

  return (
    <div
      ref={containerRef}
      className={`relative h-[300vh] w-full bg-white ${className || ""}`}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
          <video
            src={videoSrc || defaultVideoSrc}
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Mask Layer */}
          <motion.div className="absolute inset-0 flex items-center justify-center bg-white mix-blend-screen z-10 pointer-events-none">
            <motion.svg
              viewBox="0 0 94 36"
              className="w-[80%] md:w-[60%] h-auto origin-center"
              preserveAspectRatio="xMidYMid meet"
              style={{ scale }}
            >
              {Object.values(yobelLogoPaths).map((d, i) => (
                <path key={i} d={d as string} fill="black" />
              ))}
            </motion.svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
