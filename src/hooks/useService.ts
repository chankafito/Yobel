import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { ServiceData, ServiceSlug } from "../types/service";

// Import service data for each language
// Comercio Exterior
import comexEn from "../data/locales/en/services/comercio-exterior.json";
import comexEs from "../data/locales/es/services/comercio-exterior.json";
import comexCl from "../data/locales/cl/services/comercio-exterior.json";

// Almacenamiento
import almacenamientoEn from "../data/locales/en/services/almacenamiento.json";
import almacenamientoEs from "../data/locales/es/services/almacenamiento.json";
import almacenamientoCl from "../data/locales/cl/services/almacenamiento.json";

// Distribución
import distribucionEn from "../data/locales/en/services/distribucion.json";
import distribucionEs from "../data/locales/es/services/distribucion.json";
import distribucionCl from "../data/locales/cl/services/distribucion.json";

// Manufactura
import manufacturaEn from "../data/locales/en/services/manufactura.json";
import manufacturaEs from "../data/locales/es/services/manufactura.json";
import manufacturaCl from "../data/locales/cl/services/manufactura.json";

// Courier Express
import courierEn from "../data/locales/en/services/courier-express.json";
import courierEs from "../data/locales/es/services/courier-express.json";
import courierCl from "../data/locales/cl/services/courier-express.json";

// Valor Agregado
import valorEn from "../data/locales/en/services/valor-agregado.json";
import valorEs from "../data/locales/es/services/valor-agregado.json";
import valorCl from "../data/locales/cl/services/valor-agregado.json";

type ServiceDataMap = Record<string, Record<ServiceSlug, ServiceData>>;

const serviceData: ServiceDataMap = {
  en: {
    "comercio-exterior": comexEn as ServiceData,
    "almacenamiento": almacenamientoEn as ServiceData,
    "distribucion": distribucionEn as ServiceData,
    "manufactura": manufacturaEn as ServiceData,
    "courier-express": courierEn as ServiceData,
    "valor-agregado": valorEn as ServiceData,
  },
  es: {
    "comercio-exterior": comexEs as ServiceData,
    "almacenamiento": almacenamientoEs as ServiceData,
    "distribucion": distribucionEs as ServiceData,
    "manufactura": manufacturaEs as ServiceData,
    "courier-express": courierEs as ServiceData,
    "valor-agregado": valorEs as ServiceData,
  },
  cl: {
    "comercio-exterior": comexCl as ServiceData,
    "almacenamiento": almacenamientoCl as ServiceData,
    "distribucion": distribucionCl as ServiceData,
    "manufactura": manufacturaCl as ServiceData,
    "courier-express": courierCl as ServiceData,
    "valor-agregado": valorCl as ServiceData,
  },
};

export function useService(slug: ServiceSlug) {
  const { lang } = useParams();
  const language = lang ?? "en";

  const [data, setData] = useState<ServiceData | null>(null);

  useEffect(() => {
    const langData = serviceData[language] || serviceData["en"];
    const localeData = langData[slug];
    setData(localeData);
  }, [language, slug]);

  return data;
}
