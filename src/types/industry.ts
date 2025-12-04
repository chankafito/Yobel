export interface IndustrySolution {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface IndustryUseCase {
  id: string;
  title: string;
  fullDesc: string;
}

export interface IndustryResult {
  highlight: string;
  normal: string;
}

export interface IndustryData {
  hero: {
    category: string;
    title: string;
    description: string;
    variant: "yellow" | "cyan";
  };
  intro: {
    text: string;
    cta: string;
  };
  solutions: {
    title: string;
    items: IndustrySolution[];
  };
  benefits: {
    title: string;
    image: string;
    items: string[];
  };
  useCases: {
    label: string;
    title: string;
    image: string;
    items: IndustryUseCase[];
  };
  results: {
    label: string;
    title: string;
    items: IndustryResult[];
  };
  certificates: {
    description: string;
  };
}

export type IndustrySlug =
  | "industrial"
  | "belleza"
  | "farmaceutica"
  | "retail"
  | "alimentos-bebidas"
  | "tecnologia"
  | "moda"
  | "cuidado-hogar"
  | "quimicos"
  | "construccion"
  | "editorial";
