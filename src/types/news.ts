export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  country: string;
  image?: string;
  excerpt?: string;
  content?: string;
}
