import React, { useState } from "react";
import { Section } from "../../components/ui/section";
import { Container } from "../../components/ui/container";
import { BookForm } from "./sections/BookForm";
import { BookThank } from "./sections/BookThank";

import video from "/src/assets/videos/gris-desktop.mp4";


export function BookClaims() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Scroll to top to ensure user sees the success message
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsSubmitted(true);
  };

  return (
    <>
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden font-augenblick">
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
            <h1 className="text-5xl md:text-[65px] leading-[1] text-black max-w-[773px]">
              Libro de Reclamaciones
            </h1>
            <p className="text-xl md:text-[22px] leading-[24px] text-black max-w-2xl pt-2 font-light">
              Conforme a lo establecido en el Código de Protección y Defensa del Consumidor, ponemos a tu disposición este canal para que puedas registrar tus quejas o reclamos.
            </p>
          </div>
        </div>
      </div>
      <Section className="bg-white py-16 md:py-24">
        <Container>
          {isSubmitted ? (
            <BookThank />
          ) : (
            <div className="max-w-4xl mx-auto">
              <form className="space-y-12" onSubmit={handleSubmit}>
                <BookForm />
              </form>
            </div>

          )}
        </Container>
      </Section>
      
    </>
  );
}
