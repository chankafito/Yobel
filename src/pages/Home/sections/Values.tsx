import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { Section } from "../../../components/ui/section";
import { Container } from "../../../components/ui/container";
import video from "../../../assets/videos/camion.mp4";

export function Values() {
  const { t } = useTranslation();

  return (
    <Section className="bg-gradient-to-b from-[#fff066] via-[#fdfaa8] to-white pb-24 md:pb-32">
      <Container className="mb-24 md:mb-32">
        <motion.div 
          className="flex flex-col lg:flex-row items-end justify-between gap-12"
          initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          {/* Left Side: Title Section */}
          <div className="flex flex-col gap-8 max-w-4xl">
            <motion.div 
              className="w-12 h-12 relative"
              animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
              transition={{ 
                duration: 2, 
                ease: "easeInOut", 
                repeat: Infinity, 
                repeatDelay: 5 
              }}
            >
               <svg className="w-full h-full" viewBox="0 0 48 46" fill="none">
                 <path d="M0 45.9994V30.6785C0 30.6785 36.2411 15.2325 36.2411 8.71527C36.2411 4.64101 0 15.0514 0 15.0514V0H35.0771C49.2263 0 47.9715 7.45669 47.9715 14.9269V46H24.4355C24.4355 46 40.1752 20.8884 36.2411 20.8884C30.4859 20.8884 0 45.9994 0 45.9994Z" fill="black" />
               </svg>
            </motion.div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-normal text-black mb-6">
                {t('home.values.title')}
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed text-black font-light not-italic max-w-2xl"> {t('home.values.desc')} </p>
            </div>
          </div>

          {/* Right Side: Search Box */}
          <div className="w-full lg:max-w-[450px] flex flex-col gap-4 shrink-0 pb-2">
              <p className="text-lg text-[rgb(8,8,8)]">{ t('header.search.label')}</p>
              <button className="w-fit px-8 py-3 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer group">
                <span className="text-xl md:text-2xl font-light">{t('header.search.placeholder')}</span>
              </button>
          </div>
        </motion.div>
      </Container>

      {/* Full Width Video Section with Rounded Corners */}
      <motion.div 
        className="w-full h-[50vh] md:h-[80vh] relative overflow-hidden rounded-[40px]"
        initial={{ opacity: 0, filter: "blur(10px)", y: 100 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <video
          src={video}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
        />
      </motion.div>
    </Section>
  );
}
