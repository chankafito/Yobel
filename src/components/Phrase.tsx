interface PhraseProps {
  text?: string;
}
export function Phrase({  text }: PhraseProps) {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-32 lg:py-40">
        <div className="flex flex-col items-center gap-8 md:gap-10 text-center">
          {/* Icon */}
          <div className="shrink-0">
            <div className="relative w-[41px] h-10 shrink-0">
              <div className="absolute inset-0">
                <svg className="block size-full" fill="none" viewBox="0 0 40 40">
                  <path d="M0 39.9994V26.6769C0 26.6769 30.2009 13.2457 30.2009 7.57849C30.2009 4.03566 0 13.0881 0 13.0881V0H29.2309C41.0219 0 39.9763 6.48408 39.9763 12.9799V40H20.3629C20.3629 40 33.4793 18.1638 30.2009 18.1638C25.4049 18.1638 0 39.9994 0 39.9994Z" fill="black"></path>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Text */}
          <p className="text-2xl md:text-3xl lg:text-[40px] leading-relaxed lg:leading-[1.2] text-black font-['Neue_Augenblick'] font-light max-w-[1100px]"> {text} </p>
        </div>
      </div>
    </div>
  );
}