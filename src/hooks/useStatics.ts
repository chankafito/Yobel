import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { StatItem } from "../components/StatsList";

import staticsEn from "../data/locales/en/statics.json";
import staticsEs from "../data/locales/es/statics.json";
import staticsCl from "../data/locales/cl/statics.json";

const staticsData: Record<string, StatItem[]> = {
  en: staticsEn as StatItem[],
  es: staticsEs as StatItem[],
  cl: staticsCl as StatItem[],
};

export function useStatics() {
  const { lang } = useParams();
  const language = lang ?? "en";

  const [statics, setStatics] = useState<StatItem[]>([]);

  useEffect(() => {
    const data = staticsData[language] || staticsData["en"];
    setStatics(data);
  }, [language]);

  return statics;
}
