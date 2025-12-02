import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import video from "/src/assets/videos/gris-desktop.mp4";
import { getLangPrefix } from "../utils/path";

export default function NotFound() {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const langCode = lang ?? i18n.language ?? "en";
  const langPrefix = getLangPrefix(langCode);

  const subtitleText = t('notFound.description');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };
  
  const subtitleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.8
      }
    }
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      filter: "blur(8px)" 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1] as const // cubic-bezier válido
      }
    }
  };

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <video 
            src={video}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        
        <div className="absolute bottom-10 md:bottom-28 left-[5%] right-[5%] z-10 max-w-[1340px] mx-auto">
          <div className="flex flex-col items-start text-black">
            <motion.h1 
              className="text-8xl md:text-9xl lg:text-[150px] leading-none font-normal tracking-tight font-[Neue_Augenblick] mb-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span variants={wordVariants}>4</motion.span>
              <motion.span variants={wordVariants}>0</motion.span>
              <motion.span variants={wordVariants}>4</motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl lg:text-[22px] leading-normal max-w-[600px] mb-12 opacity-90 font-[Neue_Augenblick] flex flex-wrap gap-x-[0.25em]"
              variants={subtitleContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {subtitleText.split(" ").map((word, i) => (
                <motion.span key={i} variants={wordVariants} className="inline-block">
                  {word}
                </motion.span>
              ))}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <Link 
                to={`${langPrefix}/`} 
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-black text-black font-medium hover:bg-black hover:text-white transition-all duration-300"
              >
                {t('return_home')} <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
