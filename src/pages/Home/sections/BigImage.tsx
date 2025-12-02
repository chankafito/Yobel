import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import imgImagen from "../../../assets/images/yobel-logistica.jpg";

export function BigImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth curve formation effect: starts flatter and curves out
  const topCurveScale = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const bottomCurveScale = useTransform(scrollYProgress, [0.4, 0.9], [0, 1]);
  
  return (
    <motion.div 
      ref={containerRef} 
      className="w-full relative mt-24"
      initial={{ opacity: 0, filter: "blur(10px)", y: 100 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="w-full h-[600px] md:h-[850px] relative overflow-hidden">
        <img src={imgImagen} alt="Yobel Logistics" className="absolute inset-0 w-full h-full object-cover" />
        
        {/* Top White Curve */}
        <motion.div 
          style={{ scaleY: topCurveScale, transformOrigin: "top" }}
          className="absolute top-0 left-0 right-0 h-[65px] w-full z-10"
        >
           <div className="relative h-full w-full text-white">
             <svg className="block w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 65" fill="currentColor">
               <path d="M1440 64.1338C1210.95 34.8241 970.243 19.2002 721.92 19.2002C472.207 19.2002 230.198 35.0004 0 64.6279V0H1440V64.1338Z" />
             </svg>
           </div>
        </motion.div>

        {/* Bottom Yellow Curve */}
        <motion.div 
          style={{ scaleY: bottomCurveScale, transformOrigin: "bottom" }}
          className="absolute bottom-0 left-0 right-0 h-[65px] w-full z-10 flex items-end justify-center"
        >
           <div className="relative h-full w-full text-[#FFF066] rotate-180">
             <svg className="block w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 65" fill="currentColor">
               <path d="M1440 64.1338C1210.95 34.8241 970.243 19.2002 721.92 19.2002C472.207 19.2002 230.198 35.0004 0 64.6279V0H1440V64.1338Z" />
             </svg>
           </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
