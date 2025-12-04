interface HeroGradientTallProps {
  category: string;
  title: string;
  description: string;
  variant?: "yellow" | "cyan";
}

const gradients = {
  yellow:
    "linear-gradient(to bottom, #F0DE32 0%, #F7EE93 50%, #FEFBF0 85%, #FFFFFF 100%)",
  cyan:
    "linear-gradient(to bottom, #3DD0E3 0%, #8DE5F0 50%, #E5F9FC 85%, #FFFFFF 100%)",
};

export function HeroGradientTall({
  category,
  title,
  description,
  variant = "yellow",
}: HeroGradientTallProps) {
  return (
    <div
      className="relative h-[80vh] min-h-[600px] max-h-[920px] w-full overflow-hidden font-augenblick"
      style={{ background: gradients[variant] }}
    >
      <div className="relative h-full flex flex-col justify-end px-[5%] md:px-[50px] z-10 pt-[96px] pb-20">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[30px] w-full">
          <p className="text-lg md:text-[18px] text-black font-augenblick">
            {category}
          </p>
          <div className="flex flex-col lg:flex-row items-start gap-[40px] w-full">
            <h1 className="text-5xl md:text-[65px] leading-[1] text-black max-w-[700px] font-augenblick">
              {title}
            </h1>
            <p className="text-xl md:text-[22px] leading-[24px] text-black max-w-[400px] pt-2 font-augenblick">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
