import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layout/Layout";
import ScrollToTop from "../layout/ScrollToTop";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import GlobalPresence from "../pages/About/GlobalPresence";
import History from "../pages/About/History";
import Rates from "../pages/About/Rates";

import { ServicePage } from "../pages/Services/ServicePage";
import { IndustryPage } from "../pages/Industries/IndustryPage";

import { CodeOfEthics } from "../pages/Ethics/CodeOfEthics";

import { News } from "../pages/News/News";
import { NewDetail } from "../pages/News/NewDetail";

import { BookClaims } from "../pages/Legal/BookClaims";
import { TermsConditions } from "../pages/Legal/TermsConditions";
import { PrivacyPolicy } from "../pages/Legal/PrivacyPolicy";
import { CookiesPolicy } from "../pages/Legal/CookiesPolicy";

import { Contact } from "../pages/Contact/Contact";

import NotFound from "../pages/NotFound";

export default function AppRouter() {
  const basename = import.meta.env.VITE_BASE_URL || "/";

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <Routes>

        {/* 🔥 Redirección a idioma/país POR DEFECTO */}
        <Route path="/" element={<Navigate to="/es/pe/" replace />} />

        {/* 🔥 TODA LA WEB con idioma + país */}
        <Route path="/:lang/:country" element={<Layout />}>
          
          {/* Home */}
          <Route index element={<Home />} />
          

          {/* Empresa */}
          <Route path="empresa/sobre-nosotros" element={<About />} />
          <Route path="empresa/presencia-global" element={<GlobalPresence />} />
          <Route path="empresa/historia" element={<History />} />
          <Route path="tarifas" element={<Rates />} />

          {/* Servicios */}
          {/* <Route path="servicios/:slug" element={<ServicePage />} /> */}
          <Route path="servicios/comercio-exterior" element={<ServicePage key="comercio-exterior" slug="comercio-exterior" />} />
          <Route path="servicios/almacenamiento" element={<ServicePage key="almacenamiento" slug="almacenamiento" />} />
          <Route path="servicios/distribucion" element={<ServicePage key="distribucion" slug="distribucion" />} />
          <Route path="servicios/manufactura" element={<ServicePage key="manufactura" slug="manufactura" />} />
          <Route path="servicios/courier-express" element={<ServicePage key="courier-express" slug="courier-express" />} />
          <Route path="servicios/valor-agregado" element={<ServicePage key="valor-agregado" slug="valor-agregado" />} />

          {/* Industrias */}
          {/* <Route path="industrias/:slug" element={<IndustryPage />} /> */}
          <Route path="industrias/industrial" element={<IndustryPage key="industrial" slug="industrial" />} />
          <Route path="industrias/belleza" element={<IndustryPage key="belleza" slug="belleza" />} />
          <Route path="industrias/farmaceutica" element={<IndustryPage key="farmaceutica" slug="farmaceutica" />} />
          <Route path="industrias/retail" element={<IndustryPage key="retail" slug="retail" />} />
          <Route path="industrias/alimentos-bebidas" element={<IndustryPage key="alimentos-bebidas" slug="alimentos-bebidas" />} />
          <Route path="industrias/tecnologia" element={<IndustryPage key="tecnologia" slug="tecnologia" />} />
          <Route path="industrias/moda" element={<IndustryPage key="moda" slug="moda" />} />
          <Route path="industrias/cuidado-hogar" element={<IndustryPage key="cuidado-hogar" slug="cuidado-hogar" />} />
          <Route path="industrias/quimicos" element={<IndustryPage key="quimicos" slug="quimicos" />} />
          <Route path="industrias/construccion" element={<IndustryPage key="construccion" slug="construccion" />} />
          <Route path="industrias/editorial" element={<IndustryPage key="editorial" slug="editorial" />} />

          { /* Ethics */}
          <Route path="etica/codigo-de-etica" element={<CodeOfEthics />} />
          {/* News */}
          <Route path="noticias" element={<News />} />
          <Route path="noticias/:slug" element={<NewDetail />} />

          {/* Legal */}
          <Route path="libro-reclamaciones" element={<BookClaims />} />
          <Route path="terminos-y-condiciones" element={<TermsConditions />} />
          <Route path="politicas-de-privacidad" element={<PrivacyPolicy />} />
          <Route path="politicas-de-cookies" element={<CookiesPolicy />} />

          {/* Contacto */}
          <Route path="contacto" element={<Contact />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* 404 global */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}
