import { CountdownTimer } from '../../components/CountdownTimer/CountdownTimer';
import { motion } from 'framer-motion';
import { DynamicIcon } from 'lucide-react/dynamic';
import BgVideo from "../../assets/gfx/fondo.mp4"

export default function Construction() {

  //const targetDate = new Date().getTime() + (15 * 24 * 60 * 60 * 1000);
  const targetDate = new Date('2025-12-11T23:59:59').getTime();
  return (
    <>
      <div className="min-h-screen bg-[#F0DE32] text-black overflow-x-hidden relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#F0DE32] opacity-90" />
            <video className="absolute top-0 left-0 w-full h-full object-cover" src={BgVideo} autoPlay loop muted playsInline />
        </div>
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full flex justify-center"
          >
            <div className="relative shrink-0 w-[200px] mb-12 md:mb-20">
              <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 94 36">
                <g id="Group 41">
                  <path d="M87.068 20.7141C87.0945 19.9325 87.0049 19.2744 86.8138 18.5347C85.8829 14.8852 82.5053 11.8455 78.1089 11.2155C72.4071 10.3989 67.2368 13.844 66.4764 18.8506C65.7155 23.8606 69.7391 28.2866 75.3471 29.3995C79.99 30.3212 84.3876 28.0993 86.4828 23.9088L81.5644 22.5346C80.9002 25.5518 79.9918 28.657 77.0784 28.657C73.7668 28.657 71.609 23.7733 71.5842 20.6957L87.068 20.7135V20.7141ZM76.2572 11.9822C79.3942 11.9816 81.3686 15.8637 81.7591 18.514L71.8143 18.5158C71.8143 15.2487 73.9042 11.9822 76.2578 11.9822H76.2572Z" fill="black" id="Vector"></path>
                  <path d="M41.8009 19.2119C41.2134 14.1387 36.0879 10.5409 30.3549 11.1709C24.6218 11.8008 20.4508 16.4221 21.0383 21.4918C21.6258 26.565 26.7507 30.1651 32.4843 29.5352C38.2174 28.9052 42.392 24.2822 41.8009 19.2119ZM34.5749 28.0794C34.2729 28.231 33.9077 28.3901 33.5691 28.4193C30.0334 28.7203 27.6107 24.8577 26.6115 21.9231C25.3114 18.107 25.8641 13.5673 28.7852 12.436C32.269 11.2375 35.219 15.3217 36.2442 18.428C37.4429 22.0586 37.2512 26.7361 34.5749 28.0794Z" fill="black" id="Vector_2"></path>
                  <path d="M6.88908 33.0627C6.88493 33.0396 6.88138 33.02 6.87723 32.9981C6.88434 33.0384 6.88908 33.0627 6.88908 33.0627Z" fill="black" id="Vector_3"></path>
                  <path d="M6.87823 32.9982C6.87586 32.9838 6.8729 32.967 6.86934 32.9486C6.87231 32.9653 6.87527 32.9809 6.87823 32.9982Z" fill="black" id="Vector_4"></path>
                  <path d="M20.5391 11.0992L13.7808 22.5779C13.313 22.2138 7.65784 11.0987 7.65784 11.0987H1.00162C2.19436 13.1213 8.01118 22.7456 10.0132 26.2504C11.0278 28.1588 10.5536 28.9432 9.87815 29.7553C8.115 31.8767 4.43237 29.5956 2.92758 28.47L0 33.4726C5.06413 36.615 8.76682 35.0421 11.5493 30.6288C12.8222 28.6096 22.9694 11.2606 23.0655 11.0998H20.5391V11.0992Z" fill="black" id="Vector_5"></path>
                  <path d="M92.4728 14.8032C92.4728 14.7527 92.4728 14.7016 92.4728 14.651C92.4728 7.60231 93.9976 0.043071 93.9976 0H87.5255C87.5255 0.0379025 89.0503 7.56384 89.0503 14.651C89.0503 14.7016 89.0503 14.7527 89.0503 14.8032C89.0503 14.8537 89.0503 14.9049 89.0503 14.9554C89.0503 22.0041 87.5237 29.5633 87.5237 29.6064H94C94 29.5685 92.4734 22.0426 92.4734 14.9554C92.4734 14.9049 92.4734 14.8537 92.4734 14.8032H92.4728Z" fill="black" id="Vector_6"></path>
                  <path d="M56.1838 11.5671C52.9872 10.8189 49.6314 11.3391 47.2524 13.0482L47.2341 13.1567C47.3998 6.50946 48.7507 0.0407738 48.7507 0H42.2437C42.2437 0.0379025 43.7768 7.36858 43.7768 14.4558C43.7768 14.5063 43.7768 14.5574 43.7768 14.6079C43.7768 14.6585 43.7768 14.7096 43.7768 14.7601C43.7768 15.4361 43.7626 16.1166 43.7373 16.7942H43.7697C43.7261 21.3092 43.5226 25.9362 43.1267 28.2655C43.1462 28.2764 46.0083 29.6064 51.7302 29.6064C57.452 29.6064 62.9415 27.504 64.1778 22.4486C65.4125 17.4007 61.9263 12.911 56.1849 11.5671H56.1838ZM58.8093 21.6119C57.882 25.1799 54.3894 29.8017 50.607 28.1701C48.5743 27.3897 47.5945 23.9727 48.5442 20.1808C49.5541 16.1482 53.1624 11.311 56.6055 12.7031C59.7366 13.7304 59.6422 18.4091 58.8093 21.6119Z" fill="black" id="Vector_7"></path>
                </g>
              </svg>
            </div>
          </motion.div>

          <div className="mb-20 md:mb-32 scale-110">
            <CountdownTimer targetDate={targetDate} />
          </div>

          <motion.div  initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} 
            className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-7xl w-full items-start md:items-end" >
          
            <div className="md:col-span-7 lg:col-span-8">
              <h1 className="text-[22px] md:text-[32px] lg:text-[36px] leading-[1.1] text-black font-normal tracking-tight uppercase mb-6 md:mb-10">
                <span className="italic"> El movimiento </span><br className="hidden md:block" />
                que <span >impulsa</span> tu negocio
              </h1>
            </div>

            <div className="md:col-span-5 lg:col-span-4 flex flex-col md:items-end gap-8">
              <p className="text-[16px] md:text-[18px] leading-relaxed text-black font-light max-w-xs md:text-right"> Soluciones de manufactura, almacenamiento, distribución y comercio exterior con cobertura en 9 países de la región. </p>
            </div>
          </motion.div>

          <motion.div  initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} 
            className="relative w-full max-w-7xl mx-auto mt-10 px-4" >
            
              
              <div className="flex flex-col items-center md:items-center md:py-5">
                <a
                  href="https://yobelscm.biz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-auto
                    inline-flex items-center justify-center
                    px-6 py-2 text-xs
                    md:px-10 md:py-4 md:text-base 
                    border border-black rounded-full 
                    text-black font-medium tracking-wider
                    hover:bg-black hover:text-white 
                    transition-all duration-300
                  "
                >
                  INGRESA A NUESTRA WEB ACTUAL AQUÍ
                </a>
              </div>

            <div className="flex gap-4 md:absolute md:top-0 md:right-0  md:flex-row mt-6 md:mt-0">
              <div className="flex flex-col md:items-end gap-3">
                <a href="mailto:acliente@yobel.biz" className="text-[16px] font-medium hover:underline"> acliente@yobel.biz </a>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/yobelglobal/" target="_blank" rel="noopener noreferrer" className="p-2 border border-black rounded-full hover:bg-black hover:text-[#F0DE32] transition-all">
                    <DynamicIcon name="facebook" strokeWidth={1.5} size={20} />
                  </a>
                  <a href="https://www.linkedin.com/company/yobel-global/" target="_blank" rel="noopener noreferrer" className="p-2 border border-black rounded-full hover:bg-black hover:text-[#F0DE32] transition-all">
                    <DynamicIcon name="linkedin" strokeWidth={1.5} size={20} />
                  </a>
                  <a href="https://www.instagram.com/yobelglobal/" target="_blank" rel="noopener noreferrer" className="p-2 border border-black rounded-full hover:bg-black hover:text-[#F0DE32] transition-all">
                    <DynamicIcon name="instagram" strokeWidth={1.5} size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
