export interface ServiceItem {
  id: string;
  title: string;
  description?: string;
  image?: string;
  // campos adicionales que puedan venir desde el JSON
  [key: string]: any;
}
