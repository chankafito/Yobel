import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

interface TimelineItem {
  year: string;
  title: string;
  desc: string;
}

export function Timeline({ items, textColor }: { items: TimelineItem[]; textColor: MotionValue<string> }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalItems = items.length;
  
  // Función para navegar a un año específico haciendo click
  const navigateToYear = (targetIndex: number) => {
    if (!containerRef.current) return;
    
    const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
    const containerHeight = containerRef.current.scrollHeight;
    
    // Calcular el scroll exacto para centrar el año objetivo
    // El progreso necesario es: targetIndex / (totalItems - 1)
    // Ajustamos para el nuevo rango que incluye la pausa al final
    const adjustedProgress = targetIndex / totalItems; // Cambiado de (totalItems - 1) a totalItems
    const targetScroll = containerTop + (containerHeight * adjustedProgress) - (window.innerHeight / 2);
    
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth"
    });
  };
  
  // Create discrete snap points - cada año tiene su propio "segmento" de scroll
  // Modificado para mantener el último item fijo durante más scroll
  const rawIndex = useTransform(scrollYProgress, (progress) => {
    // El último item aparece en 0.75 del scroll y se mantiene hasta 0.95
    // Esto deja un 20% del scroll donde el último item permanece visible antes de salir
    if (progress >= 0.75) {
      return totalItems - 1; // Mantener en el último item
    }
    
    // Para el resto, mapear 0-0.75 a 0-(totalItems-1)
    const adjustedProgress = progress / 0.75;
    const continuous = adjustedProgress * (totalItems - 1);
    
    // Agregar "snap" magnético hacia el entero más cercano
    const nearest = Math.round(continuous);
    const distance = Math.abs(continuous - nearest);
    
    // Si estamos muy cerca del punto snap (dentro de 0.15), forzar el snap
    if (distance < 0.15) {
      return nearest;
    }
    
    return continuous;
  });
  
  // Spring más rápido y "snappy" para transiciones rápidas pero suaves
  const smoothIndex = useSpring(rawIndex, { stiffness: 200, damping: 30, mass: 0.8 });

  return (
    <div ref={containerRef} style={{ height: `${Math.max(totalItems * 120 + 100, 500)}vh` }} className="relative">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Years Horizontal Strip */}
        <motion.div 
          className="relative w-full h-32 md:h-48 flex items-center justify-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
           {items.map((item, i) => (
             <YearItem 
               key={i} 
               item={item} 
               index={i} 
               currentIndex={smoothIndex}
               onNavigate={navigateToYear}
               textColor={textColor}
             />
           ))}
        </motion.div>

        {/* Content (Title + Desc) */}
        <motion.div 
          className="relative w-full max-w-xl px-8 md:px-6 h-40"
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
           {items.map((item, i) => (
             <ContentItem 
               key={i} 
               item={item} 
               index={i} 
               currentIndex={smoothIndex}
               textColor={textColor}
             />
           ))}
        </motion.div>
      </div>
    </div>
  );
}

function YearItem({ 
  item, 
  index, 
  currentIndex, 
  onNavigate,
  textColor
}: { 
  item: TimelineItem; 
  index: number; 
  currentIndex: MotionValue<number>;
  onNavigate: (index: number) => void;
  textColor: MotionValue<string>;
}) {
  // Spacing between years in pixels
  const spacing = 350; // Adjust for mobile?

  const x = useTransform(currentIndex, (v) => (index - v) * spacing);
  
  const dist = useTransform(currentIndex, (v) => Math.abs(v - index));
  
  // Más transparentes los años anteriores/posteriores
  const opacity = useTransform(dist, [0, 1, 2], [1, 0.15, 0.05]);
  const scale = useTransform(dist, [0, 1], [1.5, 1]);

  return (
     <motion.div
       className="absolute flex items-center justify-center cursor-pointer"
       style={{ x, opacity, scale, color: textColor, zIndex: useTransform(dist, (d) => d < 0.5 ? 10 : 0) }}
       onClick={() => onNavigate(index)}
     >
       <span className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter transition-colors duration-0">
         {item.year}
       </span>
     </motion.div>
  )
}

function ContentItem({ item, index, currentIndex, textColor }: { item: TimelineItem, index: number, currentIndex: MotionValue<number>, textColor: MotionValue<string> }) {
   const dist = useTransform(currentIndex, (v) => Math.abs(v - index));
   const opacity = useTransform(dist, [0, 0.6], [1, 0]);
   const y = useTransform(currentIndex, (v) => (v - index) * 20);
   const pointerEvents = useTransform(dist, (d) => d < 0.5 ? "auto" : "none");

   return (
     <motion.div
        className="absolute inset-0 text-center flex flex-col items-center"
        style={{ opacity, y, pointerEvents }}
     >
        <motion.h3 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: textColor }}>{item.title}</motion.h3>
        <motion.p className="text-xl md:text-2xl font-light leading-relaxed" style={{ color: textColor }}>{item.desc}</motion.p>
     </motion.div>
   )
}