// Utilidad para obtener el código del país según el nombre
export function getCountryCode(countryName: string): string {
  const countryMap: Record<string, string> = {
    "Perú": "PE",
    "Ecuador": "EC",
    "Colombia": "CO",
    "Panamá": "PA",
    "Costa Rica": "CR",
    "Rep. Dominicana": "DO",
    "El Salvador": "SV",
    "Guatemala": "GT",
    "México": "MX",
  };

  return countryMap[countryName] || "PE";
}
