import { useMemo } from "react";
import { Section } from "../../../components/ui/section";
import { Container } from "../../../components/ui/container";
import { GridLogos } from "../../../components/GridLogos";
import { useTranslation } from 'react-i18next';

export function Certificates( ) {
   const { t } = useTranslation();

   // Array de nombres de archivo (ajusta con tu array real)
   const certificateFiles = [
     "cert-01.png",
     "cert-02.png",
     "cert-03.png",
     "cert-04.png",
     "cert-05.png"
   ];

   // Mapa de assets compilados desde src/assets/certificates
   const filesMap = useMemo(() => {
     const modules = import.meta.glob("/src/assets/images/certificates/*", { eager: true, query: "?url", import: "default" }) as Record<string, string>;
     const map: Record<string, string> = {};
     for (const fullPath in modules) {
       const filename = fullPath.split("/").pop()?.toLowerCase() || fullPath;
       map[filename] = modules[fullPath];
     }
     return map;
   }, []);

   // Obtener URLs en el mismo orden del array; si no existe la imagen, devuelve cadena vacía
   const certificateUrls = certificateFiles.map(name => filesMap[name.toLowerCase()] || "");

  return (
    <Section className="bg-white overflow-hidden">
       <Container className="flex flex-col gap-20">
         <div className="flex flex-col md:flex-row gap-12 md:gap-32 items-start">
            <div className="shrink-0 w-32 text-lg mt-2">{t('home.certificates.label')}</div>
            <div className="flex flex-col md:flex-row gap-12 md:gap-32">
               <h2 className="text-4xl md:text-[45px] leading-tight max-w-sm font-[Neue_Augenblick]"> {t('home.certificates.title')} </h2>
               <p className="text-lg leading-relaxed max-w-md opacity-80"> {t('home.certificates.description')} </p>
            </div>
         </div>

         <GridLogos className="mt-12">
            {certificateUrls.map((src, i) => {
               if (!src) return null; // omitir si no se encontró
               const alt = certificateFiles[i].split(".")[0];
               return (
                 <img
                   key={i}
                   src={src}
                   alt={alt}
                   className="h-24 md:h-[207px] object-contain opacity-80 hover:opacity-100 transition-all duration-700 ease-in-out grayscale hover:grayscale-0"
                 />
               );
            })}
         </GridLogos>
      </Container>
    </Section>
  );
}