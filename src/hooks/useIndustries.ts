import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { IndustrieItem } from "../types/industries";

// Import services for each language
import industriesEn from "../data/locales/en/industries.json";
import industriesEs from "../data/locales/es/industries.json";
import industriesCl from "../data/locales/cl/industries.json";

const industriesData: Record<string, IndustrieItem[]> = {
  en: industriesEn as IndustrieItem[],
  es: industriesEs as IndustrieItem[],
  cl: industriesCl as IndustrieItem[],
};

export function useIndustries() {
  const { lang } = useParams();
  const language = lang ?? "en";

  const [industries, setIndustries] = useState<IndustrieItem[]>([]);

  useEffect(() => {
    // Load services for the current language
    const data = industriesData[language] || industriesData["en"];
    setIndustries(data);
  }, [language]);

  return industries;
}
