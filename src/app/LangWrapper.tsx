import { useEffect } from "react";
import { useParams } from "react-router-dom";
import i18n from "./i18n";

const VALID_LANGUAGES = ["en", "es" ];

interface LangWrapperProps {
  children: React.ReactNode;
}

export default function LangWrapper({ children }: LangWrapperProps) {
  const params = useParams();
  const routeLang = params.lang || "en";

  useEffect(() => {
    const detected = VALID_LANGUAGES.includes(routeLang) ? routeLang : "en";
    i18n.changeLanguage(detected);
  }, [routeLang]);

  return <>{children}</>;
}
