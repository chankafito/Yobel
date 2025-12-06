import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../config/constants";

export default function LangSelector() {
  const { i18n } = useTranslation();
  const current = i18n.language;

  const handleChange = (code: string) => {
    i18n.changeLanguage(code);
  };

  return (
    <div className="flex gap-[32px]">
      {LANGUAGES.map(lang => {
        const selected = current === lang.code;

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
