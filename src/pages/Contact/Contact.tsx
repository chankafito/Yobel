import { Section } from "../../components/ui/section";
import { Container } from "../../components/ui/container";
import { Button } from "../../components/ui/button";

import { SectionMaps } from "../../pages/About/sections/SectionMaps";
import { ContactForm } from "./sections/ContactForm";

import { Faqs } from "../../pages/Home/sections/Faqs";
export function Contact() {
  return (
    <>
      <div className="relative h-[70vh] md:h-[40vh] min-h-[500px] md:min-h-[400px] max-h-[700px] md:max-h-[500px] w-full overflow-hidden font-augenblick bg-gradient-to-b from-[#fff066] to-white">
        <div className="absolute bottom-10 left-0 right-0 px-[5%] md:px-[50px] z-10">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-[30px]">
             <p className="text-lg md:text-[18px] text-black font-[Neue_Augenblick]">Contacto</p>
             <div className="flex flex-col lg:flex-row items-end justify-between gap-[40px] w-full">
                <h1 className="text-5xl md:text-[65px] leading-[1] text-black max-w-[773px] font-[Neue_Augenblick]">
                  Conversemos sobre tu negocio
                </h1>
                <p className="text-xl md:text-[22px] leading-[24px] text-black max-w-[450px] lg:mr-32 pb-1 font-[Neue_Augenblick]">
                  Un especialista evaluará tu caso y te presentará un flujo integrado con acciones rápidas y un roadmap claro.
                </p>
             </div>
          </div>
        </div>
      </div>

      <ContactForm />

      <SectionMaps showContactButton={false} />

      <Section className="bg-white py-16 md:py-20">
        <Container>
          <div className="bg-white rounded-[30px] p-8 md:p-12 border-2 border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-normal mb-4 text-black font-[Neue_Augenblick]">¿Te gustaría trabajar como aliado?</h3>
            <p className="text-lg md:text-xl text-gray-700 mb-8 font-light leading-relaxed">Impulsa tu carrera en logística integral. Filtra por país, área y modalidad.</p>
            <Button className="bg-black text-white px-8 py-4 rounded-full text-lg hover:bg-gray-800 transition-colors">
              Ver ofertas laborales
            </Button>
          </div>
        </Container>
      </Section>

      <Faqs />

    </>
  )
}