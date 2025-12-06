import React from "react";
import { Section } from "../../components/ui/section";
import { Container } from "../../components/ui/container";

export function TermsConditions() {
  return (
    <>
      <div className="relative h-[40vh] min-h-[400px] max-h-[500px] w-full overflow-hidden font-augenblick bg-gradient-to-b from-[#fff066] to-white">
        <div className="absolute bottom-10 left-0 right-0 px-[5%] md:px-[50px] z-10">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-[30px]">
             <p className="text-lg md:text-[18px] text-black font-[Neue_Augenblick]">Legal</p>
             <div className="flex flex-col lg:flex-row items-end justify-between gap-[40px] w-full">
                <h1 className="text-5xl md:text-[65px] leading-[1] text-black max-w-[773px] font-[Neue_Augenblick]">
                  Términos y Condiciones
                </h1>
                <p className="text-xl md:text-[22px] leading-[24px] text-black max-w-[350px] lg:mr-32 pb-1 font-[Neue_Augenblick]">
                  Conoce los términos y condiciones que rigen el uso de nuestros servicios y plataformas digitales.
                </p>
             </div>
          </div>
        </div>
      </div>

      <Section className="bg-white py-16 md:py-24">
        <Container>
          <div className="max-w-[900px] mx-auto flex flex-col gap-8 text-lg leading-relaxed text-gray-700 font-[Neue_Augenblick]">
            <p>
              Bienvenido a Yobel. Al acceder y utilizar nuestro sitio web y servicios, usted acepta cumplir con los siguientes términos y condiciones. 
              Le recomendamos leer detenidamente este documento para entender sus derechos y obligaciones.
            </p>
            
            <h2 className="text-2xl font-bold text-black mt-4">1. Uso del Sitio Web</h2>
            <p>
              El contenido de este sitio web es para su información general y uso personal. Está sujeto a cambios sin previo aviso. 
              Ni nosotros ni terceros ofrecemos garantía alguna sobre la exactitud, puntualidad, rendimiento, integridad o idoneidad de la información y los materiales encontrados u ofrecidos en este sitio web.
            </p>

            <h2 className="text-2xl font-bold text-black mt-4">2. Propiedad Intelectual</h2>
            <p>
              Este sitio web contiene material que es propiedad nuestra o está licenciado a nosotros. Este material incluye, pero no se limita a, el diseño, la disposición, la apariencia y los gráficos. 
              La reproducción está prohibida salvo de conformidad con el aviso de copyright, que forma parte de estos términos y condiciones.
            </p>

            <h2 className="text-2xl font-bold text-black mt-4">3. Enlaces a Terceros</h2>
            <p>
              De vez en cuando, este sitio web también puede incluir enlaces a otros sitios web. Estos enlaces se proporcionan para su conveniencia para proporcionar más información. 
              No significan que respaldamos el sitio(s) web. No tenemos ninguna responsabilidad por el contenido del sitio(s) web vinculado.
            </p>
            
            <h2 className="text-2xl font-bold text-black mt-4">4. Limitación de Responsabilidad</h2>
            <p>
              El uso de cualquier información o material en este sitio web es bajo su propio riesgo, por lo cual no seremos responsables. 
              Será su propia responsabilidad asegurarse de que cualquier producto, servicio o información disponible a través de este sitio web cumpla con sus requisitos específicos.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
