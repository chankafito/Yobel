import { Section } from "../../../components/ui/section";
import { Container } from "../../../components/ui/container";
import { useFaqs } from "../../../hooks/useFaqs";
import { FaqItem } from "../../../components/Faqs/FaqItem";
import type { FaqItem as FaqItemType } from "../../../types/faqs";
import { useTranslation } from 'react-i18next';

interface FAQProps {
  items?: FaqItemType[];
  className?: string;
}

export function Faqs({ items, className }: FAQProps) {
  const { t } = useTranslation();
  const faqsFromHook = useFaqs();
  const faqs = items ?? faqsFromHook;

  return (
    <Section className={`relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#31CDFF] ${className}`}>
      <Container className="relative z-10 flex flex-col lg:flex-row gap-20 items-start">
        <div className="lg:w-1/3 sticky top-24">
          <h2 className="text-4xl md:text-[45px] leading-tight text-black">
            {t('home.faqs.title')}
          </h2>
        </div>
        <div className="lg:w-2/3 w-full">
          {faqs.map((faq, idx) => (
            <FaqItem key={idx} {...faq} />
          ))}
        </div>
      </Container>
    </Section>
  );
}