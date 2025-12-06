import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../../../components/ui/button";

export function BookThank() {
  return(
    <>
      <div className="flex flex-col items-center justify-center py-12 md:py-20 px-4 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center shadow-xl">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>
        
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl md:text-5xl font-medium text-black font-augenblick mb-6"
        >
          ¡Gracias por enviar su reclamo!
        </motion.h2>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed"
        >
          Hemos recibido su información correctamente. Nuestro equipo revisará su caso y le atenderá a la brevedad posible. Se ha enviado una copia de los detalles a su correo electrónico.
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
            <Button 
              asChild
              className="bg-black text-white px-12 py-6 h-auto rounded-full text-lg font-medium hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Link to="/">Volver al inicio</Link>
            </Button>
        </motion.div>
      </div>

    </>
  )
}