import { motion, MotionValue } from "framer-motion";

interface PhraseProps {
  text?: string;
  textColor?: MotionValue<string>; 
}

export function Phrase({ text, textColor }: PhraseProps) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-32 lg:py-40">
        <div className="flex flex-col items-center gap-8 md:gap-10 text-center">
          {/* Icon */}
          <motion.div 
            className="flex flex-col items-center gap-8 md:gap-10 text-center"
            initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="shrink-0">
              <div className="relative w-[41px] h-10 shrink-0">
                <motion.div className="absolute inset-0">
                  <svg className="block size-full" fill="none" viewBox="0 0 40 40">
                    <motion.path 
                      d="M0 39.9994V26.6769C0 26.6769 30.2009 13.2457 30.2009 7.57849C30.2009 4.03566 0 13.0881 0 13.0881V0H29.2309C41.0219 0 39.9763 6.48408 39.9763 12.9799V40H20.3629C20.3629 40 33.4793 18.1638 30.2009 18.1638C25.4049 18.1638 0 39.9994 0 39.9994Z"
                      style={{ fill: textColor || "#000" }}
                    />
                  </svg>
                </motion.div>
              </div>
            </div>

            {/* Text */}
            <motion.p 
              className="text-2xl md:text-3xl lg:text-[40px] leading-relaxed lg:leading-[1.2] font-light max-w-[1100px]"
              style={{ color: textColor || "#000" }}
            >
              {text}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}