import React, { useState } from "react";
import { Section } from "../ui/section";
import { Container } from "../ui/container";
import { FAQItem, type FAQItemData } from "../molecules/FAQItem";
import { cn } from "../../utils/cn";

interface FAQProps {
  items: FAQItemData[];
  title?: string;
  className?: string;
}

export function FAQ({
  items,
  title = "¿Tienes algunas preguntas? Encuentra tu respuesta",
  className,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section
      className={cn(
        "relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#31CDFF]",
        className
      )}
    >
      <Container className="relative z-10 flex flex-col lg:flex-row gap-20 items-start">
        <div className="lg:w-1/3 sticky top-24">
          <h2 className="text-4xl md:text-[45px] leading-tight text-black font-[Neue_Augenblick]">
            {title}
          </h2>
        </div>
        <div className="lg:w-2/3 w-full">
          {items.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export type { FAQItemData };
