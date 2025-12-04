import { Section } from "./section";
import { Container } from "./container";
import { ImageWithFallback } from "./ImageWithFallback";

interface Solution {
  id: string;
  title: string;
  fullDesc: string;
}

interface SolutionsShowcaseProps {
  label?: string;
  title: string;
  solutions: Solution[];
  imageUrl: string;
  imageAlt?: string;
}

export function SolutionsShowcase({
  label = "Servicios",
  title,
  solutions,
  imageUrl,
  imageAlt = "Industry showcase",
}: SolutionsShowcaseProps) {
  return (
    <Section className="bg-white py-20">
      <Container>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2 items-start">
            <span className="text-xl text-gray-400 font-medium">{label}</span>
            <h3 className="text-3xl md:text-4xl font-normal mb-6">{title}</h3>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="w-full lg:w-1/2 flex flex-col gap-0 border-t border-black">
              {solutions.map((sol) => (
                <div key={sol.id} className="border-b border-black py-10">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-baseline mb-6">
                    <span className="text-3xl md:text-4xl font-light whitespace-nowrap">
                      {sol.id} /
                    </span>
                    <h3 className="text-3xl md:text-4xl font-light">
                      {sol.title}
                    </h3>
                  </div>
                  <div>
                    <p className="text-xl text-gray-600 font-light max-w-lg ml-0 md:ml-20">
                      {sol.fullDesc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full lg:w-1/2 relative h-[600px] rounded-[30px] overflow-hidden sticky top-8 hidden lg:block">
              <ImageWithFallback
                src={imageUrl}
                alt={imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
