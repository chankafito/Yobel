export async function detectCountry(): Promise<string> {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();

    const country = data.country_code?.toLowerCase();

    return country || "pe";
  } catch {
    return "pe";
  }
}
