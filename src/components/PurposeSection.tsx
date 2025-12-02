import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypewriterText  } from "./motion-text";
export interface PurposeItem {
  title: string;
  content: string;
}

interface PurposeSectionProps {
  items: PurposeItem[];
}

export function PurposeSection({ items }: PurposeSectionProps) {

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Define opacity ranges for each section (3 items)
  const opacities = [
    useTransform(scrollYProgress, [0.0, 0.2, 0.3, 0.35], [0, 1, 1, 0]),
    useTransform(scrollYProgress, [0.35, 0.5, 0.6, 0.65], [0, 1, 1, 0]),
    useTransform(scrollYProgress, [0.65, 0.8, 0.95, 1.0], [0, 1, 1, 0]),
  ];

  // Typewriter progress ranges for each section
  const typewriterRanges = [
    { start: 0.05, end: 0.22 },  // Propósito
    { start: 0.38, end: 0.55 },  // Misión
    { start: 0.71, end: 0.88 }   // Visión
  ];

  return (
    <>
      <div ref={containerRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-white">
          {items.map((item, idx) => (
            <motion.div 
              key={idx} 
              style={{ opacity: opacities[idx] }}
              className="absolute inset-0 flex items-center justify-center px-6 md:px-20 z-10"
            >
              <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center">
                <div className="flex flex-col gap-[32px] items-center justify-center w-full">
                  {/* Yobel Icon */}
                  <div className="w-[42px] h-[42px] md:w-[56px] md:h-[56px]">
                    <svg className="block size-full" fill="none" viewBox="0 0 40 40">
                      <path d="M0 39.9994V26.6769C0 26.6769 30.2009 13.2457 30.2009 7.57849C30.2009 4.03566 0 13.0881 0 13.0881V0H29.2309C41.0219 0 39.9763 6.48408 39.9763 12.9799V40H20.3629C20.3629 40 33.4793 18.1638 30.2009 18.1638C25.4049 18.1638 0 39.9994 0 39.9994Z" fill="black"></path>
                    </svg>
                  </div>
                  
                  <p className="font-augenblick leading-[48px] not-italic relative shrink-0 text-3xl md:text-[45px] text-center w-full text-gray-500">
                    {item.title}
                  </p>
                  
                  <div className="max-w-5xl">
                    <p className="font-augenblick leading-[1.4] md:leading-[48px] text-2xl md:text-[45px] text-center text-black">
                      <TypewriterText 
                        text={item.content}
                        scrollProgress={scrollYProgress}
                        startProgress={typewriterRanges[idx].start}
                        endProgress={typewriterRanges[idx].end}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
