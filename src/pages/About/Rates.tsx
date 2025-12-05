import { useTranslation } from "react-i18next";
import { Section } from "../../components/ui/section";
import { Container } from "../../components/ui/container";
import { Button } from "../../components/ui/button";
import { Download } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function History() {
  const { t } = useTranslation();
  const pdfUrl = "https://circular.ws/yobel/Tarifas-Yobel.pdf";
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <>
      <Section className="relative h-[40vh] min-h-[400px] max-h-[500px] w-full overflow-hidden font-augenblick">
        <motion.div  style={{ y }} className="absolute inset-0 bg-gradient-to-b from-[#fff066] to-white" />
        <div className="absolute bottom-10 left-0 right-0 px-[5%] md:px-[50px] z-10">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-[30px]">
            <p className="text-lg md:text-[18px] text-black font-[Neue_Augenblick]">Comercio Exterior</p>
            <div className="flex flex-col lg:flex-row items-end justify-between gap-[40px] w-full">
              <h1 className="text-5xl md:text-[65px] leading-[1] text-black max-w-[773px] font-[Neue_Augenblick]">Tarifas</h1>
              <p className="text-xl md:text-[22px] leading-[24px] text-black max-w-[350px] lg:mr-32 pb-1 font-[Neue_Augenblick]">
                Consulta nuestras tarifas actualizadas para todos nuestros servicios logísticos y de cadena de suministro.
              </p>
             </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white py-16 md:py-24">
        <Container>
          <div className="flex flex-col gap-8 items-start">
            <div className="w-full flex justify-between items-center flex-wrap gap-4">
              <a href={pdfUrl} download target="_blank" rel="noopener noreferrer">
                <Button className="font-augenblick bg-transparent border-[1.5px] border-black text-black px-8 py-6 rounded-full text-xl hover:bg-black hover:text-white transition-colors duration-500 ease-in-out gap-3 font-[Neue_Augenblick]">
                  <Download className="w-5 h-5" />
                  Descargar PDF
                </Button>
              </a>
            </div>

            <div className="w-full h-[800px] bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
              <iframe src={pdfUrl} className="w-full h-full" title="Tarifas PDF" />
            </div>
          </div>
        </Container>
      </Section>

    </>
  )
}