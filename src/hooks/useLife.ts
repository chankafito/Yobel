import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import type { LifeItem } from "../types/life";

import lifeEn from "../data/locales/en/life.json";
import lifeEs from "../data/locales/es/life.json";
import lifeCl from "../data/locales/cl/life.json";

const lifeData: Record<string, LifeItem[]> = {
  en: lifeEn as LifeItem[],
  es: lifeEs as LifeItem[],
  cl: lifeCl as LifeItem[],
};

export function useLife() {
  const { lang } = useParams();
  const language = lang ?? "en";

  const [timeline, setLife] = useState<LifeItem[]>([]);
  useEffect(() => {
    const data = lifeData[language] || lifeData["en"];
    setLife(data);
  }, [language]);

  return timeline;
}