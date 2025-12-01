import { useState } from "react";
import {  motion, AnimatePresence } from "framer-motion";
import { Section } from "../../../components/ui/section";
import { Container } from "../../../components/ui/container";

import { ImageWithFallback } from "../../../components/ui/ImageWithFallback";

import { useServices } from "../../../hooks/useServices";
import { useAssetPath } from "../../../hooks/useAssetPath";

export function Services() {
  const [activeId, setActiveId] = useState("");
  const services = useServices();
  const getAssetPath = useAssetPath();

  return (
    <Section className="bg-white">
      <Container className="relative min-h-[600px]">

        <div className="flex flex-col w-full" onMouseLeave={() => setActiveId("")}>
          {services.map((service) => (
            <div 
              key={service.id}
              className="relative group border-b border-gray-300 last:border-0 min-h-[100px] md:min-h-0 md:h-[120px]"
              onMouseEnter={() => setActiveId(service.id)}
              onClick={() => setActiveId(service.id)}
            >
              <div className="h-full cursor-pointer flex flex-col md:flex-row md:items-center justify-center md:justify-between gap-2 md:gap-4 px-4 md:px-0 py-6 md:py-0">
                <div className={`flex items-baseline gap-4 text-2xl md:text-4xl transition-colors duration-500 w-full md:w-5/12 ${activeId === service.id ? 'text-black' : 'text-gray-400'}`}>
                  <span>{service.id} /</span>
                  <span className="font-augenblick">{service.title}</span>
                </div>
                
                <div className="md:hidden w-full">
                    <AnimatePresence>
                    {activeId === service.id && (
                        <motion.div 
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                            className="overflow-hidden"
                        >
                            <p className="text-lg text-gray-600 mb-4 font-augenblick">{service.description}</p>
                            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-sm">
                                <ImageWithFallback src={getAssetPath(service.image)} className="w-full h-full object-cover" alt={service.title} />
                            </div>
                        </motion.div>
                    )}
                    </AnimatePresence>
                </div>

                <div className="hidden md:flex w-full md:w-5/12 justify-end">
                   <div className={`transition-opacity duration-500 ${activeId === service.id ? 'opacity-100' : 'opacity-0'}`}>
                     <p className="text-base text-gray-600 max-w-md text-left font-augenblick">{service.description}</p>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Image for Desktop */}
        <AnimatePresence>
            {activeId && (
                <motion.div 
                    className="hidden lg:block absolute top-0 left-[55%] -translate-x-1/2 w-[400px] h-60 pointer-events-none transition-transform duration-700 ease-out z-10"
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
                          <ImageWithFallback src={getAssetPath(services.find(s => s.id === activeId)?.image || "")} className="w-full h-full object-cover" alt="Service" />
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
      </Container>
    </Section>
  );
}
