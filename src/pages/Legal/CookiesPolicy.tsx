import { Section } from "../../components/ui/section";
import { Container } from "../../components/ui/container";

export function CookiesPolicy() {
  return (
    <>
      <div className="relative h-[40vh] min-h-[400px] max-h-[500px] w-full overflow-hidden font-augenblick bg-gradient-to-b from-[#fff066] to-white">
        <div className="absolute bottom-10 left-0 right-0 px-[5%] md:px-[50px] z-10">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-[30px]">
             <p className="text-lg md:text-[18px] text-black font-[Neue_Augenblick]">Legal</p>
             <div className="flex flex-col lg:flex-row items-end justify-between gap-[40px] w-full">
                <h1 className="text-5xl md:text-[65px] leading-[1] text-black max-w-[773px] font-[Neue_Augenblick]">
                  Políticas de Cookies
                </h1>
                <p className="text-xl md:text-[22px] leading-[24px] text-black max-w-[350px] lg:mr-32 pb-1 font-[Neue_Augenblick]">
                  Entiende qué son las cookies, cómo las utilizamos y cómo puedes gestionarlas en tu navegador.
                </p>
             </div>
          </div>
        </div>
      </div>

      <Section className="bg-white py-16 md:py-24">
        <Container>
          <div className="max-w-[900px] mx-auto flex flex-col gap-8 text-lg leading-relaxed text-gray-700 font-[Neue_Augenblick]">
            <p>
              Yobel utiliza cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web. 
              Esta política explica qué son las cookies, cómo las usamos y cómo puede controlarlas.
            </p>
            
            <h2 className="text-2xl font-bold text-black mt-4">1. ¿Qué son las Cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. 
              Permiten que el sitio web recuerde sus acciones y preferencias (como el inicio de sesión, el idioma y otras configuraciones de visualización) durante un período de tiempo.
            </p>

            <h2 className="text-2xl font-bold text-black mt-4">2. Cómo Usamos las Cookies</h2>
            <p>
              Utilizamos cookies para entender cómo interactúa con nuestro sitio web, personalizar su experiencia y analizar el tráfico. 
              Esto nos ayuda a mejorar nuestros servicios y ofrecerle contenido más relevante.
            </p>

            <h2 className="text-2xl font-bold text-black mt-4">3. Tipos de Cookies que Utilizamos</h2>
            <ul className="list-disc pl-6 space-y-2">
               <li><strong>Cookies Esenciales:</strong> Necesarias para el funcionamiento del sitio web.</li>
               <li><strong>Cookies de Rendimiento:</strong> Nos ayudan a entender cómo los visitantes interactúan con el sitio web.</li>
               <li><strong>Cookies Funcionales:</strong> Permiten al sitio web recordar sus elecciones y proporcionar características mejoradas.</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-black mt-4">4. Gestión de Cookies</h2>
            <p>
              Puede controlar y/o eliminar las cookies según desee. Puede eliminar todas las cookies que ya están en su computadora y puede configurar la mayoría de los navegadores para evitar que se coloquen. 
              Sin embargo, si hace esto, es posible que tenga que ajustar manualmente algunas preferencias cada vez que visite un sitio y que algunos servicios y funcionalidades no funcionen.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
