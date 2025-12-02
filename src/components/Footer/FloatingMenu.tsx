import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next';

export function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="fixed bottom-10 right-10 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="flex flex-col items-end gap-4 mb-2"
          >
            <div className="bg-white shadow-lg rounded-full px-6 py-3 text-xl cursor-pointer hover:bg-gray-50">{t('flot_menu.chatbot')}</div>
            <div className="bg-white shadow-lg rounded-full px-6 py-3 text-xl cursor-pointer hover:bg-gray-50">{t('flot_menu.tracking')}</div>
            <div className="bg-white shadow-lg rounded-full px-6 py-3 text-xl cursor-pointer hover:bg-gray-50">{t('flot_menu.contact')}</div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-[68px] h-[68px] rounded-full bg-white/40 backdrop-blur border border-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
      >
         <div className="flex flex-col gap-[6px] items-center justify-center relative">
            <motion.div 
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-black h-[2px] w-[30px] origin-center" 
            />
            <motion.div 
              animate={isOpen ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="bg-black h-[2px] w-[30px]" 
            />
            <motion.div 
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-black h-[2px] w-[30px] origin-center" 
            />
         </div>
      </button>
    </div>
  );
}
