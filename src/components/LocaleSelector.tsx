import { useNavigate, useLocation } from 'react-router-dom';
import { useLocale } from '../hooks/useLocale';

const languages = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
];

const countries = [
  { code: 'pe', name: 'Perú', flag: '🇵🇪' },
  { code: 'cl', name: 'Chile', flag: '🇨🇱' },
  { code: 'co', name: 'Colombia', flag: '🇨🇴' },
  { code: 'mx', name: 'México', flag: '🇲🇽' },
];

export function LocaleSelector() {
  const { lang, country } = useLocale();
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname
    .replace(`/${lang}/${country}`, '')
    .replace(`/${lang}`, '')
    .replace('/', '');

  const handleLanguageChange = (newLang: string) => {
    const newPath = currentPath ? `/${newLang}/${country}/${currentPath}` : `/${newLang}/${country}`;
    navigate(newPath);
  };

  const handleCountryChange = (newCountry: string) => {
    const newPath = currentPath ? `/${lang}/${newCountry}/${currentPath}` : `/${lang}/${newCountry}`;
    navigate(newPath);
  };

  return (
    <div className="flex gap-3">
      {/* Selector de idioma */}
      <select 
        value={lang} 
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
      >
        {languages.map((l) => (
          <option key={l.code} value={l.code}>
            {l.flag} {l.name}
          </option>
        ))}
      </select>

      {/* Selector de país */}
      <select 
        value={country} 
        onChange={(e) => handleCountryChange(e.target.value)}
        className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
      >
        {countries.map((c) => (
          <option key={c.code} value={c.code}>
            {c.flag} {c.name}
          </option>
        ))}
      </select>
    </div>
  );
}
