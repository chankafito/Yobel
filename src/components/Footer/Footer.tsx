import { useState, useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../utils/cn";

export default function Footer() {
  const { t, i18n } = useTranslation();
  
  // Obtener items del menú desde locales (header.navs)
  const menuItems = useMemo(() => {
    return t("header.navs", { returnObjects: true }) as {
      id: string;
      title: string;
      items: { name: string; path: string }[];
    }[];
  }, [t, i18n.language]);

  const [activeCategory, setActiveCategory] = useState<string>("");

  useEffect(() => {
    if (menuItems?.length) {
      setActiveCategory(menuItems[0].title);
    }
  }, [menuItems]);

  const activeItems = menuItems.find(item => item.title === activeCategory)?.items || [];

  return (
    
    <footer className="bg-black text-white w-full overflow-hidden py-12 md:py-20 font-augenblick">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-16 md:gap-24">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-16">
            <Logo color="#FFF" />

            <div className="text-[18px] md:text-[22px] leading-tight md:leading-[24px] text-center md:text-left">
              <p className="mb-0">{t('footer.slogan.one')}</p>
              <p className="mb-0">{t('footer.slogan.two')}</p>
              <p>{t('footer.slogan.three')}</p>
            </div>
          </div>
        </div>

        {/* Middle Section: Contact & Navigation */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-32">
            
            {/* Left Side: Contact Info */}
            <div className="flex flex-col gap-12 w-full lg:w-1/3">
                <div className="flex flex-col gap-2">
                    <p className="text-[16px] text-white/50 font-medium">CONTACTO COMERCIAL</p>
                    <p className="text-[22px] md:text-[24px]">+511 997 593 459</p>
                </div>

                <div className="flex flex-col gap-4">
                    <p className="text-[16px] text-white/50 font-medium">SÍGUENOS</p>
                    <div className="flex flex-col gap-3">
                        <a href="#" className="text-[22px] hover:text-[#fff066] transition-colors">Facebook</a>
                        <a href="#" className="text-[22px] hover:text-[#fff066] transition-colors">LinkedIn</a>
                        <a href="#" className="text-[22px] hover:text-[#fff066] transition-colors">Instagram</a>
                    </div>
                </div>
            </div>

            {/* Right Side: Navigation (Split Column) */}
            <div className="flex flex-col md:flex-row gap-12 md:gap-32 w-full lg:w-2/3">
                {/* Categories */}
                <div className="flex flex-col gap-6 md:w-1/2">
                    <p className="text-[16px] text-white/50 font-medium mb-2">PÁGINAS</p>
                    {menuItems.map((item) => (
                        <div 
                            key={item.id} 
                            className="group flex items-center gap-4 cursor-pointer"
                            onClick={() => setActiveCategory(item.title)}
                        >
                            <span className={cn(
                                "text-[22px] transition-colors duration-300",
                                activeCategory === item.title ? "text-[#fff066]" : "text-white group-hover:text-white/80"
                            )}>
                                {item.id} /
                            </span>
                            <span className={cn(
                                "text-[22px] transition-colors duration-300",
                                activeCategory === item.title ? "text-[#fff066]" : "text-white group-hover:text-white/80"
                            )}>
                                {item.title}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Submenu Links (Animated) */}
                <div className="flex flex-col gap-6 md:w-1/2 relative">
                     <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="flex flex-col gap-6"
                        >
                            {/* Spacer to align with the list on the left (approximate visual alignment) */}
                             <p className="text-[16px] text-white/50 font-medium mb-2 opacity-0 select-none">SUBMENU</p> 
                            
                            {activeItems.map((link, idx) => (
                                <Link 
                                    key={idx} 
                                    to={link.path}
                                    className="text-[22px] text-white hover:text-[#fff066] transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </motion.div>
                     </AnimatePresence>
                </div>
            </div>
        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pt-8 border-t border-white/10">
          <p className="text-[18px] text-white">© Yobel Perú</p>
          <div className="flex flex-wrap gap-6 md:gap-8">
            <Link to="#" className="text-[16px] text-white/50 hover:text-white transition-colors">Términos y Condiciones</Link>
            <Link to="/libro-reclamaciones" className="text-[16px] text-white/50 hover:text-white transition-colors">Libro de Reclamaciones</Link>
            <Link to="#" className="text-[16px] text-white/50 hover:text-white transition-colors">Privacidad</Link>
            <Link to="/politicas-de-cookies" className="text-[16px] text-white/50 hover:text-white transition-colors">Políticas de Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
