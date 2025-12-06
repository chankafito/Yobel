import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Search, User, ChevronDown } from "lucide-react";
import { FullScreenMenu } from "./FullScreenMenu";
import { SearchOverlay } from "./SearchOverlay";
import { useCountry } from "../../contexts/CountryContext";
import { CountryPopup } from "./CountryPopup";
import Logo from "../Logo";
import { Link, useParams } from "react-router-dom";

export function Navbar() {
  const { t } = useTranslation();
  const { lang, country } = useParams<{ lang?: string; country?: string }>();
  const { selectedCountry } = useCountry();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCountryPopupOpen, setIsCountryPopupOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Detectar si hay scroll para aplicar blur
      setHasScrolled(currentScrollY > 50);
      
      if (currentScrollY < 10) {
        // Siempre mostrar en la parte superior
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scroll hacia abajo - ocultar
        setIsVisible(false);
      } else {
        // Scroll hacia arriba - mostrar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Obtener el código del país actual desde params o contexto
  const currentLang = lang || 'es';
  const currentCountryCode = country || selectedCountry || 'pe';
  const langPrefix = `/${currentLang}/${currentCountryCode}`;

  return (
    <>
      <motion.div 
        className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4"
        initial={{ opacity: 1 }}
        animate={{ 
          opacity: isVisible ? 1 : 0
        }}
        transition={{ 
          duration: 0.3,
          ease: "easeInOut"
        }}
        >
        <div className={`border border-white/50 rounded-full px-6 flex items-center justify-between w-full max-w-[1340px] h-[56px] transition-all duration-300 ${
          hasScrolled 
            ? 'bg-white/70 backdrop-blur-xl shadow-lg' 
            : 'bg-white/50 backdrop-blur-md shadow-sm'
        }`}>
          {/* Logo */}
          <Link to={langPrefix} className="h-[30px] w-20 relative block hover:opacity-70 transition-opacity">
            <Logo />
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-6">
            {/* Country Selector */}
            <button 
              className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity"
              onClick={() => setIsCountryPopupOpen(true)}
            >
              <span className="text-lg text-black uppercase">{currentCountryCode}</span>
              <ChevronDown className="w-3 h-3 text-black" />
            </button>

            {/* User Icon */}
            <User size={30} className="text-gray-700 cursor-pointer" />

            {/* Buttons */}
            <div className="flex items-center gap-2 md:gap-3">
              <div 
                onClick={() => setIsSearchOpen(true)} 
                className="hidden md:flex w-[30px] h-[30px] items-center justify-center cursor-pointer hover:opacity-70 transition-opacity"
              >
                <Search className="w-6 h-6 text-black" strokeWidth={1.5} />
              </div>

              <button className="hidden md:block px-4 py-2 text-[23px] text-black hover:opacity-70">{t('header.tracking')}</button>
              <button  
                onClick={() => setIsMenuOpen(true)}
                className="px-[14px] py-[8px] rounded-[19px] border-[1.5px] border-black text-[22px] leading-[24px] font-augenblick font-medium text-black hover:bg-black hover:text-white transition-colors"
                >
                {t('header.menu')}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <FullScreenMenu 
            onClose={() => setIsMenuOpen(false)} 
            onSearchClick={() => setIsSearchOpen(true)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSearchOpen && (
          <SearchOverlay onClose={() => setIsSearchOpen(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isCountryPopupOpen && (
          <CountryPopup 
            isOpen={isCountryPopupOpen} 
            onClose={() => setIsCountryPopupOpen(false)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}
