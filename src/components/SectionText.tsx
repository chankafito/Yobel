import React, { useRef, useState, useEffect } from "react";

export interface PurposeItem {
  title: string;
  content: string;
}

interface PurposeSectionProps {
  items: PurposeItem[];
}

export function PurposeSection({ items }: PurposeSectionProps) {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-20">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-6 md:gap-10">
              <div className="w-[42px] h-[42px] md:w-[56px] md:h-[56px]">
                <svg className="block size-full" fill="none" viewBox="0 0 40 40">
                  <path d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0z" fill="black" />
                </svg>
              </div>
              
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
          ))}
        </div>
      </div>
    </section>
  );
} 