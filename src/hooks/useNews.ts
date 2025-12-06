import { useMemo } from "react";
import { useParams } from "react-router-dom";

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  country: string;
  image: string;
  excerpt: string;
  content: string;
}

import newsEn from "../data/locales/en/news.json";
import newsEs from "../data/locales/es/news.json";

const newsData: Record<string, NewsItem[]> = {
  en: newsEn as NewsItem[],
  es: newsEs as NewsItem[],
};

export function useNews() {
  const { lang } = useParams();
  const language = lang || "es"; // default español

  const news = useMemo(() => {
    const data = newsData[language] || newsData["es"];
    return data;
  }, [language]);

  return news;
}