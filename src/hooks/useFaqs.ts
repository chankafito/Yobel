import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { FaqItem } from "../types/faqs";

/**
 * importar los JSON locales (asegúrate que existen)
 */
import faqsEn from "../data/locales/en/faqs.json";
import faqsEs from "../data/locales/es/faqs.json";

const faqsData: Record<string, FaqItem[]> = {
  en: faqsEn as FaqItem[],
  es: faqsEs as FaqItem[]
};

export function useFaqs() {
  const { lang } = useParams();
  const language = lang ?? "en";

  const [faqs, setFaqs] = useState<FaqItem[]>([]);

  useEffect(() => {
    const data = faqsData[language] || faqsData["en"];
    setFaqs(data);
  }, [language]);

  return faqs;
}
