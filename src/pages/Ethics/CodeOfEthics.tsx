import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Section } from "../../components/ui/section";
import { Container } from "../../components/ui/container";
import { Button } from "../../components/ui/button";

import { ScrollRevealText  } from "../../components/motion-text";
import EticalImg from "../../assets/images/etica-yobel-1.jpg";

import { useValues } from "../../hooks/useValues";
import { ProcessItem } from "../../components/ProcessItem";

import { usePolices  } from "../../hooks/usePolices";

import { Faqs } from "../../pages/Home/sections/Faqs";

export function CodeOfEthics() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const values = useValues();
  const polices = usePolices();
  return (
    <>
      <motion.div 
          className="relative w-full min-h-screen overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#59c1e6]" />
          <div className="absolute bottom-0 left-0 w-full h-96 bg-linear-to-t from-white via-gray-200/40 to-transparent pointer-events-none" />
        </div>

        <motion.div 
            className="absolute bottom-20 left-0 right-0 px-[5%] md:px-[50px] z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
          <div className="max-w-[1400px] mx-auto flex flex-col gap-[30px]">
            <p className="text-lg md:text-[18px] text-black font-medium">{t("ethics.name")}</p>
            <div className="flex flex-col lg:flex-row items-start gap-10">
              <h1 className="text-5xl md:text-[65px] leading-none text-black max-w-[800px] tracking-tight font-[Neue_Augenblick]">
                {t("ethics.title")}
              </h1>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <Section className="bg-white py-24">
        <Container>
           <div className="flex flex-col gap-8 max-w-[1000px] mx-auto items-center text-center">
             <div className="w-12 h-12 relative mb-2">
               <svg className="w-full h-full" fill="none" viewBox="0 0 40 40">
                <motion.path 
                  d="M0 39.9994V26.6769C0 26.6769 30.2009 13.2457 30.2009 7.57849C30.2009 4.03566 0 13.0881 0 13.0881V0H29.2309C41.0219 0 39.9763 6.48408 39.9763 12.9799V40H20.3629C20.3629 40 33.4793 18.1638 30.2009 18.1638C25.4049 18.1638 0 39.9994 0 39.9994Z"
                  style={{ fill: "#000" }}
                />
              </svg>
             </div>
             <h2 className="text-2xl md:text-3xl lg:text-[32px] leading-tight font-light text-gray-400">{ t("ethics.name") }</h2>
             <div className="flex flex-col gap-12 items-center">
               <ScrollRevealText 
                 text={t("ethics.phrase.text")}
                 className="text-2xl md:text-4xl lg:text-[40px] leading-tight font-normal font-augenblick text-center justify-center"
               />
               <Link to="/etica/linea-de-etica">
                 <Button 
                   className="rounded-full px-3.5 py-2 h-auto text-[22px] font-medium leading-6 bg-transparent text-black border-[1.5px] border-black hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-[12px]"
                 >
                   { t("ethics.phrase.btn") }
                   <svg className="w-[17px] h-4" viewBox="0 0 17 16" fill="none">
                     <path d="M0 7.52417H16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                     <path d="M8.85449 0.53033L15.8545 7.53033L8.85449 14.5303" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                   </svg>
                 </Button>
               </Link>
             </div>
           </div>
        </Container>
      </Section>

      {/* Parallax Image */}
      <div ref={ref} className="relative w-full h-[500px] md:h-[600px] lg:h-[900px] overflow-hidden bg-gray-100">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
        >
          <img src={EticalImg} alt="Ethics" className="w-full h-full object-cover" />
        </motion.div>
      </div>

      {/* Principles Section */}
      <Section className="bg-white py-20">
        <Container>
           <div className="flex flex-col gap-12">
             <div className="flex flex-col gap-2 items-start">
               <span className="text-xl text-gray-400 font-medium font-[Neue_Augenblick]">{ t("ethics.values.name")}</span>
               <h3 className="text-3xl md:text-4xl font-normal mb-6 font-[Neue_Augenblick]">{ t("ethics.values.title")}</h3>
             </div>

             {/* Principles Section (ProcessItem Style) */}
             <div className="flex flex-col w-full">
                {values.map((prin, idx) => (
                  <React.Fragment key={prin.id}>
                      <ProcessItem 
                        icon={prin.icon}
                        title={prin.title}
                        description={prin.description} 
                        />
                      {idx < values.length - 1 && (
                        <div className="w-full h-px bg-[#494949]/50" />
                      )}
                  </React.Fragment>
                ))}
             </div>
           </div>
        </Container>
      </Section>

      {/* Ethics Channel Section (Dark) */}
      <Section className="bg-white">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="box-border content-stretch flex flex-col gap-[48px] items-center justify-center px-[20px] md:px-[50px] py-[80px] md:py-[120px] relative size-full">
              {/* Isotipo */}
              <div className="h-[60px] relative shrink-0 w-[93px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 93 60">
                  <motion.path 
                    d="M0 39.9994V26.6769C0 26.6769 30.2009 13.2457 30.2009 7.57849C30.2009 4.03566 0 13.0881 0 13.0881V0H29.2309C41.0219 0 39.9763 6.48408 39.9763 12.9799V40H20.3629C20.3629 40 33.4793 18.1638 30.2009 18.1638C25.4049 18.1638 0 39.9994 0 39.9994Z"
                    style={{ fill: "#000" }}
                  />
                </svg>
              </div>
              
              {/* Texto principal */}
              <div className="relative shrink-0 w-full">
                <div className="flex flex-col items-center justify-center size-full">
                    <div className="box-border content-stretch flex flex-col gap-[32px] items-center justify-center px-4 md:px-[112px] py-0 relative w-full">
                      <motion.p 
                          className="font-augenblick leading-[1.2] md:leading-[48px] not-italic relative shrink-0 text-[32px] md:text-[45px] text-black/50 text-center w-full"
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                      >
                          { t("ethics.channel.title") }
                      </motion.p>
                      <motion.div 
                          className="relative shrink-0 w-full"
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                      >
                          <div className="flex flex-row items-center justify-center size-full">
                            <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-4 md:px-[50px] py-0 relative w-full">
                                <p className="basis-0 font-augenblick grow leading-[1.2] md:leading-[48px] min-h-px min-w-px not-italic relative shrink-0 text-[32px] md:text-[45px] text-black text-center">
                                  { t("ethics.channel.description") }
                                </p>
                            </div>
                          </div>
                      </motion.div>
                    </div>
                </div>
              </div>

              {/* Items horizontales */}
              <motion.div 
                className="flex flex-wrap justify-center gap-4 md:gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {[ t("ethics.channel.form"), t("ethics.channel.phone"), t("ethics.channel.tracking") ].map((item, i) => (
                  <span key={i} className="text-sm md:text-base text-black">{item}</span>
                ))}
              </motion.div>

              {/* Botón CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Link to="/linea-etica">
                    <Button className="bg-black text-white px-10 py-5 rounded-full text-lg hover:bg-black/80 transition-colors">
                      { t("ethics.channel.btn") }
                    </Button>
                </Link>
              </motion.div>
          </div>
        </div>
      </Section>

      {/* Policies Section */}
      <Section className={`bg-white py-20 overflow-hidden relative`}>
        <Container className="relative z-10" >
          <div className="flex flex-col gap-12 mb-20">
            <div className="w-12 h-12 relative">
              <svg className="w-full h-full" viewBox="0 0 48 46" fill="none">
                <motion.path 
                  d="M0 39.9994V26.6769C0 26.6769 30.2009 13.2457 30.2009 7.57849C30.2009 4.03566 0 13.0881 0 13.0881V0H29.2309C41.0219 0 39.9763 6.48408 39.9763 12.9799V40H20.3629C20.3629 40 33.4793 18.1638 30.2009 18.1638C25.4049 18.1638 0 39.9994 0 39.9994Z"
                  style={{ fill: "#000" }}
                />
              </svg>
            </div>
            <div className="max-w-4xl">
              <h2 className="text-4xl md:text-5xl lg:text-[45px] leading-tight font-normal mb-8">
                {t("ethics.policies.title")}
              </h2>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <span className="text-xl text-gray-400 font-medium block mb-12">{ t("ethics.policies.subtitle")}</span>
            {polices.map((step, idx) => (
              <div key={idx} className="py-20 border-b border-gray-200 last:border-none">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-20">
                  <div className="w-full lg:w-1/2 text-left">
                    <motion.span 
                      className="text-[100px] md:text-[165px] font-normal leading-none block bg-clip-text text-transparent bg-gradient-to-b from-[#090909] via-[#59c1e6] to-[#090909]"
                      style={{ backgroundSize: "100% 200%" }}
                      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      viewport={{ once: true, margin: "-100px" }}
                      animate={{ backgroundPosition: ["0% 0%", "0% 100%"] }}
                      transition={{ 
                        opacity: { duration: 0.8, ease: "easeOut" },
                        y: { duration: 0.8, ease: "easeOut" },
                        filter: { duration: 0.8, ease: "easeOut" },
                        backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear", repeatType: "reverse" }
                      }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </motion.span>
                  </div>
                  <div className="w-full lg:w-1/2 flex flex-col gap-6">
                    <h3 className="text-2xl md:text-[26px] text-black font-augenblick">{step.title}</h3>
                    <div className="pl-8 md:pl-12 lg:pl-20">
                      <ScrollRevealText 
                        text={step.description}
                        className="text-xl md:text-[22px] text-black mb-8 max-w-lg leading-relaxed"
                      />
                      <a href={step.link} className="text-black text-lg underline hover:text-gray-600 transition-colors duration-300">
                        { t("ethics.policies.btn") }
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Faqs />
    </>
  )
}