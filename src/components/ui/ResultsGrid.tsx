import { Fragment } from "react";
import { Section } from "./section";
import { Container } from "./container";

interface ResultItem {
  highlight: string;
  normal: string;
}

interface ResultsGridProps {
  label: string;
  title: string;
  items: ResultItem[];
  className?: string;
}

function CheckIcon() {
  return (
    <svg
      className="w-[40px] h-[40px]"
      fill="none"
      viewBox="0 0 40 40"
    >
      <path
        d="M33.332 10L14.9987 28.3333L6.66536 20"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function ResultsGrid({
  label,
  title,
  items,
  className = "",
}: ResultsGridProps) {
  const firstRow = items.slice(0, 2);
  const secondRow = items.slice(2, 4);

  return (
    <Section className={`bg-white ${className}`}>
      <Container>
        <div className="flex flex-col gap-[40px] md:gap-[120px] py-[80px] md:py-[120px]">
          {/* Title Section */}
          <div className="flex flex-col md:flex-row gap-[40px] md:gap-[133px] items-start w-full">
            <p className="font-augenblick leading-[24px] text-[24px] text-gray-400 w-full md:w-[40%]">
              {label}
            </p>
            <div className="flex gap-[20px] items-start w-full md:w-[60%]">
              <p className="font-augenblick leading-[48px] text-[32px] md:text-[45px] text-black w-full">
                {title}
              </p>
            </div>
          </div>

          {/* Content with left spacer and right grid */}
          <div className="flex flex-col md:flex-row gap-[40px] md:gap-[133px] items-start w-full">
            {/* Left spacer (hidden on mobile) */}
            <div className="hidden md:block h-[347px] shrink-0 w-[40%]" />

            {/* Grid Cards - Right Column */}
            <div className="flex flex-col gap-[8px] items-start w-full md:w-[60%]">
              {/* First Row */}
              {firstRow.length > 0 && (
                <div className="flex flex-col md:flex-row gap-[8px] md:gap-[16px] items-stretch w-full">
                  {firstRow.map((item, idx) => (
                    <Fragment key={idx}>
                      <div className="basis-0 flex flex-col gap-[24px] md:gap-[48px] grow items-start px-0 py-[40px] border-b border-gray-200">
                        <div className="hidden md:block shrink-0">
                          <CheckIcon />
                        </div>
                        <p className="font-augenblick leading-[24px] text-[20px] md:text-[22px] text-gray-400">
                          <span>{item.highlight} </span>
                          <span className="text-black">{item.normal}</span>
                        </p>
                      </div>

                      {idx < firstRow.length - 1 && (
                        <div className="hidden md:flex h-auto shrink-0 w-px bg-gray-200" />
                      )}
                    </Fragment>
                  ))}
                </div>
              )}

              {/* Second Row */}
              {secondRow.length > 0 && (
                <div className="flex flex-col md:flex-row gap-[8px] md:gap-[16px] items-stretch w-full">
                  {secondRow.map((item, idx) => (
                    <Fragment key={idx}>
                      <div className="basis-0 flex flex-col gap-[24px] md:gap-[48px] grow items-start px-0 py-[40px] border-b border-gray-200">
                        <div className="hidden md:block shrink-0">
                          <CheckIcon />
                        </div>
                        <p className="font-augenblick leading-[24px] text-[20px] md:text-[22px] text-gray-400">
                          <span>{item.highlight} </span>
                          <span className="text-black">{item.normal}</span>
                        </p>
                      </div>

                      {idx < secondRow.length - 1 && (
                        <div className="hidden md:flex h-auto shrink-0 w-px bg-gray-200" />
                      )}
                    </Fragment>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
