import { useState } from "react";
import { motion } from "framer-motion";
import { CountryFlag } from "./CountryFlags";
import { useCountry } from "../../contexts/CountryContext";

import LangSelector from "./LangSelector";
import { COUNTRIES } from "../../config/constants";

interface CountryPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

function Plus() {
  return (
    <div className="relative size-full" data-name="Plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Plus">
          <path d="M11.9998 0V24" id="Vector" stroke="black" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M0 11.9998H24" id="Vector_2" stroke="black" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Icon({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="overflow-clip relative shrink-0 size-[32px] cursor-pointer hover:opacity-70 transition-opacity" 
      data-name="Icon"
      onClick={onClick}
    >
      <div className="absolute flex inset-[-3.03%] items-center justify-center">
        <div className="flex-none rotate-[315deg] size-[24px]">
          <Plus />
        </div>
      </div>
    </div>
  );
}

function Primary({ selectedCountry, onContinue }: { selectedCountry: string; onContinue: () => void }) {
  return (
    <button onClick={onContinue} className="relative rounded-[30px] shrink-0 w-full hover:opacity-80 transition-opacity" >
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-[-0.75px] pointer-events-none rounded-[30.75px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center justify-center p-[16px] relative w-full">
          <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[18px] text-black text-center text-nowrap whitespace-pre">Continuar en Yobel {selectedCountry}</p>
        </div>
      </div>
    </button>
  );
}

function Secundary({ selectedCountry, isExpanded, onToggle, onSelectCountry }: { 
  selectedCountry: string; 
  isExpanded: boolean;
  onToggle: () => void;
  onSelectCountry: (country: string) => void;
}) {
  return (
    <div className="w-full">
      <button 
        onClick={onToggle}
        className="box-border content-stretch flex gap-[20px] items-start px-0 py-[8px] relative shrink-0 w-full hover:opacity-70 transition-opacity" 
        data-name="Secundary"
      >
        <div aria-hidden="true" className="absolute border-[0px_0px_1.5px] border-black border-solid bottom-[-0.75px] left-0 pointer-events-none right-0 top-0" />
        <div className="basis-0 flex flex-col font-['Neue_Augenblick:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black">
          <p className="leading-[24px]">{selectedCountry}</p>
        </div>
        <div className={`transition-transform ${isExpanded ? 'rotate-[-90deg]' : ''}`}>
          <div className="overflow-clip relative shrink-0 size-[32px]" data-name="arrow-right">
            <div className="absolute flex inset-[36.67%_21.67%_34.17%_20%] items-center justify-center">
              <div className="flex-none h-[18.667px] rotate-[90deg] w-[9.333px]">
                <div className="relative size-full" data-name="icon">
                  <div className="absolute inset-[-2.84%_-8.04%_-2.84%_-5.68%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 20">
                      <g id="icon">
                        <path d="M0.53033 0.53033L9.86366 9.86366L0.53033 19.197" id="Vector" stroke="black" strokeLinejoin="round" strokeWidth="1.5" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </button>
      
      {/* Dropdown de países */}
      {isExpanded && (
        <motion.div 
          className="mt-2 space-y-1 max-h-[200px] overflow-y-auto scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          {COUNTRIES.map((country) => (
            <button
              key={country.code}
              onClick={() => onSelectCountry(country.label)}
              className="w-full text-left px-4 py-2 hover:bg-black/5 rounded-lg font-['Neue_Augenblick:Regular',sans-serif] text-[18px] text-black transition-colors"
            >
              {country.label}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}

function Form({ selectedCountry, isExpanded, onToggle, onSelectCountry }: { 
  selectedCountry: string;
  isExpanded: boolean;
  onToggle: () => void;
  onSelectCountry: (country: string) => void;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Form">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] text-nowrap whitespace-pre">Selecciona un país diferente</p>
      <Secundary 
        selectedCountry={selectedCountry} 
        isExpanded={isExpanded}
        onToggle={onToggle}
        onSelectCountry={onSelectCountry}
      />
    </div>
  );
}

export function CountryPopup({ isOpen, onClose }: CountryPopupProps) {
  const { selectedCountry, setSelectedCountry } = useCountry();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSelectCountry = (country: string) => {
    setSelectedCountry(country);
    setIsExpanded(false);
    onClose(); // Cerrar el popup después de seleccionar el país
  };

  if (!isOpen) return null;

  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Backdrop */}
      <motion.div 
        className="absolute inset-0 bg-black/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      
      {/* Popup */}
      <motion.div 
        className="backdrop-blur-[4px] backdrop-filter bg-[rgba(255,255,255,0.85)] relative rounded-[15px] w-full max-w-[380px] z-10"
        data-name="Pop up"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none rounded-[15px]" />
        <div className="flex flex-col items-end size-full">
          <div className="box-border content-stretch flex flex-col gap-[36px] items-end p-[32px] relative size-full">
            <div className="flex items-start justify-between w-full">
              <CountryFlag country={selectedCountry} />
              <Icon onClick={onClose} />
            </div>
            <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full">
                <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[24px] text-black w-[min-content]">Estás en {selectedCountry.toUpperCase()}</p>
                <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[18px] text-black w-[min-content]">Mostramos la información de servicios y contacto de Yobel en tu país.</p>
              </div>
              <Form 
                selectedCountry={selectedCountry}
                isExpanded={isExpanded}
                onToggle={() => setIsExpanded(!isExpanded)}
                onSelectCountry={handleSelectCountry}
              />
              <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-black text-center w-full">O</p>
              <Primary selectedCountry={selectedCountry} onContinue={onClose} />
              <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Idioma">
                <p className="basis-0 font-['Neue_Augenblick:Medium_Italic',sans-serif] grow italic leading-[18px] min-h-px min-w-px relative shrink-0 text-[14px] text-[rgba(73,73,73,0.5)]">Selecciona el idioma</p>
                <LangSelector />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}