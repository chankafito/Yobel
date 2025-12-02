import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { LocationGroup, LocationItem } from "../types/location";

// Importar JSON por idioma
import locationsEn from "../data/locales/en/locations.json";
import locationsEs from "../data/locales/es/locations.json";
import locationsCl from "../data/locales/cl/locations.json";

const locationsData: Record<string, LocationGroup[]> = {
  en: locationsEn as LocationGroup[],
  es: locationsEs as LocationGroup[],
  cl: locationsCl as LocationGroup[],
};

export function useLocations() {
  const { lang } = useParams();
  const language = lang ?? "en";

  const [locations, setLocations] = useState<LocationGroup[]>([]);

  useEffect(() => {
    const data = locationsData[language] || locationsData["en"];

    // Validación de estructura completa
    const validLocations = data
      .filter(
        (group): group is LocationGroup =>
          group &&
          typeof group === "object" &&
          typeof group.name === "string" &&
          typeof group.slug === "string" &&
          Array.isArray(group.items)
      )
      .map((group) => ({
        ...group,
        items: group.items.filter(
          (item): item is LocationItem =>
            item &&
            typeof item === "object" &&
            typeof item.city === "string" &&
            typeof item.country === "string" &&
            typeof item.email === "string" &&
            typeof item.phone === "string" &&
            typeof item.address === "string"
        ),
      }))
      .filter((group) => group.items.length > 0); // Solo grupos con items válidos

    setLocations(validLocations);
  }, [language]);

  return locations;
}