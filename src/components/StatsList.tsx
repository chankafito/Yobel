import { useRef } from "react";
import { Section } from "./ui/section";
import { Container } from "./ui/container";
import { AnimatedNumber, ScrollRevealText } from "./motion-text";

export interface StatItem {
  number: string;
  title: string;
  description: string;
  linkText?: string;
  onLinkClick?: () => void;
}

interface StatsListProps {
  stats: StatItem[];
  className?: string;
}

export function StatsList({ stats, className = "" }: StatsListProps) {
  const containerRef = useRef(null);

  return (
    <Section className={`bg-white ${className}`}>
       <Container ref={containerRef} className="flex flex-col">
          {stats.map((stat, idx) => (
             <div key={idx} className="py-16 border-b border-gray-200 last:border-none">
               <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-20">
                   <div className="w-full lg:w-1/2 text-left">
                      <AnimatedNumber 
                        value={stat.number}
                        className="text-[100px] md:text-[165px] font-normal leading-none block"
                      />
                   </div>
                   <div className="w-full lg:w-1/2 flex flex-col gap-6">
                      <h3 className="text-2xl md:text-[26px] text-black font-augenblick">{stat.title}</h3>
                      <div className="pl-8 md:pl-12 lg:pl-20">
                         <ScrollRevealText 
                            text={stat.description}
                            className="text-xl md:text-[22px] text-black mb-8 max-w-lg leading-relaxed"
                         />
                         <button 
                           onClick={stat.onLinkClick}
                           className="relative pb-2 text-[22px] font-medium border-b border-black hover:opacity-70 transition-opacity font-augenblick"
                         >
                            {stat.linkText || "Conoce más"}
                         </button>
                      </div>
                   </div>
               </div>
             </div>
          ))}
       </Container>
    </Section>
  );
}
