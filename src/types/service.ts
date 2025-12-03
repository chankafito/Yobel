export interface ServiceSolution {
  title: string;
  desc: string;
}

export interface ServiceProcess {
  title: string;
  desc: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  hero: {
    label: string;
    title: string;
    subtitle: string;
    videoUrl: string;
  };
  pitch: {
    text: string;
    cta: string;
  };
  solutions: {
    title: string;
    ctaText: string;
    items: ServiceSolution[];
  };
  benefits: {
    title: string;
    subtitle: string;
    items: string[];
  };
  processes: {
    subtitle: string;
    title: string;
    label: string;
    items: ServiceProcess[];
  };
  faq: {
    title: string;
    items: ServiceFAQ[];
  };
}

// Service slugs mapping
export type ServiceSlug =
  | "comercio-exterior"
  | "almacenamiento"
  | "distribucion"
  | "manufactura"
  | "courier-express"
  | "valor-agregado";
