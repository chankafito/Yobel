import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import type { TimelineItem } from "../types/timeline";

import timelineEn from "../data/locales/en/timeline.json";
import timelineEs from "../data/locales/es/timeline.json";
import timelineCl from "../data/locales/cl/timeline.json";

const timelineData: Record<string, TimelineItem[]> = {
  en: timelineEn as TimelineItem[],
  es: timelineEs as TimelineItem[],
  cl: timelineCl as TimelineItem[],
};

export function useTimeline() {
  const { lang } = useParams();
  const language = lang ?? "en";

  const [timeline, setTimeline] = useState<TimelineItem[]>([]);
  useEffect(() => {
    const data = timelineData[language] || timelineData["en"];
    setTimeline(data);
  }, [language]);

  return timeline;
}