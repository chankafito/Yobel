import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importar archivos de traducción explícitamente
import enCommon from "../locales/en/common.json";
import enHeader from "../locales/en/header.json";
import enFooter from "../locales/en/footer.json";
import enHome from "../locales/en/home.json";

import esCommon from "../locales/es/common.json";
import esHeader from "../locales/es/header.json";
import esFooter from "../locales/es/footer.json";
import esHome from "../locales/es/home.json";

import clCommon from "../locales/cl/common.json";
import clHeader from "../locales/cl/header.json";
import clFooter from "../locales/cl/footer.json";
import clHome from "../locales/cl/home.json";

// Merge de traducciones por idioma
const resources = {
  en: {
    translation: {
      ...enCommon,
      ...enHeader,
      ...enFooter,
      ...enHome
    },
  },
  es: {
    translation: {
      ...esCommon,
      ...esHeader,
      ...esFooter,
      ...esHome
    },
  },
  cl: {
    translation: {
      ...clCommon,
      ...clHeader,
      ...clFooter,
      ...clHome
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  lng: "en",
});

export default i18n;
