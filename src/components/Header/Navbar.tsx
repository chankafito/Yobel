import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Search, User } from "lucide-react";
import { FullScreenMenu } from "./FullScreenMenu";
import { SearchOverlay } from "./SearchOverlay";
import LangSelector from "../LangSelector";
import Logo from "../Logo";

export function Navbar() {
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
        <div className="bg-white/50 backdrop-blur-md border border-white/50 rounded-full px-6 flex items-center justify-between w-full max-w-[1340px] shadow-sm h-[56px]">
          {/* Logo */}
          <a href="/" className="h-[30px] w-20 relative block hover:opacity-70 transition-opacity">
            <Logo />
          </a>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-6">
            {/* Lang */}
            <LangSelector />

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
      </div>

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
    </>
  );
}
