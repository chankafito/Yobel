import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../config/constants";
import { useNavigate, useParams, useLocation } from "react-router-dom";

export default function LangSelector() {
  const { i18n } = useTranslation();
  const { lang, country } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const currentLang = lang || "es";

  // Obtener el path actual sin el prefijo de idioma/país
  const currentPath = location.pathname
    .replace(`/${lang}/${country}`, '')
    .replace(`/${lang}`, '')
    || '';

  const handleChange = (newLang: string) => {
    if (currentLang === newLang) return;

    i18n.changeLanguage(newLang);

    const currentCountry = country || 'pe';
    // Mantener la misma ruta al cambiar de idioma
    const newPath = `/${newLang}/${currentCountry}${currentPath}`;
    navigate(newPath);
  };

  return (
    <div className="flex gap-[32px]">
      {LANGUAGES.map(lang => {
        const selected = currentLang === lang.code;

        return (
          <div
            key={lang.code}
            className="content-stretch flex items-center px-0 py-[8px] relative shrink-0 cursor-pointer"
            onClick={() => handleChange(lang.code)}
          >
            <p
              className={`${selected 
                ? '[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline' 
                : ''
              } font-['Neue_Montreal:Regular',sans-serif] leading-[24px] not-italic shrink-0 text-[16px] text-black whitespace-pre hover:opacity-70 transition-opacity`}>
              {lang.label}
            </p>
          </div>
        );
      })}
    </div>


  );
}
