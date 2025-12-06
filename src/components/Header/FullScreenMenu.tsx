import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence  } from "framer-motion";;
import { Link, useParams } from "react-router-dom";
import Logo from "../Logo";
import { Search, ChevronDown  } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "../../utils/cn";
import { getCountryCode } from "../../utils/countryUtils";
import { useCountry } from "../../contexts/CountryContext";
import { CountryPopup } from "./CountryPopup";

interface FullScreenMenuProps {
   onClose: () => void;
   onSearchClick: () => void;
}

export function FullScreenMenu({ onClose, onSearchClick }: FullScreenMenuProps) {
  const { t, i18n } = useTranslation();
  const { lang, country } = useParams();
  const langCode = lang || 'es';
  const countryCode = country || 'pe';
  const langPrefix = `/${langCode}/${countryCode}`;

   const menuItems = useMemo(() => {
     return t("header.navs", { returnObjects: true }) as {
       id: string;
       title: string;
       items: { name: string; path: string }[];
     }[];
   }, [t, i18n.language]);

   const determineActiveCategory = () => {
      const path = location.pathname;
      
      for (const menuItem of menuItems) {
         const matchingItem = menuItem.items.find(item => 
         path === item.path || path.startsWith(item.path + '/')
         );
         if (matchingItem) {
         return menuItem.title;
         }
      }
      
      return "Empresa"; // Default
   };

   const [activeCategory, setActiveCategory] = useState<string>(determineActiveCategory());
   const [isCountryPopupOpen, setIsCountryPopupOpen] = useState(false);

   useEffect(() => {
      setActiveCategory(determineActiveCategory());
   }, [location.pathname]);

   //const activeItemsDesktop = menuItems.find(item => item.title === activeCategory)?.items || [];
   const activeItemsDesktop = menuItems.find(item => item.title === activeCategory)?.items || [];

   const { selectedCountry } = useCountry();

   return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-black text-white font-augenblick flex flex-col h-[100dvh]"
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

               <button className="hidden md:block px-4 py-2 text-[23px] text-white hover:opacity-70">{t("header.clients")}</button>

               {/* <LangSelector /> */}
               <div 
                  onClick={() => setIsCountryPopupOpen(true)}
                  className="hidden sm:flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity"
                >
                  <span className="text-lg text-white">{getCountryCode(selectedCountry)}</span>
                  <div className="w-3 h-2">
                      <svg className="w-full h-full" viewBox="0 0 12 7" fill="none">
                          <path d="M5.38218 6.69624L0.185302 1.15356C-0.0720519 0.879085 -0.0598533 0.448414 0.212624 0.188943C0.487912 -0.0732037 0.924007 -0.0610632 1.18428 0.215993L5.38218 4.68452L9.76455 0.227962C10.0088 -0.0204448 10.4106 -0.0159402 10.6493 0.23788C10.8712 0.473896 10.8714 0.841736 10.6499 1.07806L5.38218 6.69624Z" fill="white" />
                      </svg>
                  </div>
                </div>
               

               <div className="flex items-center gap-2 md:gap-3">
                  <div onClick={onSearchClick} className="hidden md:flex w-[30px] h-[30px] items-center justify-center cursor-pointer hover:opacity-70 transition-opacity">
                     <Search className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>

                  <button className="hidden md:block px-4 py-2 text-[23px] text-white hover:opacity-70"> {t("header.tracking")} </button>
               </div>

               <button 
                  onClick={onClose}
                  className="px-3.5 py-2 rounded-[19px] border-[1.5px] border-white text-[16px] md:text-[22px] leading-[20px] md:leading-[24px] font-augenblick font-medium text-white hover:bg-white hover:text-black transition-colors"
                  >
                  {t('header.close')}
               </button>
            </div>
        </div>
      </div>

      {/* Content - Full height without scroll */}
      <div className="flex-1 overflow-hidden">
        <div className="w-full max-w-[1340px] mx-auto px-[20px] md:px-[50px] h-full flex flex-col">
           
           {/* --- Desktop Layout (lg:flex) --- */}
           <div className="hidden lg:flex flex-col h-full justify-between py-8">
              {/* Main Content Area */}
              <div className="flex flex-1 min-h-0">
                {/* Left Col: Categories */}
                <div className="w-[400px] xl:w-[547px] flex flex-col gap-8">
                  {menuItems.map((item) => (
                      <div 
                          key={item.id} 
                          className="group flex items-center gap-2 cursor-pointer font-[Neue_Augenblick]"
                          onClick={() => setActiveCategory(item.title)}
                      >
                          <span className="text-[24px] font-medium text-white transition-colors duration-300">
                              {item.id} /
                          </span>
                          <span className={cn(
                              "text-[24px] font-medium text-white transition-all duration-300 border-b-[1.5px] border-transparent group-hover:border-white",
                              activeCategory === item.title && "border-white"
                          )}>
                              {item.title}
                          </span>
                      </div>
                  ))}
                </div>

                {/* Right Col: Subitems */}
                <div className="flex-1 pl-20 border-l border-white/10 ml-12 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  <AnimatePresence mode="wait">
                      <motion.div
                          key={activeCategory}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          transition={{ duration: 0.2 }}
                          className="flex flex-col gap-4"
                      >
                          {activeItemsDesktop.map((link, idx) => {
                              const isServicesCategory = activeCategory === "Servicios";
                              const isManufacturingOrValueAddedOrVAS = 
                                  link.name === "Manufactura" || 
                                  link.name === "Valor Agregado" ||
                                  link.name === "Servicio Valor Agregado";

                              const hoverColor = (isServicesCategory && isManufacturingOrValueAddedOrVAS)  ? "hover:text-[#00BEEB]"  : "hover:text-[#fff066]";
                              
                              // Determinar si necesita parámetro de categoría
                              const isNewsCategory = activeCategory === "Noticias" && link.name !== "Todas las noticias";

                              const finalPath = isNewsCategory 
                                ? `${langPrefix}${link.path}?categoria=${encodeURIComponent(link.name)}` 
                                : `${langPrefix}${link.path}`;
                              
                              return (
                                  <Link 
                                      key={idx} 
                                      to={finalPath}
                                      onClick={onClose}
                                      className={`text-[22px] font-medium text-white ${hoverColor} transition-colors w-fit`}
                                  >
                                      {link.name}
                                  </Link>
                              );
                          })}
                      </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              
               {/* Footer Desktop Links */}
               <div className="flex justify-between items-end gap-8 pt-8 text-white/40 text-sm border-t border-white/10 mt-8">
                  {/* Language Selector */}
                  <div className="flex gap-4 items-center">
                      <p className="text-[18px] text-white/50">Selecciona tu idioma:</p>
                      <div className="flex gap-5 items-end">
                          <button className="box-border px-0 py-1 border-b-[0.5px] border-solid border-white text-[16px] text-white hover:opacity-70 transition-opacity">
                              Español
                          </button>
                          <button className="px-0 py-1 text-[16px] text-white/50 hover:text-white transition-colors font-[Neue_Augenblick]">
                              Inglés
                          </button>
                      </div>
                  </div>

                  {/* Legal Links */}
                  <div className="flex gap-4">
                      <Link to={`${langPrefix}/terminos-y-condiciones`} onClick={onClose} className="hover:text-white transition-colors">Términos y Condiciones</Link>
                      <Link to={`${langPrefix}/libro-reclamaciones`} onClick={onClose} className="hover:text-white transition-colors">Libro de Reclamaciones</Link>
                      <Link to={`${langPrefix}/politicas-de-privacidad`} onClick={onClose} className="hover:text-white transition-colors">Privacidad</Link>
                      <Link to={`${langPrefix}/politicas-de-cookies`} onClick={onClose} className="hover:text-white transition-colors">Políticas de Cookies</Link>
                  </div>
              </div>
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

              {/* Mobile Portal de Clientes Button */}
              <button className="w-full py-4 border border-white rounded-full text-xl font-medium hover:bg-white hover:text-black transition-colors">
                  Portal de Clientes
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

      <AnimatePresence>
        {isCountryPopupOpen && (
          <CountryPopup 
            isOpen={isCountryPopupOpen} 
            onClose={() => setIsCountryPopupOpen(false)} 
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
