import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { FaqItem as FaqItemType } from "../../types/faqs";

export function FaqItem({ question, answer }: FaqItemType) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="border-b border-black py-9 relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="w-full flex items-center justify-between text-left group"
        initial={{ x: 0 }}
        animate={{ x: isHovered ? 20 : 0 }}
        transition={{ duration: 0.3, ease: [0.42, 0, 0.58, 1] }}
      >
        <h3 className="text-xl md:text-[26px] text-black pr-8 font-[Neue_Augenblick]">{question}</h3>
        <div className="relative w-[30px] h-[30px] shrink-0">
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
            className="absolute top-1/2 left-1/2 w-0.5 h-full bg-black -translate-x-1/2 -translate-y-1/2 origin-center transition-all duration-300"
          />
          <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-black -translate-x-1/2 -translate-y-1/2" />
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-6">
              <p className="text-lg md:text-[22px] text-gray-500 leading-relaxed max-w-[547px]">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
