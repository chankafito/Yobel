import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import GlobalPresence from "../pages/About/GlobalPresence";
import History from "../pages/About/History";

import Comex from "../pages/Services/Comex";
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
          <Route path="servicios/comercio-exterior" element={<Comex />} />
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
          <Route path="servicios/comercio-exterior" element={<Comex />} />
          {/* 404 para rutas anidadas bajo '/:lang/*' */}
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* 404 - Cualquier otra ruta */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
