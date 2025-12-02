import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Section } from "../../../components/ui/section";
import { Container } from "../../../components/ui/container";
import { Button } from "../../../components/atoms";
import { ParallaxImage } from "../../../components/molecules";
import {
  FAQ,
  SolutionsList,
  ParallaxCurves,
  Phrase,
  ScrollRevealVideo,
  IndustriesCarousel,
} from "../../../components/organisms";
import { yobelIcon } from "../../../assets/svg/icons";
import { useAssetPath } from "../../../hooks/useAssetPath";
import { useComex } from "../../../hooks/useComex";

// Icons
function YobelIcon() {
  return (
    <svg
      width="48"
      height="46"
      viewBox="0 0 48 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={yobelIcon} fill="black" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 6L9 17L4 12"
        stroke="black"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Comex() {
  const getAssetPath = useAssetPath();
  const data = useComex();

  // Loading state
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Cargando...</div>
      </div>
    );
  }

  const { hero, pitch, solutions, benefits, processes, faq, images } = data;

  return (
    <>
      {/* Hero Section with Video */}
      <div className="relative h-[80vh] min-h-[600px] max-h-[920px] w-full overflow-hidden font-augenblick">
        <div className="absolute inset-0 overflow-hidden bg-[#e5e5e5]">
          <video
            src={hero.videoUrl}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            crossOrigin="anonymous"
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white via-[#fff066] to-transparent pointer-events-none" />
        </div>

        <div className="absolute bottom-20 left-0 right-0 px-[5%] md:px-[50px] z-10">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-[30px]">
            <p className="text-lg md:text-[18px] text-black">{hero.label}</p>
            <div className="flex flex-col lg:flex-row items-start gap-[40px]">
              <h1 className="text-5xl md:text-[65px] leading-[1] text-black max-w-[773px]">
                {hero.title}
              </h1>
              <p className="text-xl md:text-[22px] leading-[24px] text-black max-w-[316px] pt-2">
                {hero.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pitch Section */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-[1200px] mx-auto my-20 text-center">
            <div className="mb-8 flex justify-center">
              <YobelIcon />
            </div>

            <h2 className="text-[32px] md:text-[48px] leading-[1.2] font-normal mb-16 max-w-[1000px] mx-auto tracking-tight text-black">
              {pitch.text}
            </h2>

            <div className="flex justify-center">
              <Button>{pitch.cta}</Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Parallax Curves Decoration */}
      <ParallaxCurves />

      {/* Solutions Section */}
      <Section className="bg-white">
        <Container>
          <SolutionsList
            solutions={solutions.items}
            hoverImage={getAssetPath(images.hover)}
            title={solutions.title}
          >
            <div className="mt-12">
              <Link to="/tarifas">
                <Button>{solutions.ctaText}</Button>
              </Link>
            </div>
          </SolutionsList>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 my-20">
            <div className="flex flex-col">
              <span className="text-gray-400 text-lg mb-20 block">
                {benefits.title}
              </span>
              <ParallaxImage
                src={getAssetPath(benefits.image)}
                alt="Logística Yobel"
                yValues={[-200, 0]}
              />
            </div>

            <div className="flex flex-col pt-0">
              <h3 className="text-[32px] md:text-[42px] leading-[1.1] font-normal mb-20 text-black tracking-tight max-w-xl">
                {benefits.subtitle}
              </h3>

              <ul className="flex flex-col w-full">
                {benefits.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-6 py-6 border-b border-gray-100 last:border-0"
                  >
                    <div className="mt-1.5 shrink-0">
                      <CheckIcon />
                    </div>
                    <span className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Full Width Image */}
      <div className="w-full h-[400px] lg:h-[600px] mb-20 relative overflow-hidden">
        <motion.img
          src={images.logistics}
          alt="Global Logistics"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>

      {/* Processes Section */}
      <Section className="bg-white">
        <Container>
          <div>
            <div className="flex flex-col items-center text-center mb-20">
              <div className="mb-8">
                <YobelIcon />
              </div>
              <h3 className="text-2xl md:text-3xl text-gray-400 font-normal mb-8">
                {processes.subtitle}
              </h3>
              <p className="text-3xl md:text-[42px] text-black leading-[1.1] max-w-5xl mx-auto">
                {processes.title}
              </p>
            </div>

            <div className="flex flex-col w-full">
              <span className="text-xl text-gray-400 font-medium block mb-12 text-center lg:text-left">
                {processes.label}
              </span>
              {processes.items.map((proc, idx) => (
                <div
                  key={idx}
                  className="py-20 border-b border-gray-200 last:border-none"
                >
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-20">
                    <div className="w-full lg:w-1/2 text-left flex justify-center lg:justify-start">
                      <motion.span
                        className="text-[100px] md:text-[165px] font-normal leading-none block bg-clip-text text-transparent animate-gradient-shift"
                        style={{
                          backgroundImage:
                            "linear-gradient(to bottom, #090909 0%, #59c1e6 50%, #090909 100%)",
                          backgroundSize: "100% 200%",
                        }}
                        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{
                          opacity: { duration: 0.8, ease: "easeOut" },
                          y: { duration: 0.8, ease: "easeOut" },
                          filter: { duration: 0.8, ease: "easeOut" },
                        }}
                      >
                        {(idx + 1).toString().padStart(2, "0")}
                      </motion.span>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col gap-6">
                      <h3 className="text-2xl md:text-[26px] text-black font-augenblick text-center lg:text-left">
                        {proc.title}
                      </h3>
                      <div className="pl-0 md:pl-12 lg:pl-20">
                        <p className="text-xl md:text-[22px] text-black mb-8 max-w-lg leading-relaxed text-center lg:text-left">
                          {proc.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Phrase Section */}
      <Phrase />

      {/* Scroll Reveal Video */}
      <ScrollRevealVideo />

      {/* Industries Carousel */}
      <IndustriesCarousel />

      {/* FAQ Section */}
      <FAQ items={faq.items} title={faq.title} />
    </>
  );
}

export default Comex;
