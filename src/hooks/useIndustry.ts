import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { IndustryData, IndustrySlug } from "../types/industry";

// Import industry data for each language
// Industrial
import industrialEn from "../data/locales/en/industries/industrial.json";
import industrialEs from "../data/locales/es/industries/industrial.json";
import industrialCl from "../data/locales/cl/industries/industrial.json";

// Belleza
import bellezaEn from "../data/locales/en/industries/belleza.json";
import bellezaEs from "../data/locales/es/industries/belleza.json";
import bellezaCl from "../data/locales/cl/industries/belleza.json";

// Farmacéutica
import farmaceuticaEn from "../data/locales/en/industries/farmaceutica.json";
import farmaceuticaEs from "../data/locales/es/industries/farmaceutica.json";
import farmaceuticaCl from "../data/locales/cl/industries/farmaceutica.json";

// Retail
import retailEn from "../data/locales/en/industries/retail.json";
import retailEs from "../data/locales/es/industries/retail.json";
import retailCl from "../data/locales/cl/industries/retail.json";

// Alimentos y Bebidas
import alimentosEn from "../data/locales/en/industries/alimentos-bebidas.json";
import alimentosEs from "../data/locales/es/industries/alimentos-bebidas.json";
import alimentosCl from "../data/locales/cl/industries/alimentos-bebidas.json";

// Tecnología
import tecnologiaEn from "../data/locales/en/industries/tecnologia.json";
import tecnologiaEs from "../data/locales/es/industries/tecnologia.json";
import tecnologiaCl from "../data/locales/cl/industries/tecnologia.json";

// Moda
import modaEn from "../data/locales/en/industries/moda.json";
import modaEs from "../data/locales/es/industries/moda.json";
import modaCl from "../data/locales/cl/industries/moda.json";

// Cuidado del Hogar
import cuidadoHogarEn from "../data/locales/en/industries/cuidado-hogar.json";
import cuidadoHogarEs from "../data/locales/es/industries/cuidado-hogar.json";
import cuidadoHogarCl from "../data/locales/cl/industries/cuidado-hogar.json";

// Químicos
import quimicosEn from "../data/locales/en/industries/quimicos.json";
import quimicosEs from "../data/locales/es/industries/quimicos.json";
import quimicosCl from "../data/locales/cl/industries/quimicos.json";

// Construcción
import construccionEn from "../data/locales/en/industries/construccion.json";
import construccionEs from "../data/locales/es/industries/construccion.json";
import construccionCl from "../data/locales/cl/industries/construccion.json";

// Editorial
import editorialEn from "../data/locales/en/industries/editorial.json";
import editorialEs from "../data/locales/es/industries/editorial.json";
import editorialCl from "../data/locales/cl/industries/editorial.json";

type IndustryDataMap = Record<string, Record<IndustrySlug, IndustryData>>;

const industryData: IndustryDataMap = {
  en: {
    "industrial": industrialEn as IndustryData,
    "belleza": bellezaEn as IndustryData,
    "farmaceutica": farmaceuticaEn as IndustryData,
    "retail": retailEn as IndustryData,
    "alimentos-bebidas": alimentosEn as IndustryData,
    "tecnologia": tecnologiaEn as IndustryData,
    "moda": modaEn as IndustryData,
    "cuidado-hogar": cuidadoHogarEn as IndustryData,
    "quimicos": quimicosEn as IndustryData,
    "construccion": construccionEn as IndustryData,
    "editorial": editorialEn as IndustryData,
  },
  es: {
    "industrial": industrialEs as IndustryData,
    "belleza": bellezaEs as IndustryData,
    "farmaceutica": farmaceuticaEs as IndustryData,
    "retail": retailEs as IndustryData,
    "alimentos-bebidas": alimentosEs as IndustryData,
    "tecnologia": tecnologiaEs as IndustryData,
    "moda": modaEs as IndustryData,
    "cuidado-hogar": cuidadoHogarEs as IndustryData,
    "quimicos": quimicosEs as IndustryData,
    "construccion": construccionEs as IndustryData,
    "editorial": editorialEs as IndustryData,
  },
  cl: {
    "industrial": industrialCl as IndustryData,
    "belleza": bellezaCl as IndustryData,
    "farmaceutica": farmaceuticaCl as IndustryData,
    "retail": retailCl as IndustryData,
    "alimentos-bebidas": alimentosCl as IndustryData,
    "tecnologia": tecnologiaCl as IndustryData,
    "moda": modaCl as IndustryData,
    "cuidado-hogar": cuidadoHogarCl as IndustryData,
    "quimicos": quimicosCl as IndustryData,
    "construccion": construccionCl as IndustryData,
    "editorial": editorialCl as IndustryData,
  },
};

export function useIndustry(slug: IndustrySlug) {
  const { lang } = useParams();
  const language = lang ?? "en";

  const [data, setData] = useState<IndustryData | null>(null);

  useEffect(() => {
    const langData = industryData[language] || industryData["en"];
    const localeData = langData[slug];
    setData(localeData);
  }, [language, slug]);

  return data;
}
