import { useEffect, useState, useMemo } from "react";
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

  // Mapa de imágenes desde src (Vite genera URLs públicas)
  const imagesMap = useMemo(() => {
    const modules = import.meta.glob("/src/assets/images/industries/*", { eager: true, query: "?url", import: "default" }) as Record<string, string>;
    return modules;
  }, []);

  // Resolver por nombre de archivo (case-insensitive), incluso si viene con subcarpetas
  const resolveImageUrl = (filename?: string) => {
    if (!filename) return "";
    const lower = filename.toLowerCase();

    // URLs externas: respetar
    if (lower.startsWith("http://") || lower.startsWith("https://")) {
      return filename;
    }

    // Extraer basename para buscar en el glob
    const basename = lower.split("/").pop() || lower;

    for (const fullPath in imagesMap) {
      const file = fullPath.split("/").pop()?.toLowerCase();
      if (file === basename) {
        return imagesMap[fullPath]; // URL pública generada por Vite (ej. /assets/xxx.hash.jpg)
      }
    }

    // No encontrada en src: devolver original como fallback (podría estar en public)
    return filename;
  };

  useEffect(() => {
    // Load services for the current language
    const data = industriesData[language] || industriesData["en"];

    // Reemplazar image con URL resolvida si existe
    const resolved = data.map(item => {
      const url = resolveImageUrl(item.image);
      return {
        ...item,
        image: url || item.image // si no se encuentra, mantener original
        // si quieres un placeholder, usa: image: url || "/assets/placeholder.jpg"
      };
    });

    setIndustries(resolved);
  }, [language, imagesMap]);

  return industries;
}
