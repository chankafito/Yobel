export interface FaqItem {
  id?: string;
  question: string;
  answer: string;
  category?: string;
  [key: string]: any;
}
