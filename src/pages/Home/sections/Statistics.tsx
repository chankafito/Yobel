import React, { useRef, useState, useEffect } from "react";
import { motion, MotionValue } from "framer-motion";
import { StatsList } from "../../../components/StatsList";
import { useStatics } from "../../../hooks/useStatics";

// SnakeSegment component is currently unused in the main render, 
// but keeping it here in case it's needed for future "snake" animations.
export const SnakeSegment = ({ 
  type, 
  progress, 
  className, 
  children 
}: { 
  type: 'start' | 'left' | 'right', 
  progress: MotionValue<number>,
  className?: string,
  children: React.ReactNode 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });
  
  useEffect(() => {
    const updateSize = () => {
        if (containerRef.current) {
            setDimensions({ 
                w: containerRef.current.offsetWidth, 
                h: containerRef.current.offsetHeight 
            });
        }
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    if (containerRef.current) observer.observe(containerRef.current);
    
    return () => observer.disconnect();
  }, []);

  const r = 40; 
  const o = 0.75; 
  const { w, h } = dimensions;
  
  let d = "";
  if (w > 0 && h > 0) {
      if (type === 'start') {
        d = [
            `M 0 ${o}`,                
            `L ${w-r} ${o}`,           
            `Q ${w-o} ${o} ${w-o} ${r}`, 
            `L ${w-o} ${h-r}`,         
            `Q ${w-o} ${h-o} ${w-r} ${h-o}`, 
            `L ${o+r} ${h-o}`,         
            `Q ${o} ${h-o} ${o} ${h}`   
        ].join(' ');
      } else if (type === 'left') {
         d = [
            `M ${o} -1`,               
            `L ${o} ${h-r}`,           
            `Q ${o} ${h-o} ${r} ${h-o}`, 
            `L ${w-r} ${h-o}`,         
            `Q ${w-o} ${h-o} ${w-o} ${h}` 
         ].join(' ');
      } else if (type === 'right') {
         d = [
            `M ${w-o} -1`,             
            `L ${w-o} ${h-r}`,         
            `Q ${w-o} ${h-o} ${w-r} ${h-o}`, 
            `L ${o+r} ${h-o}`,         
            `Q ${o} ${h-o} ${o} ${h}`   
         ].join(' ');
      }
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
       <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
           {d && (
             <path 
               d={d} 
               stroke="#E5E7EB" 
               strokeWidth="1.5" 
               fill="none" 
               strokeLinecap="round" 
               strokeLinejoin="round"
             />
           )}
       </svg>
       
       <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-10">
           {d && (
               <motion.path 
                 d={d} 
                 stroke="#090909" 
                 strokeOpacity="0.8"
                 strokeWidth="1.5" 
                 fill="none"
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 style={{ 
                     pathLength: progress
                 }}
               />
           )}
       </svg>

       <div className="relative z-20">
           {children}
       </div>
    </div>
  );
};

export function Statistics() {
  const statics = useStatics();
  return (
    <StatsList stats={statics} />
  );
}
