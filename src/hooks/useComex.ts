import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { ComexData } from "../types/comex";

// Import comex data for each language
import comexEn from "../data/locales/en/comex.json";
import comexEs from "../data/locales/es/comex.json";
import comexCl from "../data/locales/cl/comex.json";

const comexData: Record<string, ComexData> = {
  en: comexEn as ComexData,
  es: comexEs as ComexData,
  cl: comexCl as ComexData,
};

export function useComex() {
  const { lang } = useParams();
  const language = lang ?? "en";

  const [data, setData] = useState<ComexData | null>(null);

  useEffect(() => {
    // Load comex data for the current language
    const localeData = comexData[language] || comexData["en"];
    setData(localeData);
  }, [language]);

  return data;
}
