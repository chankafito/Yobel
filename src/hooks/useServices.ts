import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import type { ServiceItem } from "../types/service";

// Import services for each language
import servicesEn from "../data/locales/en/services.json";
import servicesEs from "../data/locales/es/services.json";
import servicesCl from "../data/locales/cl/services.json";

const servicesData: Record<string, ServiceItem[]> = {
  en: servicesEn as ServiceItem[],
  es: servicesEs as ServiceItem[],
  cl: servicesCl as ServiceItem[],
};

export function useServices() {
  const { lang } = useParams();
  const language = lang ?? "en";

  const [services, setServices] = useState<{ id: string; title: string; description: string; image?: string }[]>([]);

  // Mapa de imágenes desde src (Vite genera URLs públicas)
  const imagesMap = useMemo(() => {
    const modules = import.meta.glob("/src/assets/images/services/*", { eager: true, as: "url" }) as Record<string, string>;
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
        return imagesMap[fullPath]; // URL pública generada por Vite
      }
    }

    // No encontrada en src: devolver original como fallback (podría estar en public)
    return filename;
  };

  useEffect(() => {
    const data = servicesData[language] || servicesData["en"];

    // Reemplazar image con URL resolvida si existe
    const resolved = data.map(item => {
      const url = resolveImageUrl(item.image);
      return {
        ...item,
        image: url || item.image
        // Opcional: usar un placeholder si no se encuentra
        // image: url || "/assets/placeholder.jpg"
      };
    });

    setServices(resolved);
  }, [language, imagesMap]);

  return services;
}
