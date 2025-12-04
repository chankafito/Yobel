import { useEffect } from "react";
import { Section } from "../../components/ui/section";
import { Container } from "../../components/ui/container";
import { Button } from "../../components/atoms";
import { ParallaxCurves, Phrase, IndustriesCarousel } from "../../components/organisms";
import { HeroGradientTall } from "../../components/ui/HeroGradientTall";
import { InteractiveList } from "../../components/ui/InteractiveList";
import { BenefitsSection } from "../../components/ui/BenefitsSection";
import { SolutionsShowcase } from "../../components/ui/SolutionsShowcase";
import { ResultsGrid } from "../../components/ui/ResultsGrid";
import { Certificates } from "../../components/ui/Certificates";
import { yobelIcon } from "../../assets/svg/icons";
import { useIndustry } from "../../hooks/useIndustry";
import type { IndustrySlug } from "../../types/industry";

function YobelIcon() {
  return (
    <svg
      width="48"
      height="46"
      viewBox="0 0 48 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={yobelIcon} fill="black" />
    </svg>
  );
}

interface IndustryPageProps {
  slug: IndustrySlug;
}

export function IndustryPage({ slug }: IndustryPageProps) {
  const data = useIndustry(slug);

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  // Loading state
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Cargando...</div>
      </div>
    );
  }

  const { hero, intro, solutions, benefits, useCases, results, certificates } = data;

  return (
    <div className="bg-white">
      {/* Hero Section with Gradient */}
      <HeroGradientTall
        category={hero.category}
        title={hero.title}
        description={hero.description}
        variant={hero.variant}
      />

      {/* Intro Section */}
      <Section>
        <Container>
          <div className="max-w-[1200px] mx-auto my-20 text-center">
            <div className="mb-8 flex justify-center">
              <YobelIcon />
            </div>

            <h2 className="text-[32px] md:text-[48px] leading-[1.2] font-normal mb-16 max-w-[1000px] mx-auto tracking-tight text-black">
              {intro.text}
            </h2>

            <div className="flex justify-center">
              <Button>{intro.cta}</Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Parallax Curves Decoration */}
      <ParallaxCurves />

      {/* Solutions Section */}
      <InteractiveList items={solutions.items} title={solutions.title} />

      {/* Benefits Section */}
      <Section className="py-20">
        <Container>
          <BenefitsSection
            title={benefits.title}
            image={benefits.image}
            imageAlt="Beneficios"
            benefits={benefits.items}
          />
        </Container>
      </Section>

      {/* Use Cases Section */}
      <SolutionsShowcase
        label={useCases.label}
        title={useCases.title}
        solutions={useCases.items}
        imageUrl={useCases.image}
        imageAlt={hero.title}
      />

      {/* Results Section */}
      <ResultsGrid
        label={results.label}
        title={results.title}
        items={results.items}
      />

      {/* Phrase Section */}
      <Phrase />

      {/* Industries Carousel */}
      <IndustriesCarousel />

      {/* Certifications Section */}
      <Certificates description={certificates.description} />
    </div>
  );
}

export default IndustryPage;
