import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Section } from "../ui/section";
import { Container } from "../ui/container";
import { useIndustries } from "../../hooks/useIndustries";
import { cn } from "../../utils/cn";

interface IndustriesCarouselProps {
  className?: string;
}

export function IndustriesCarousel({ className }: IndustriesCarouselProps) {
  const industries = useIndustries();
  const sliderRef = useRef<Slider>(null);
  const lastScrollTime = useRef(0);

  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    const now = Date.now();
    if (now - lastScrollTime.current < 500) return;

    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 20) {
      if (e.deltaX > 0) {
        sliderRef.current?.slickNext();
      } else {
        sliderRef.current?.slickPrev();
      }
      lastScrollTime.current = now;
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.15,
        },
      },
    ],
  };

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

      {/* Slick Carousel Styles */}
      <style>{`
        .slick-slider{box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}
        .slick-list{position:relative;display:block;overflow:hidden;margin:0;padding:0}
        .slick-list:focus{outline:0}
        .slick-list.dragging{cursor:pointer;cursor:hand}
        .slick-slider .slick-track,.slick-slider .slick-list{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}
        .slick-track{position:relative;top:0;left:0;display:block;margin-left:auto;margin-right:auto}
        .slick-track:before,.slick-track:after{display:table;content:''}
        .slick-track:after{clear:both}
        .slick-loading .slick-track{visibility:hidden}
        .slick-slide{display:none;float:left;height:100%;min-height:1px}
        [dir='rtl'] .slick-slide{float:right}
        .slick-slide img{display:block}
        .slick-slide.slick-loading img{display:none}
        .slick-slide.slick-dragging img{pointer-events:none}
        .slick-initialized .slick-slide{display:block}
        .slick-loading .slick-slide{visibility:hidden}
        .slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}
        .slick-arrow.slick-hidden{display:none}
        .slick-list {
          padding-bottom: 10px !important;
          overflow: visible !important;
        }
      `}</style>

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

          <Slider ref={sliderRef} {...settings}>
            {industries.map((ind, idx) => (
              <div key={idx} className="px-4 h-full">
                <div
                  className="group relative flex flex-col h-full"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <Link
                    to={`/industrias/${ind.title.toLowerCase().replace(/\s+/g, "-")}`}
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
          </Slider>
        </div>
      </Container>
    </Section>
  );
}
