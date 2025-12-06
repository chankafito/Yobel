import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importar archivos de traducción explícitamente
import enCommon from "../locales/en/common.json";
import enHeader from "../locales/en/header.json";
import enFooter from "../locales/en/footer.json";
import enHome from "../locales/en/home.json";
import enAbout from "../locales/en/about.json";
import enGlobal from "../locales/en/global.json";
import enNews from "../locales/en/news.json";
import enEthics from "../locales/en/ethics.json";

import esCommon from "../locales/es/common.json";
import esHeader from "../locales/es/header.json";
import esFooter from "../locales/es/footer.json";
import esHome from "../locales/es/home.json";
import esAbout from "../locales/es/about.json";
import esGlobal from "../locales/es/global.json";
import esNews from "../locales/es/news.json";
import esEthics from "../locales/es/ethics.json";

// Merge de traducciones por idioma
const resources = {
  en: {
    translation: {
      ...enCommon,
      ...enHeader,
      ...enFooter,
      ...enHome,
      ...enAbout,
      ...enGlobal,
      ...enNews,
      ...enEthics
    },
  },
  es: {
    translation: {
      ...esCommon,
      ...esHeader,
      ...esFooter,
      ...esHome,
      ...esAbout,
      ...esGlobal,
      ...esNews,
      ...esEthics
    },
  }
};

const segments = window.location.pathname.split("/"); 
const urlLang = segments[1] || "es";

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "es",
  interpolation: { escapeValue: false },
  lng: urlLang,
});

export default i18n;
