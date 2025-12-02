import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { yobelLogoPaths } from "../../assets/svg/icons";
import camionVideo from "../../assets/videos/camion.mp4";

export function ScrollRevealVideo() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 150]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-white h-[300vh]"
    >
      <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
          <video
            src={camionVideo}
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Mask Layer */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              backgroundColor: "white",
              mixBlendMode: "screen",
              zIndex: 10,
            }}
          >
            <motion.svg
              viewBox="0 0 94 36"
              className="w-[80%] md:w-[60%] h-auto"
              preserveAspectRatio="xMidYMid meet"
              style={{
                scale,
                transformOrigin: "center center",
              }}
            >
              {Object.values(yobelLogoPaths).map((d, i) => (
                <path key={i} d={d as string} fill="black" />
              ))}
            </motion.svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
