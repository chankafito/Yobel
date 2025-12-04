import { ParallaxImage } from "../molecules/ParallaxImage";

interface BenefitsSectionProps {
  label?: string;
  image: string;
  imageAlt: string;
  title: string;
  benefits: string[];
  yValues?: [number, number];
}

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 6L9 17L4 12"
        stroke="black"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BenefitsSection({
  label = "Beneficios",
  image,
  imageAlt,
  title,
  benefits,
  yValues = [-200, 0],
}: BenefitsSectionProps) {
  return (
    <div className="my-20">
      {/* Mobile layout: título → imagen → lista */}
      <div className="lg:hidden flex flex-col">
        <span className="text-gray-400 text-lg mb-6 block font-augenblick">
          {label}
        </span>
        <h3 className="text-[32px] md:text-[42px] leading-[1.1] font-normal mb-10 text-black tracking-tight max-w-xl font-augenblick">
          {title}
        </h3>

        <div className="mb-10">
          <ParallaxImage src={image} alt={imageAlt} yValues={yValues} />
        </div>

        <ul className="flex flex-col w-full">
          {benefits.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-6 py-6 border-b border-gray-100 last:border-0"
            >
              <div className="mt-1.5 shrink-0">
                <CheckIcon />
              </div>
              <span className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop layout: 2 columnas */}
      <div className="hidden lg:grid grid-cols-2 gap-20">
        <div className="flex flex-col relative z-0">
          <span className="text-gray-400 text-lg mb-20 block font-augenblick relative z-10">
            {label}
          </span>
          <ParallaxImage src={image} alt={imageAlt} yValues={yValues} />
        </div>

        <div className="flex flex-col pt-0 relative z-10">
          <h3 className="text-[32px] md:text-[42px] leading-[1.1] font-normal mb-20 text-black tracking-tight max-w-xl font-augenblick">
            {title}
          </h3>

          <ul className="flex flex-col w-full">
            {benefits.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-6 py-6 border-b border-gray-100 last:border-0"
              >
                <div className="mt-1.5 shrink-0">
                  <CheckIcon />
                </div>
                <span className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
