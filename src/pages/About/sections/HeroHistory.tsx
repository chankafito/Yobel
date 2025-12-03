import { motion } from "framer-motion";
import svg from "../../../assets/svg/logo";

interface HeroHistoryProps {
  label?: string;
  title: string;
  description: string;
}

const pathConfigs = [
  { d: svg.y, delay: 0 },
  { d: svg.o, delay: 0.15 },
  { d: svg.b, delay: 0.3 },
  { d: svg.e, delay: 0.45 },
  { d: svg.l, delay: 0.6 }
];

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
            <div className="w-full max-w-[600px] lg:max-w-[800px] xl:max-w-[1146px] h-auto aspect-[1146/429]">
              <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1146 429">
                {pathConfigs.map((item, index) => (
                  <motion.path
                    key={index}
                    d={item.d}
                    fill="var(--fill-0, black)"
                    id={`Vector_${index + 1}`}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: item.delay, ease: "easeOut" }}
                  />
                ))}
              </svg>
            </div>

          </motion.div>
          <motion.div 
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
          <p className="text-base md:text-lg text-black/50 font-medium"> {label} </p> 
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-24 items-start">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[65px] leading-tight lg:leading-[1.03] text-black  font-normal lg:max-w-[773px]">
              {title}
            </h1>
            <p className="text-lg md:text-xl lg:text-[22px] leading-relaxed lg:leading-[1.1] text-black font-normal lg:max-w-[320px] lg:shrink-0">
              {description}
            </p>
          </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}