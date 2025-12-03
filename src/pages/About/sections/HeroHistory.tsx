import React from "react";
import { motion } from "framer-motion";

interface HeroHistoryProps {
  label?: string;
  title: string;
  description: string;
}

export function HeroHistory({ label = "Historia",  title, description }: HeroHistoryProps) { 
  return (
    <>
      <div className="relative w-full overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-40 md:pt-40 lg:pt-48 pb-20 md:pb-32 lg:pb-40">
          <motion.div 
            className="mb-16 md:mb-24 lg:mb-32"
            initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >

          </motion.div>
          <motion.div 
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
          <p className="text-base md:text-lg text-black/50 font-medium font-['Neue_Augenblick']"> {label} </p> 
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-24 items-start">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[65px] leading-tight lg:leading-[1.03] text-black font-['Neue_Augenblick'] font-normal lg:max-w-[773px]">
              {title}
            </h1>
            <p className="text-lg md:text-xl lg:text-[22px] leading-relaxed lg:leading-[1.1] text-black font-['Neue_Augenblick'] font-normal lg:max-w-[320px] lg:shrink-0">
              {description}
            </p>
          </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}