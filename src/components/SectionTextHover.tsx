import React, {  useState } from "react";
import { Section } from "./ui/section";
import { Container } from "./ui/container";
import { motion, AnimatePresence } from "framer-motion";
import valueImage from "../assets/images/photo.jpg"

export interface PurposeItem {
  title: string;
  img: string;
}

interface SectionTextHoverProps {
  title: string;
  desc: string;
  items: PurposeItem[];
}

export function SectionTextHover({ title, desc, items }: SectionTextHoverProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <>
      <Section className="bg-white py-24">
        <Container>
          <div className="relative" onMouseLeave={() => setHoveredIndex(null)}>
              {/* Header */}
              <div className="mb-16">
                <span className="text-gray-400 text-lg font-medium mb-4 block">{title}</span>
                <h2 className="text-4xl md:text-5xl font-normal leading-tight text-black"> {desc} </h2>
              </div>

              {/* Solutions List with Hover Image */}
              <div className="relative">
                {items.map((item, idx) => {
                    const isHovered = hoveredIndex === idx;
                    
                    return (
                      <div 
                          key={idx} 
                          className="relative flex items-center py-6 md:py-0 md:h-[120px] border-b-[1.5px] border-gray-200 cursor-pointer group"
                          onMouseEnter={() => setHoveredIndex(idx)}
                      >
                          <div className="w-full flex justify-between items-center z-10 relative">
                            <h4 className={`w-full text-[28px] md:text-[32px] font-normal leading-tight transition-colors duration-300 ${isHovered ? 'text-black' : 'text-gray-400'}`}>
                                <span className="mr-4">0{idx + 1} /</span> 
                                <span className={isHovered ? 'text-black' : 'text-gray-600'}>{item}</span>
                            </h4>
                          </div>
                      </div>
                    );
                })}

                {/* Floating Image with Animation */}
                <div className="absolute inset-0 pointer-events-none z-20 hidden lg:block">
                    <AnimatePresence>
                      {hoveredIndex !== null && (
                          <motion.div 
                            className="absolute top-0 right-0 w-[450px] h-[280px]"
                            initial={{ opacity: 0, y: (hoveredIndex * 120) - 60 }}
                            animate={{ opacity: 1, y: (hoveredIndex * 120) - 60 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          >
                            <motion.div
                              initial={{ scale: 0.9 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0.9 }}
                              className="w-full h-full rounded-[20px] overflow-hidden shadow-2xl"
                            >
                                <img src={valueImage} className="w-full h-full object-cover" alt="Value Proposition" />
                            </motion.div>
                          </motion.div>
                      )}
                    </AnimatePresence>
                </div>
              </div>
          </div>
        </Container>
      </Section>
    </>
  );
}