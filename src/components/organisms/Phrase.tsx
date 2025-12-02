import React from "react";
import { yobelIconAlt } from "../../assets/svg/icons";
import { cn } from "../../utils/cn";

interface PhraseProps {
  primaryText?: string;
  secondaryText?: string;
  className?: string;
}

function YobelIcon() {
  return (
    <div className="h-[60px] relative shrink-0 w-[93px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 93 60"
      >
        <path d={yobelIconAlt} fill="black" />
      </svg>
    </div>
  );
}

export function Phrase({
  primaryText = "Impulsamos tu negocio:",
  secondaryText = "De emprendedores a grandes corporaciones, nuestras soluciones se adaptan a tu industria y metas.",
  className,
}: PhraseProps) {
  return (
    <div className={cn("relative size-full bg-white", className)}>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-center justify-center px-[20px] md:px-[50px] py-[80px] md:py-[120px] relative size-full">
          <YobelIcon />
          <div className="relative shrink-0 w-full">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="box-border content-stretch flex flex-col gap-[32px] items-center justify-center px-4 md:px-[112px] py-0 relative w-full">
                <p className="font-augenblick leading-[1.2] md:leading-[48px] not-italic relative shrink-0 text-[32px] md:text-[45px] text-[rgba(73,73,73,0.5)] text-center w-full">
                  {primaryText}
                </p>
                <div className="relative shrink-0 w-full">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-4 md:px-[50px] py-0 relative w-full">
                      <p className="basis-0 font-augenblick grow leading-[1.2] md:leading-[48px] min-h-px min-w-px not-italic relative shrink-0 text-[32px] md:text-[45px] text-black text-center">
                        {secondaryText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
