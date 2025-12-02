import { motion } from "framer-motion";

interface HeroVideoProps {
  video: string;
  name: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function HeroVideo({ video, name,  title, subtitle, className = "" }: HeroVideoProps) {

  return (
    <>
      <div className="relative h-[80vh] min-h-[600px] max-h-[920px] w-full overflow-hidden font-augenblick">
        <div className="absolute inset-0 overflow-hidden">
          <video 
            src={video}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />
        </div>

        <div className="absolute bottom-20 left-0 right-0 px-[5%] md:px-[50px] z-10">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-[30px]">
             <p className="text-lg md:text-[18px] text-black font-medium">{name}</p>
             <div className="flex flex-col lg:flex-row items-start gap-[40px]">
                <h1 className="text-5xl md:text-[65px] leading-[1] text-black max-w-[800px] tracking-tight"> {title} </h1>
                <p className="text-xl md:text-[22px] leading-[24px] text-black/80 max-w-[400px] pt-2 font-light"> {subtitle} </p>
             </div>
          </div>
        </div>
      </div>
    </>
  );
}
