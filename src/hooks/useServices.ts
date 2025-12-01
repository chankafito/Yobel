import { useEffect, useState } from "react";
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

  const [services, setServices] = useState<ServiceItem[]>([]);

  useEffect(() => {
    // Load services for the current language
    const data = servicesData[language] || servicesData["en"];
    setServices(data);
  }, [language]);

  return services;
}
