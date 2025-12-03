import { useState } from "react";
import { motion, AnimatePresence, MotionValue } from "framer-motion";
import { Section } from "../components/ui/section";
import { Container } from "../components/ui/container";
import { ImageWithFallback } from "../components/ui/ImageWithFallback";

export interface ListItem {
  id?: string;
  title: string;
  description?: string;
  image?: string;
}

interface SectionListProps {
  title?: string;
  items: ListItem[];
  className?: string;
  textColor: MotionValue<string>;
}

export function SectionList({  title,  items, className = "", textColor }: SectionListProps) {
  const [activeId, setActiveId] = useState("");

  return (
    <Section className={`relative py-16 md:py-24 lg:py-32 px-6 ${className}`}>
      <Container className="relative max-w-7xl mx-auto">
        {title && (
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl mb-12 md:mb-16 text-center font-['Neue_Augenblick',sans-serif]"
            initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ color: textColor }}
          >
            {title}
          </motion.h2>
        )}

        <motion.div 
          className="relative min-h-[600px]"
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex flex-col w-full" onMouseLeave={() => setActiveId("")}>
          {items.map((item, idx) => (
              <motion.div 
                key={item.title}
                className="relative group last:border-0 min-h-[100px] md:min-h-0 md:h-[120px]"
                style={{ borderBottom: `1px solid`, borderColor: textColor }}
                onMouseEnter={() => setActiveId(String(idx + 1).padStart(2, '0'))}
                onClick={() => setActiveId(String(idx + 1).padStart(2, '0'))}
              >
                <div className="h-full cursor-pointer flex flex-col md:flex-row md:items-center justify-center md:justify-between gap-2 md:gap-4 px-4 md:px-0 py-6 md:py-0">
                  <motion.div className={`flex items-baseline gap-4 text-2xl md:text-4xl leading-[32px] transition-colors duration-500 w-full md:w-5/12 ${activeId === String(idx + 1).padStart(2, '0') ? 'text-black' : 'text-gray-400'}`} >
                    <span className="text-nowrap whitespace-pre">{String(idx + 1).padStart(2, '0')} /</span>
                    <span className="relative">{item.title}</span>
                  </motion.div>
                  
                  {/* Mobile View Content */}
                  <div className="md:hidden w-full">
                    <AnimatePresence>
                      {activeId === String(idx + 1).padStart(2, '0') && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          {item.description && (
                            <p className="text-lg text-gray-600 mb-4 ">{item.description}</p>
                          )}
                          
                          <div className="w-full aspect-video rounded-[30px] overflow-hidden shadow-sm">
                            <ImageWithFallback 
                              src={item.image}
                              className="w-full h-full object-cover" 
                              alt={item.title} />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  { item.description && (
                    <div className="hidden md:flex w-full md:w-5/12 justify-end">
                      <div className={`transition-opacity duration-500 ${activeId === String(idx + 1).padStart(2, '0')  ? 'opacity-100' : 'opacity-0'}`}>
                        <p className="text-base text-gray-600 max-w-md text-left font-augenblick">{item.description}</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {activeId && (() => {
              const activeIndex = items.findIndex((_, idx) =>
                activeId === String(idx + 1).padStart(2, "0")
              );
              const activeItem = items[activeIndex];

              //const activeItem = items.find(s => s.id === activeId);
              const positionClass = activeItem?.description ? "left-[50%]" : "left-[70%]";

              return (
                <motion.div 
                  className={`hidden lg:block absolute top-0 ${positionClass} -translate-x-1/2 w-[400px] h-60 pointer-events-none transition-transform duration-700 ease-out z-10`}
                  style={{ transform: `translateX(-50%) translateY(${((parseInt(activeId) - 1) * 120) - 60}px)` }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ opacity: { duration: 0.3 } }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={activeId}
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -20 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="w-full h-full rounded-[20px] overflow-hidden shadow-2xl"
                    >
                      <ImageWithFallback
                        src={activeItem?.image || items[0].image }
                        className="w-full h-full object-cover"
                        alt={activeId} 
                      />
                    </motion.div>
                  </AnimatePresence>
                </motion.div>

              )
            })()}
          </AnimatePresence>

        </motion.div>

      </Container>
    </Section>
  );
}

