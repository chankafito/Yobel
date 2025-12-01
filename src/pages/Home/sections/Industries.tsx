import React, { useCallback, useEffect, useState } from "react";
import EmblaCarousel from "embla-carousel-react";
import { Section } from "../../../components/ui/section";
import { Container } from "../../../components/ui/container";
import { useIndustries } from "../../../hooks/useIndustries";
import { useAssetPath } from "../../../hooks/useAssetPath";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Industries() {
  const industries = useIndustries();
  const getAssetPath = useAssetPath();
  const [emblaRef, emblaApi] = EmblaCarousel({
    align: "start",
    slidesToScroll: 1,
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [autoplayActive, setAutoplayActive] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Autoplay functionality
  useEffect(() => {
    if (!emblaApi || !autoplayActive) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi, autoplayActive]);

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (!emblaApi) return;
      
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 10) {
        e.preventDefault();
        if (e.deltaX > 0) {
          emblaApi.scrollNext();
        } else {
          emblaApi.scrollPrev();
        }
      }
    },
    [emblaApi]
  );

  return (
    <Section className="relative bg-linear-to-b from-[#fff066] to-white overflow-hidden">
      <Container className="max-w-[1440px] flex flex-col gap-12">
        <div className="flex flex-col md:flex-row gap-8 items-start py-16 md:py-24">
          <p className="text-lg text-black w-32 shrink-0 mt-2 font-augenblick">Industrias</p>
          <div className="grow">
            <div className="text-4xl md:text-5xl leading-tight text-black max-w-md mb-6 font-[Neue_Augenblick]">
              <p>Industrias en movimiento</p>
            </div>
            <p className="text-lg text-black font-augenblick">Conocemos las exigencias de cada sector. Por eso, en Yobel diseñamos soluciones integradas y adaptables, alineadas a los retos y necesidades de tu industria.</p>
          </div>
        </div>

        <div 
          className="w-full relative group" 
          onWheel={handleWheel}
          onMouseEnter={() => setAutoplayActive(false)}
          onMouseLeave={() => setAutoplayActive(true)}
        >
          {/* Left Blur Overlay */}
          <div 
            className="absolute left-0 top-0 h-[60vw] md:h-[25vw] max-h-[450px] w-16 md:w-32 z-10 pointer-events-none backdrop-blur-[1px]" 
            style={{ 
              maskImage: 'linear-gradient(to right, black, transparent)', 
              WebkitMaskImage: 'linear-gradient(to right, black, transparent)' 
            }} 
          />
          
          {/* Right Blur Overlay */}
          <div 
            className="absolute right-0 top-0 h-[60vw] md:h-[25vw] max-h-[450px] w-16 md:w-32 z-10 pointer-events-none backdrop-blur-[1px]" 
            style={{ 
              maskImage: 'linear-gradient(to left, black, transparent)', 
              WebkitMaskImage: 'linear-gradient(to left, black, transparent)' 
            }} 
          />

          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {industries.map((ind, idx) => (
                <div key={idx} className="flex-[0_0_calc(100%-1rem)] md:flex-[0_0_calc(50%-0.5rem)] lg:flex-[0_0_calc(33.333%-0.75rem)] px-2">
                  <div className="group relative flex flex-col h-full">
                    <a 
                      href={`/industries/${ind.title.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="flex flex-col gap-5 w-full cursor-pointer"
                    >
                      <div className="aspect-4/3 w-full rounded-[20px] overflow-hidden relative shrink-0">
                        <img src={ind.image} alt={ind.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col gap-3 text-black">
                        <h3 className="text-2xl font-medium font-[Neue_Augenblick]">{ind.title}</h3>
                        <p className="text-lg font-light leading-snug opacity-80 font-augenblick">{ind.description}</p>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all md:opacity-0 group-hover:opacity-100"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all md:opacity-0 group-hover:opacity-100"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </Container>
    </Section>
  );
}
