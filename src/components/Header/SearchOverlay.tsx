import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, ChevronRight } from "lucide-react";
import searchIndex from "../../data/locales/en/search.json";

interface SearchOverlayProps {
  onClose: () => void;
}

export function SearchOverlay({ onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus input on mount
    if (inputRef.current) {
      inputRef.current.focus();
    }
    
    // Lock body scroll
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase().trim();
    return searchIndex.filter(item => 
      item.title.toLowerCase().includes(lowerQuery) || 
      item.keywords?.toLowerCase().includes(lowerQuery) ||
      item.category.toLowerCase().includes(lowerQuery)
    );
  }, [query]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[70] bg-[#1A1A1A] text-white flex flex-col overflow-hidden"
    >
      {/* Header */}
      <div className="fixed top-5 left-0 right-0 z-[80] flex justify-center px-4 pointer-events-none">
        <div className="w-full max-w-[1340px] flex justify-end h-[56px] items-center pointer-events-auto">
           <button 
             onClick={onClose}
             className="px-[14px] py-[8px] rounded-[19px] border-[1.5px] border-white text-[22px] leading-[24px] font-augenblick font-medium text-white hover:bg-white hover:text-black transition-colors"
           >
             Cerrar
           </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center pt-[20vh] px-4 w-full max-w-[1000px] mx-auto overflow-y-auto pb-20">
        <div className="w-full relative flex-shrink-0">
             <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ delay: 0.1, duration: 0.4 }}
               className="relative flex items-center border-b-[2px] border-white/20 focus-within:border-white transition-colors pb-4"
             >
                {/* Search Icon */}
                <div className="mr-6 text-white/50">
                  <Search className="w-10 h-10 md:w-14 md:h-14 text-current" strokeWidth={1.5} />
                </div>

                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Buscar..."
                    className="w-full bg-transparent border-none outline-none text-[32px] md:text-[60px] font-augenblick text-white placeholder:text-white/30"
                />
             </motion.div>
        </div>

        {/* Results Area */}
        <div className="w-full mt-12">
            {query.trim() === "" ? (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <p className="text-white/40 text-lg mb-6 font-medium">Sugerencias</p>
                    <div className="flex flex-wrap gap-4">
                        {["Rastreo de envíos", "Servicios Logísticos", "Contacto", "Nuestras sedes"].map((item, i) => (
                            <button 
                                key={i}
                                className="px-6 py-3 rounded-full border border-white/20 text-white/70 hover:bg-white hover:text-black hover:border-white transition-all text-lg"
                                onClick={() => setQuery(item)}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </motion.div>
            ) : (
                <div className="flex flex-col gap-4 w-full">
                    {results.length > 0 ? (
                        results.map((item, index) => (
                            <Link 
                                key={index}
                                to={item.path}
                                onClick={onClose}
                                className="group flex items-center justify-between py-4 border-b border-white/10 hover:border-white/50 transition-all"
                            >
                                <div className="flex flex-col">
                                    <span className="text-[24px] md:text-[32px] font-augenblick text-white group-hover:text-[#fff066] transition-colors">
                                        {item.title}
                                    </span>
                                    <span className="text-sm text-white/50 group-hover:text-white/70 transition-colors uppercase tracking-wider">
                                        {item.category}
                                    </span>
                                </div>
                                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#fff066] group-hover:border-[#fff066] transition-all">
                                     <ChevronRight className="w-4 h-4 text-white group-hover:text-black" strokeWidth={2} />
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-white/50 text-xl">No se encontraron resultados para "{query}"</p>
                        </div>
                    )}
                </div>
            )}
        </div>
      </div>
    </motion.div>
  );
}
