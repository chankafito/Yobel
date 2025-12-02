import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence, useTransform } from "framer-motion";
import { cn } from "../../utils/cn";

export interface DataPoint {
  value: string;
  label: string;
  sub: string;
}

interface VideoScrollSectionProps {
  videoSrc: string;
  items: DataPoint[];
  className?: string;
}

export function VideoScrollSection({ videoSrc, items, className }: VideoScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const totalPoints = items.length;
    if (totalPoints === 0) return;

    const segmentSize = 1 / totalPoints;
    const index = Math.min(
        Math.floor(latest / segmentSize),
        totalPoints - 1
    );
    setActiveIndex(index);
  });

  const maskOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const imgPlaceholder = "data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%201452%201020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20id%3D%22Vector%2030%22%20d%3D%22M732.092%2075.0383C472.092%2075.0389%2012.5924%20-1.9617%2012.1064%200.0382969C11.6205%202.0383%200%201019.04%200%201019.04C0%201019.04%20405.092%20964.5%20732.092%20964.5C1059.09%20964.5%201451.62%201019.04%201451.62%201019.04V20.5385C1451.62%2020.5385%201012.77%2075.0377%20732.092%2075.0383Z%22%20fill%3D%22var(--fill-0%2C%20%23C4C4C4)%22%2F%3E%0A%3C%2Fsvg%3E%0A"; // Placeholder image for mask

  return (
    <div ref={containerRef} className={cn("relative h-[400vh] w-full bg-black", className)}>
      <div className="absolute top-0 left-0 w-full h-32 z-30 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.video
          src={videoSrc}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          autoPlay
          loop
          preload="auto"
          style={{
            maskImage: `linear-gradient(to bottom, 
              rgba(0,0,0,${maskOpacity}) 0%, 
              rgba(0,0,0,${maskOpacity}) 100%), 
              url("${imgPlaceholder}")`,
            maskSize: '100% 100%, 100% 100%',
            maskRepeat: 'no-repeat, no-repeat',
            maskPosition: 'center, center',
            maskComposite: 'intersect',
            WebkitMaskImage: `linear-gradient(to bottom, 
              rgba(0,0,0,1) 0%, 
              rgba(0,0,0,1) 100%), 
              url("${imgPlaceholder}")`,
            WebkitMaskSize: '100% 100%, 100% 100%',
            WebkitMaskRepeat: 'no-repeat, no-repeat',
            WebkitMaskPosition: 'center, center',
            WebkitMaskComposite: 'source-in'
          }}
        />

        <div className="absolute bottom-10 right-5 md:bottom-20 md:right-[50px] z-20">
          <div className="w-[300px] md:w-[400px] p-8 rounded-[30px] backdrop-blur-xl bg-white/10 border border-white/20 text-white shadow-2xl overflow-hidden relative">
            <div className="relative min-h-[160px]">
              <AnimatePresence mode="wait">
                {items[activeIndex] && (
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 flex flex-col justify-between"
                  >
                    <div className="text-5xl md:text-[64px] font-light leading-none tracking-tighter font-augenblick mb-4">
                      {items[activeIndex].value}
                    </div>
                    <div className="relative">
                    <div className="w-full h-[1px] bg-white/30 mb-4" />
                      <div className="flex justify-between items-end">
                        <span className="text-lg md:text-xl font-light opacity-90 leading-tight max-w-[70%] font-augenblick">
                          {items[activeIndex].label}
                        </span>
                        <span className="text-sm font-mono opacity-60 tracking-widest">
                          {items[activeIndex].sub}
                        </span>
                      </div>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}
