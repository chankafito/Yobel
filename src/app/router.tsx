import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import GlobalPresence from "../pages/About/GlobalPresence";
import History from "../pages/About/History";

import { ServicePage } from "../pages/Services/ServicePage";
import { IndustryPage } from "../pages/Industries/IndustryPage";
import NotFound from "../pages/NotFound";

export default function AppRouter() {
  const basename = import.meta.env.VITE_BASE_URL || "/";

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        {/* Rutas default */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="empresa/sobre-nosotros" element={<About />} />
          <Route path="empresa/presencia-global" element={<GlobalPresence />} />
          <Route path="empresa/historia" element={<History />} />
          {/* Servicios */}
          <Route path="servicios/comercio-exterior" element={<ServicePage key="comercio-exterior" slug="comercio-exterior" />} />
          <Route path="servicios/almacenamiento" element={<ServicePage key="almacenamiento" slug="almacenamiento" />} />
          <Route path="servicios/distribucion" element={<ServicePage key="distribucion" slug="distribucion" />} />
          <Route path="servicios/manufactura" element={<ServicePage key="manufactura" slug="manufactura" />} />
          <Route path="servicios/courier-express" element={<ServicePage key="courier-express" slug="courier-express" />} />
          <Route path="servicios/valor-agregado" element={<ServicePage key="valor-agregado" slug="valor-agregado" />} />
          {/* Industrias */}
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
          {/* 404 para rutas anidadas bajo '/' */}
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Multilenguaje parametrizado: '/:lang/*' */}
        <Route path="/:lang/*" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="empresa/sobre-nosotros" element={<About />} />
          <Route path="empresa/presencia-global" element={<GlobalPresence />} />
          <Route path="empresa/historia" element={<History />} />
          {/* Servicios */}
          <Route path="servicios/comercio-exterior" element={<ServicePage key="comercio-exterior" slug="comercio-exterior" />} />
          <Route path="servicios/almacenamiento" element={<ServicePage key="almacenamiento" slug="almacenamiento" />} />
          <Route path="servicios/distribucion" element={<ServicePage key="distribucion" slug="distribucion" />} />
          <Route path="servicios/manufactura" element={<ServicePage key="manufactura" slug="manufactura" />} />
          <Route path="servicios/courier-express" element={<ServicePage key="courier-express" slug="courier-express" />} />
          <Route path="servicios/valor-agregado" element={<ServicePage key="valor-agregado" slug="valor-agregado" />} />
          {/* Industrias */}
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
          {/* 404 para rutas anidadas bajo '/:lang/*' */}
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* 404 - Cualquier otra ruta */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
