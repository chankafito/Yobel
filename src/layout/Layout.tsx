import { Outlet, useParams } from "react-router-dom";
import { useEffect } from "react";
import i18n from "../app/i18n";
import { Navbar } from "../components/Header/Navbar";
import NotFound from "../pages/NotFound";
import { FloatingMenu } from "../components/Footer/FloatingMenu";
import Footer from "../components/Footer/Footer";

const VALID_LANGUAGES = ["en", "es", "cl"];

/**
 * Layout principal de la aplicación
 * Maneja el cambio de idioma según la ruta
 * Componentes a implementar: Navbar, FloatingMenu, Footer
 */
export default function Layout() {
  const { lang } = useParams();

  useEffect(() => {
    const detected = lang && VALID_LANGUAGES.includes(lang) ? lang : "en";
    i18n.changeLanguage(detected);
  }, [lang]);

  // Si existe un lang en la ruta pero no es válido, mostramos 404
  if (lang && !VALID_LANGUAGES.includes(lang)) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen w-full bg-white relative">
      <Navbar />
      <FloatingMenu />

      <main className="flex flex-col w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
