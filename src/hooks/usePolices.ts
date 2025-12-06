import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { policeItem } from "../types/polices";

/**
 * importar los JSON locales (asegúrate que existen)
 */
import policesEn from "../data/locales/en/polices.json";
import policesEs from "../data/locales/es/polices.json";

const policesData: Record<string, policeItem[]> = {
  en: policesEn as policeItem[],
  es: policesEs as policeItem[]
};

export function usePolices() {
  const { lang } = useParams();
  const language = lang ?? "en";

  const [polices, setPolices] = useState<policeItem[]>([]);
  useEffect(() => {
    const data = policesData[language] || policesData["en"];
    setPolices(data);
  }, [language]);

  return polices;
}
