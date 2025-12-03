import { motion } from "framer-motion";

interface ImageBlockProps {
  image: string;
  alt?: string;
  mask?: string;
  heightClass?: string;
  className?: string;
}

export function ImageBlock({  image,  alt = "Image",  mask,  heightClass = "h-[500px] md:h-[700px] lg:h-[900px] xl:h-[1019px]", className = "" }: ImageBlockProps) {
  return (
    <motion.section 
      className={`relative w-full overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1] }}
    >
      <div className={`relative w-full ${heightClass}`}>
        <div 
          className="absolute inset-0 w-full h-full"
          style={mask ? { 
            maskImage: `url('${mask}')`,
            maskSize: "100% 100%",
            maskRepeat: "no-repeat",
            maskPosition: "center center",
            WebkitMaskImage: `url('${mask}')`,
            WebkitMaskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center center"
          } : undefined}
        >
          <img 
            alt={alt}
            className="w-full h-full object-cover" 
            src={image}
          />
        </div>
      </div>
    </motion.section>
  );
}
