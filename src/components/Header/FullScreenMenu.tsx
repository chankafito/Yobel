import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence  } from "framer-motion";;
import { Link, useParams } from "react-router-dom";
import Logo from "../Logo";
import LangSelector from "../LangSelector";
import { Search, ChevronDown  } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "../../utils/cn";
import { getLangPrefix } from "../../utils/path";

interface FullScreenMenuProps {
   onClose: () => void;
   onSearchClick: () => void;
}

export function FullScreenMenu({ onClose, onSearchClick }: FullScreenMenuProps) {
   const { t, i18n } = useTranslation();
   const { lang } = useParams();
   const langCode = lang ?? i18n.language ?? "en";
   const langPrefix = getLangPrefix(langCode);

   const menuItems = useMemo(() => {
     return t("header.navs", { returnObjects: true }) as {
       id: string;
       title: string;
       items: { name: string; path: string }[];
     }[];
   }, [t, i18n.language]);

   const [activeCategory, setActiveCategory] = useState<string>("");

   useEffect(() => {
     if (menuItems?.length && !activeCategory) {
       setActiveCategory(menuItems[0].title);
     }
   }, [menuItems]);

   const activeItemsDesktop = menuItems.find(item => item.title === activeCategory)?.items || [];

   return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-60 bg-black text-white font-augenblick flex flex-col h-dvh"
    >
      {/* Header */}
      <div className="flex-none h-[80px] md:h-[100px] w-full flex justify-center px-4 pt-5 z-[70] bg-black relative">
        <div className="w-full max-w-[1340px] h-[56px] px-6 flex items-center justify-between">
            {/* Logo */}
            <div className="h-[35px] w-[94px] relative">
               <Link to={`${langPrefix}/`} onClick={onClose} className="h-[30px] w-[80px] relative block hover:opacity-70 transition-opacity">
                  <Logo color="#FFF"/>
               </Link>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 md:gap-6">
               <LangSelector />
               <div className="flex items-center gap-2 md:gap-3">
                  <div onClick={onSearchClick} className="hidden md:flex w-[30px] h-[30px] items-center justify-center cursor-pointer hover:opacity-70 transition-opacity">
                     <Search className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <button className="hidden md:block px-4 py-2 text-[23px] text-white hover:opacity-70">
                    {t("header.tracking")}
                  </button>
                  <Search size={30} className=" text-white" />
               </div>

               <button 
                  onClick={onClose}
                  className="px-3.5 py-2 rounded-[19px] border-[1.5px] border-white text-[16px] md:text-[22px] leading-[20px] md:leading-[24px] font-augenblick font-medium text-white hover:bg-white hover:text-black transition-colors"
                  >
                  <span className="text-[22px] font-medium leading-none">{t('header.close')}</span>
               </button>
            </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
         <div className="w-full max-w-[1340px] mx-auto px-[20px] md:px-[50px] pb-[100px] pt-4">
            
            <div className="hidden lg:flex w-full h-full min-h-[600px]">
              {/* Left Col: Categories */}
              <div className="w-[400px] xl:w-[547px] flex flex-col gap-8 pt-8">
                 {menuItems.map((item) => (
                    <div 
                        key={item.id} 
                        className="group flex items-center gap-2 cursor-pointer"
                        onMouseEnter={() => setActiveCategory(item.title)}
                        onClick={() => setActiveCategory(item.title)}
                    >
                        <span className={cn(
                            "text-[24px] font-medium transition-colors duration-300",
                            activeCategory === item.title ? "text-[#fff066]" : "text-white group-hover:text-white/80"
                        )}>
                            {item.id} /
                        </span>
                        <span className={cn(
                            "text-[24px] font-medium transition-colors duration-300 border-b-[1.5px] border-transparent group-hover:border-current",
                            activeCategory === item.title ? "text-[#fff066]" : "text-white group-hover:text-white/80"
                        )}>
                            {item.title}
                        </span>
                    </div>
                 ))}
              </div>

              {/* Right Col: Subitems */}
              <div className="flex-1 pl-20 pt-10 border-l border-white/10 ml-12">
                 <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col gap-6"
                    >
                        {activeItemsDesktop.map((link, idx) => (
                            <Link 
                                key={idx} 
                                to={`${langPrefix}${link.path}`}
                                onClick={onClose}
                                className="text-[32px] font-light text-white hover:text-[#fff066] transition-colors w-fit"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                 </AnimatePresence>
              </div>
           </div>
           
           {/* Footer Desktop Links */}
           <div className="hidden lg:flex justify-end gap-8 mt-20 text-white/40 text-sm">
                <Link to={`${langPrefix}/terminos-y-condiciones`} onClick={onClose} className="hover:text-white transition-colors">Términos y Condiciones</Link>
                <Link to={`${langPrefix}/libro-reclamaciones`} onClick={onClose} className="hover:text-white transition-colors">Libro de Reclamaciones</Link>
                <Link to={`${langPrefix}/politicas-de-privacidad`} onClick={onClose} className="hover:text-white transition-colors">Privacidad</Link>
                <Link to={`${langPrefix}/politicas-de-cookies`} onClick={onClose} className="hover:text-white transition-colors">Políticas de Cookies</Link>
           </div>


           {/* --- Mobile Layout (lg:hidden) --- */}
           <div className="flex lg:hidden flex-col gap-6 pt-4">
              {/* Mobile Search */}
              <button 
                onClick={onSearchClick} 
                className="flex items-center gap-4 text-xl text-white/80 border-b border-white/20 pb-4 mb-4 hover:text-white transition-colors"
              >
                  <Search className="w-6 h-6 text-white" strokeWidth={1.5} />
                  <span>Buscar en el sitio...</span>
              </button>

              {menuItems.map(item => {
                 const isOpen = activeCategory === item.title;
                 return (
                 <div key={item.id} className="flex flex-col border-b border-white/10 pb-2">
                    <button 
                       onClick={() => setActiveCategory(isOpen ? "" : item.title)}
                       className="flex items-center justify-between text-xl md:text-2xl font-medium py-3"
                    >
                       <div className="flex gap-3">
                          <span className="text-white/40 text-lg">{item.id}</span>
                          <span className={isOpen ? "text-[#fff066]" : "text-white"}>{item.title}</span>
                       </div>
                       <div className={cn("transition-transform duration-300", isOpen ? "rotate-180" : "")}>
                          <ChevronDown className="w-6 h-6 text-white" strokeWidth={1.5} />
                       </div>
                    </button>
                    
                    <AnimatePresence>
                       {isOpen && (
                          <motion.div 
                             initial={{ height: 0, opacity: 0 }}
                             animate={{ height: "auto", opacity: 1 }}
                             exit={{ height: 0, opacity: 0 }}
                             className="overflow-hidden"
                          >
                             <div className="flex flex-col gap-4 pl-10 py-4">
                                {item.items.map((sub, idx) => (
                                   <Link 
                                      key={idx} 
                                      to={sub.path} 
                                      onClick={onClose}
                                      className="text-lg text-gray-300 hover:text-white py-1 block"
                                   >
                                      {sub.name}
                                   </Link>
                                ))}
                             </div>
                          </motion.div>
                       )}
                    </AnimatePresence>
                 </div>
              )})}

              {/* Mobile Tracking Button */}
              <button className="mt-8 w-full py-4 border border-white rounded-full text-xl font-medium hover:bg-white hover:text-black transition-colors">
                  Tracking de Envíos
              </button>
              
              {/* Legal Links Mobile */}
              <div className="flex flex-col gap-4 mt-12 text-sm text-white/40 px-2">
                  <Link to="/terminos-y-condiciones" onClick={onClose}>Términos y Condiciones</Link>
                  <Link to="/libro-reclamaciones" onClick={onClose}>Libro de Reclamaciones</Link>
                  <Link to="/politicas-de-privacidad" onClick={onClose}>Privacidad</Link>
                  <Link to="/politicas-de-cookies" onClick={onClose}>Políticas de Cookies</Link>
              </div>
           </div>
            
         </div>
      </div>
    </motion.div>
  );
}
