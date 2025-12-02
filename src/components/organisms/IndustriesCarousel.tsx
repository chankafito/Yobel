import React, { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";

import { Section } from "../ui/section";
import { Container } from "../ui/container";
import { useIndustries } from "../../hooks/useIndustries";
import { cn } from "../../utils/cn";

// Nota: ya no importamos Autoplay al tope del archivo
// import Autoplay from "embla-carousel-autoplay";

interface IndustriesCarouselProps {
  className?: string;
}

export function IndustriesCarousel({ className }: IndustriesCarouselProps) {
  const industries = useIndustries();

  // estado para plugins de Embla (cargados dinámicamente)
  const [plugins, setPlugins] = useState<any[]>([]);

  // cargar el plugin de autoplay solo en cliente
  useEffect(() => {
    let mounted = true;
    // dynamic import para evitar incluir el plugin en el chunk inicial
    import("embla-carousel-autoplay")
      .then((mod) => {
        if (!mounted) return;
        const AutoplayPlugin = mod.default || mod;
        // Autoplay es una función que devuelve el plugin instancia
        setPlugins([(AutoplayPlugin as any)({ delay: 3000, stopOnInteraction: false })]);
      })
      .catch(() => {
        // Si falla, dejamos plugins vacío (no autoplay)
        setPlugins([]);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      slidesToScroll: 1,
      loop: true,
      dragFree: true,
    },
    plugins // pasar plugins (vacío hasta que cargue)
  );

  const lastScrollTime = useRef(0);
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    }
  };

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const handleWheel = (e: React.WheelEvent) => {
    const now = Date.now();
    if (now - lastScrollTime.current < 500) return;

    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 20) {
      if (e.deltaX > 0) {
        scrollNext();
      } else {
        scrollPrev();
      }
      lastScrollTime.current = now;
    }
  };

  // Pause autoplay on hover
  useEffect(() => {
    if (!emblaApi) return;
    const autoplayPlugin = emblaApi.plugins()?.autoplay;
    if (!autoplayPlugin) return;

    if (isHovering) {
      autoplayPlugin.stop();
    } else {
      autoplayPlugin.play();
    }
  }, [emblaApi, isHovering]);

  return (
    <Section
      className={cn(
        "relative bg-gradient-to-b from-[#fff066] to-white overflow-hidden",
        className
      )}
      onMouseMove={handleMouseMove}
    >
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className={cn(
          "fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ease-out",
          "bg-black/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3",
          "text-white font-augenblick text-lg whitespace-nowrap",
          isHovering ? "opacity-100" : "opacity-0"
        )}
        style={{ left: 0, top: 0 }}
      >
        Leer más
      </div>

      <Container className="max-w-[1440px] flex flex-col gap-20">
        <div className="flex flex-col md:flex-row gap-8 items-start py-12 md:py-0">
          <p className="text-lg text-black w-32 shrink-0 mt-2 font-augenblick">
            Industrias
          </p>
          <div className="flex-grow">
            <div className="text-4xl md:text-5xl leading-tight text-black max-w-md mb-6 font-[Neue_Augenblick]">
              <p>Industrias en movimiento</p>
            </div>
            <p className="text-lg text-black font-augenblick">
              Conocemos las exigencias de cada sector. Por eso, en Yobel
              diseñamos soluciones integradas y adaptables, alineadas a los
              retos y necesidades de tu industria.
            </p>
          </div>
        </div>

        <div className="w-full -mr-20 md:-mr-40 relative" onWheel={handleWheel}>
          {/* Left Blur Overlay */}
          <div
            className="absolute left-0 top-0 h-[60vw] md:h-[25vw] max-h-[450px] w-16 md:w-32 z-10 pointer-events-none backdrop-blur-[1px]"
            style={{
              maskImage: "linear-gradient(to right, black, transparent)",
              WebkitMaskImage: "linear-gradient(to right, black, transparent)",
            }}
          />

          {/* Right Blur Overlay */}
          <div
            className="absolute right-0 top-0 h-[60vw] md:h-[25vw] max-h-[450px] w-16 md:w-32 z-10 pointer-events-none backdrop-blur-[1px]"
            style={{
              maskImage: "linear-gradient(to left, black, transparent)",
              WebkitMaskImage: "linear-gradient(to left, black, transparent)",
            }}
          />

          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {industries.map((ind, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_100%] min-w-0 px-4 sm:flex-[0_0_85%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_28.57%]"
                >
                  <div
                    className="group relative flex flex-col h-full"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <Link
                      to={`/industrias/${ind.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="flex flex-col gap-5 w-full cursor-none block"
                    >
                      <div className="aspect-square w-full rounded-[20px] overflow-hidden relative shrink-0">
                        <img
                          src={ind.image}
                          alt={ind.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-3 text-black px-2">
                        <h3 className="text-2xl font-medium font-[Neue_Augenblick]">
                          {ind.title}
                        </h3>
                        <p className="text-lg font-light leading-snug opacity-80 font-augenblick">
                          {ind.description}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
