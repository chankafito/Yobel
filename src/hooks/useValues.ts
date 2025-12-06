import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";

import type { ValueItem } from "../types/values";
import valuesEn from "../data/locales/en/values.json";
import valuesEs from "../data/locales/es/values.json";

const valuesData: Record<string, ValueItem[]> = {
  en: valuesEn as ValueItem[],
  es: valuesEs as ValueItem[],
};

export function useValues() {
  const { lang } = useParams();
  const language = lang ?? "en";

  const [values, setValues] = useState<ValueItem[]>([]);

  // Cargar SVG como raw strings
  const svgMap = useMemo(() => {
    const modules = import.meta.glob("/src/assets/svg/values/*.svg", { 
      eager: true, 
      query: "?raw", 
      import: "default" 
    }) as Record<string, string>;
    return modules;
  }, []);

  const resolveSvgContent = (filename?: string) => {
    if (!filename) return "";
    const lower = filename.toLowerCase();

    // Si es un string SVG completo, devolverlo directamente
    if (lower.trim().startsWith("<svg")) {
      return filename;
    }

    // Extraer basename para buscar en el glob
    const basename = lower.split("/").pop() || lower;

    for (const fullPath in svgMap) {
      const file = fullPath.split("/").pop()?.toLowerCase();
      if (file === basename) {
        return svgMap[fullPath]; // Contenido SVG como string
      }
    }

    // No encontrado: devolver vacío o fallback
    return "";
  };

  useEffect(() => {
    const data = valuesData[language] || valuesData["en"];

    // Reemplazar icon con contenido SVG
    const resolved = data.map(item => {
      const svgContent = resolveSvgContent(item.icon);
      return {
        ...item,
        icon: svgContent || item.icon // mantener original si no se encuentra
      };
    });

    setValues(resolved);
  }, [language, svgMap]);

  return values;
}