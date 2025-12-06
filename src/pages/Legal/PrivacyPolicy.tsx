import { Section } from "../../components/ui/section";
import { Container } from "../../components/ui/container";

export function PrivacyPolicy() {
  return (
    <>
      <div className="relative h-[40vh] min-h-[400px] max-h-[500px] w-full overflow-hidden font-augenblick bg-gradient-to-b from-[#fff066] to-white">
        <div className="absolute bottom-10 left-0 right-0 px-[5%] md:px-[50px] z-10">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-[30px]">
             <p className="text-lg md:text-[18px] text-black font-[Neue_Augenblick]">Legal</p>
             <div className="flex flex-col lg:flex-row items-end justify-between gap-[40px] w-full">
                <h1 className="text-5xl md:text-[65px] leading-[1] text-black max-w-[773px] font-[Neue_Augenblick]">
                  Políticas de Privacidad
                </h1>
                <p className="text-xl md:text-[22px] leading-[24px] text-black max-w-[350px] lg:mr-32 pb-1 font-[Neue_Augenblick]">
                  Tu privacidad es importante para nosotros. Conoce cómo protegemos y utilizamos tus datos personales.
                </p>
             </div>
          </div>
        </div>
      </div>

      <Section className="bg-white py-16 md:py-24">
        <Container>
          <div className="max-w-[900px] mx-auto flex flex-col gap-8 text-lg leading-relaxed text-gray-700 font-[Neue_Augenblick]">
            <p>
              En Yobel, nos comprometemos a proteger la privacidad y seguridad de los datos personales de nuestros usuarios, clientes y socios. 
              Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos su información.
            </p>
            
            <h2 className="text-2xl font-bold text-black mt-4">1. Recopilación de Información</h2>
            <p>
              Podemos recopilar información personal que usted nos proporciona voluntariamente, como su nombre, dirección de correo electrónico, número de teléfono y empresa, 
              cuando se registra en nuestros servicios, solicita información o se comunica con nosotros.
            </p>

            <h2 className="text-2xl font-bold text-black mt-4">2. Uso de la Información</h2>
            <p>
              Utilizamos la información recopilada para proporcionar, mantener y mejorar nuestros servicios, así como para comunicarnos con usted sobre actualizaciones, 
              ofertas y noticias relevantes. No compartimos su información personal con terceros no afiliados sin su consentimiento, excepto cuando sea necesario para cumplir con la ley.
            </p>

            <h2 className="text-2xl font-bold text-black mt-4">3. Seguridad de los Datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas adecuadas para proteger sus datos personales contra el acceso no autorizado, la pérdida o la alteración. 
              Sin embargo, ninguna transmisión de datos por Internet es completamente segura, por lo que no podemos garantizar la seguridad absoluta.
            </p>
            
            <h2 className="text-2xl font-bold text-black mt-4">4. Sus Derechos</h2>
            <p>
              Usted tiene derecho a acceder, corregir o eliminar su información personal en cualquier momento. 
              Si desea ejercer estos derechos o tiene preguntas sobre nuestra política de privacidad, por favor contáctenos a través de nuestros canales oficiales.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
