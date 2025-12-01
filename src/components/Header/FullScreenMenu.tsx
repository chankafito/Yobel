import React from "react";
import { motion } from "framer-motion";;
import { Link } from "react-router-dom";
import Logo from "../Logo";
import LangSelector from "../LangSelector";
import { User, Search  } from "lucide-react";
import { useTranslation } from "react-i18next";

interface FullScreenMenuProps {
  onClose: () => void;
}

export function FullScreenMenu({ onClose }: FullScreenMenuProps) {
   const { t } = useTranslation();
   const pairs = [
      ["services", "ethics"],
      ["company", "news"],
      ["contact", "legal"],
   ];

   return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-black text-white overflow-y-auto"
    >
      {/* Header */}
      <div className="flex justify-center px-4 pt-8 pb-4">
        <div className="w-full max-w-[1340px] flex items-center justify-between">
            {/* Logo */}
            <div className="h-[35px] w-[94px] relative">
              <Logo color="#FFF"/>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6 md:gap-8">
               <LangSelector />
               <User size={30} className="text-white cursor-pointer" />
               <Search size={30} className=" text-white" />

               <button 
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 px-4 py-2 border-[1.5px] border-white rounded-full hover:bg-white hover:text-black transition-colors"
                >
                  <span className="text-[22px] font-medium leading-none">{t('header.close')}</span>
               </button>
            </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex justify-center px-4 mt-8 md:mt-16 pb-20">
         <div className="w-full max-w-[1340px] flex flex-col">
            
            {/* Search Input */}
            <div className="max-w-[547px] mb-16 md:mb-24">
               <h2 className="text-lg text-white/50 mb-4">{t('header.search.label')}</h2>
               <div className="relative border-b border-white/20 pb-2">
                  <button className="w-fit px-8 py-3 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer group">
                     <span className="text-xl md:text-2xl font-light font-[Neue_Augenblick]">{t('header.search.placeholder')}</span>
                  </button>
               </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24">
                {pairs.map((pair, rowIndex) => {
                  const leftKey = pair[0];
                  const rightKey = pair[1];

                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  const leftSection: any = t(`header.navs.${leftKey}`, { returnObjects: true });
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  const rightSection: any = t(`header.navs.${rightKey}`, { returnObjects: true });
                  
                  if ((!leftSection || typeof leftSection !== "object") && (!rightSection || typeof rightSection !== "object")) return null;
                  
                  return (
                    <div key={`pair-${rowIndex}`} className="flex flex-col gap-12" >
                       {leftSection && typeof leftSection === "object" && "title" in leftSection && (
                         <div>
                            <h3 className="text-lg text-white/50 mb-6">{leftSection.title}</h3>
                            <ul className="flex flex-col gap-3">
                               {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                               {Array.isArray(leftSection.links) && leftSection.links.map((link: any, i: number) => (
                                  <li key={i} className="text-[22px] hover:text-blue-400 transition-colors">
                                     <Link to={link.to} onClick={onClose}>{link.label}</Link>
                                  </li>
                               ))}
                            </ul>
                         </div>
                       )}
                       {rightSection && typeof rightSection === "object" && "title" in rightSection && (
                         <div>
                            <h3 className="text-lg text-white/50 mb-6">{rightSection.title}</h3>
                            <ul className="flex flex-col gap-3">
                               {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                               {Array.isArray(rightSection.links) && rightSection.links.map((link: any, i: number) => (
                                  <li key={i} className="text-[22px] hover:text-blue-400 transition-colors">
                                     <Link to={link.to} onClick={onClose}>{link.label}</Link>
                                  </li>
                               ))}
                            </ul>
                         </div>
                       )}
                    </div>
                  );
                })}

            </div>
         </div>
      </div>
    </motion.div>
  );
}
