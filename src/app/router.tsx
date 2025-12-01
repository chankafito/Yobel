import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
//import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

import Home from "../pages/Home/Home";
//import Construction from "../pages/Construction/Construction";
import NotFound from "../pages/NotFound";

export default function AppRouter() {
  const basename = import.meta.env.VITE_BASE_URL || "/";

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        {/* Inglés default */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="nosotros" element={<Nosotros />} /> */}
          {/* <Route path="servicios" element={<Servicios />} /> */}
          {/* <Route path="contacto" element={<Contacto />} /> */}
          {/* 404 para rutas anidadas bajo '/' */}
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Multilenguaje parametrizado: '/:lang/*' */}
        <Route path="/:lang/*" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Rutas hijas multilanguage aquí */}
          {/* 404 para rutas anidadas bajo '/:lang/*' */}
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* 404 - Cualquier otra ruta */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
