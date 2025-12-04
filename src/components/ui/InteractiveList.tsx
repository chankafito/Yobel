import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./section";
import { Container } from "./container";
import { ImageWithFallback } from "./ImageWithFallback";

export interface InteractiveListItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface InteractiveListProps {
  items: InteractiveListItem[];
  className?: string;
  defaultImage?: string;
  title?: string;
  label?: string;
}

export function InteractiveList({
  items,
  className = "",
  defaultImage,
  title,
  label,
}: InteractiveListProps) {
  const [activeId, setActiveId] = useState("");

  const fallbackImage =
    defaultImage || (items.length > 0 ? items[0].image : "");

  return (
    <Section className={`bg-white ${className}`}>
      <Container className="relative min-h-[600px]">
        {(title || label) && (
          <div className="flex flex-col gap-2 items-start mb-12">
            {label && (
              <span className="text-xl text-gray-400 font-medium">{label}</span>
            )}
            {title && (
              <h3 className="text-3xl md:text-4xl font-normal">{title}</h3>
            )}
          </div>
        )}
        <div
          className="flex flex-col w-full"
          onMouseLeave={() => setActiveId("")}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="relative group border-b border-gray-300 last:border-0 min-h-[100px] md:min-h-0 md:h-[120px]"
              onMouseEnter={() => setActiveId(item.id)}
              onClick={() => setActiveId(item.id)}
            >
              <div className="h-full cursor-pointer flex flex-col md:flex-row md:items-center justify-center md:justify-between gap-2 md:gap-4 px-4 md:px-0 py-6 md:py-0">
                <div
                  className={`flex items-baseline gap-4 text-2xl md:text-4xl w-full md:w-5/12 ${
                    activeId === item.id ? "text-black" : "text-gray-400"
                  }`}
                >
                  <span className="transition-colors duration-500">
                    {item.id} /
                  </span>
                  <span
                    className="font-augenblick transition-all duration-500"
                    style={{
                      transform:
                        activeId === item.id ? "scale(1.1)" : "scale(1)",
                      transformOrigin: "left center",
                    }}
                  >
                    {item.title}
                  </span>
                </div>

                {/* Mobile View Content */}
                <div className="md:hidden w-full">
                  <AnimatePresence>
                    {activeId === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-lg text-gray-600 mb-4 font-augenblick">
                          {item.description}
                        </p>
                        <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-sm">
                          <ImageWithFallback
                            src={item.image}
                            className="w-full h-full object-cover"
                            alt={item.title}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Desktop View Content */}
                <div className="hidden md:flex w-full md:w-5/12 justify-end">
                  <div
                    className={`transition-opacity duration-500 ${
                      activeId === item.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <p className="text-base text-gray-600 max-w-md text-left font-augenblick">
                      {item.description}
                    </p>
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
              className="hidden lg:block absolute top-0 left-[55%] -translate-x-1/2 w-[400px] h-[240px] pointer-events-none transition-transform duration-700 ease-out z-10"
              style={{
                transform: `translateX(-50%) translateY(${
                  items.findIndex((i) => i.id === activeId) * 120 - 60
                }px)`,
              }}
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
                    src={
                      items.find((i) => i.id === activeId)?.image ||
                      fallbackImage
                    }
                    className="w-full h-full object-cover"
                    alt="Service Preview"
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Section>
  );
}
