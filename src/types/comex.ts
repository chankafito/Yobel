export interface ComexSolution {
  title: string;
  desc: string;
}

export interface ComexProcess {
  title: string;
  desc: string;
}

export interface ComexFAQ {
  question: string;
  answer: string;
}

export interface ComexData {
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
    items: ComexSolution[];
  };
  benefits: {
    title: string;
    subtitle: string;
    items: string[];
    image: string;
  };
  processes: {
    subtitle: string;
    title: string;
    label: string;
    items: ComexProcess[];
  };
  faq: {
    title: string;
    items: ComexFAQ[];
  };
  images: {
    hero: string;
    logistics: string;
    hover: string;
  };
}
