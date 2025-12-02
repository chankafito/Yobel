import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface FAQItemData {
  question: string;
  answer: string;
}

interface FAQItemProps extends FAQItemData {
  isOpen: boolean;
  onToggle: () => void;
}

export function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-black py-9">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left group"
      >
        <h3 className="text-xl md:text-[26px] text-black pr-8 font-[Neue_Augenblick]">
          {question}
        </h3>
        <div className="relative w-[30px] h-[30px] shrink-0">
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
            className="absolute top-1/2 left-1/2 w-[2px] h-full bg-black -translate-x-1/2 -translate-y-1/2 origin-center transition-all duration-300"
          />
          <div className="absolute top-1/2 left-1/2 w-full h-[2px] bg-black -translate-x-1/2 -translate-y-1/2" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-6 px-4 md:px-12">
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
