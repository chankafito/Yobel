import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Section } from "../../../components/ui/section";
import { Container } from "../../../components/ui/container";
import { ScrollRevealString } from "../../../components/ui/scroll-reveal-text";
import { ChevronDown } from "lucide-react";
import { useLocations } from "../../../hooks/useLocations";
import { AmericasMap } from "../../../components/AmericasMap";
import { CountryTimeHeader } from "../../../components/CountryTimeHeader";
import { LocationCard } from "../../../components/LocationCard";

import { ContactModal } from "../../../components/ui/ContactModal";
import { ButtonGradient } from "../../../components/atoms/ButtonGradient";

export function SectionMaps() {
  const { t } = useTranslation();

  const locations = useLocations();
  const [selectedCountry, setSelectedCountry] = useState<string>(locations[0]?.slug || "peru");
  const [scrollIndex, setScrollIndex] = useState<number>(0);
  const officesRef = useRef<HTMLDivElement>(null);

  // Buscar el grupo de locaciones del país seleccionado
  const currentLocationGroup = locations.find(group => group.slug === selectedCountry);
  const currentLocations = currentLocationGroup?.items || [];
  const countryName = currentLocationGroup?.name || "";

  // Construir availableCountries desde locations (mapear a formato esperado por CountryTimeHeader)
  const availableCountries = locations.map(group => ({
    value: group.slug,
    label: group.name
  }));

  const scrollToOffices = () => {
    if (window.innerWidth < 1024 && officesRef.current) {
      officesRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start'
      });
    }
  };

  return (
    <>
    <Section className="bg-white pt-24 md:pt-32" data-section="locations">
      <Container>
        <div className="mb-8 lg:mb-16">
          <ScrollRevealString 
            text={t('global.maps.title')}
            as="h2"
            className="text-4xl md:text-5xl font-augenblick font-normal mb-6 leading-tight text-black max-w-2xl"
          />
          <p className="text-lg text-gray-500 font-light max-w-md mb-6"> {t('global.maps.description')} </p>
          <div className="lg:hidden max-w-md">
            <div className="relative">
              <select
                   value={selectedCountry}
                   onChange={(e) => {
                     setSelectedCountry(e.target.value);
                     setScrollIndex(0);
                     setTimeout(scrollToOffices, 100);
                   }}
                   className="w-full appearance-none bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 pr-12 text-lg text-black font-medium focus:outline-none focus:border-yellow-500 transition-colors cursor-pointer hover:border-gray-300"
                 >
                   {locations.map((group) => (
                     <option key={group.slug} value={group.slug}>
                       {group.name}
                     </option>
                   ))}
                 </select>
                 <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 mb-20">
          <div className="lg:w-3/5 min-h-[600px] flex items-center justify-center lg:sticky lg:top-8 lg:self-start">
            <AmericasMap 
                onSelect={(country) => {
                  setSelectedCountry(country);
                  setScrollIndex(0);
                  setTimeout(scrollToOffices, 100);
                }}
                selected={selectedCountry}
                className="w-full max-w-[700px] mx-auto"
              />
          </div>
          <div className="lg:w-2/5" ref={officesRef}>
            <CountryTimeHeader 
              country={countryName}
              timezone={currentLocations[0]?.timezone || "America/Lima"}
              availableCountries={availableCountries}
              selectedCountry={selectedCountry}
              onCountryChange={(country) => {
                setSelectedCountry(country);
                setScrollIndex(0);
              }}
            />
            <div className="max-h-[800px] overflow-y-auto pr-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" >
              <div className="space-y-8" key={selectedCountry}>
                {currentLocations.map((location, idx) => (
                  <div
                    key={idx}
                    className="animate-in fade-in-blur"
                    style={{ 
                      animationDelay: `${idx * 150}ms`
                    }}
                  >
                    <LocationCard 
                      city={location.city}
                      email={location.email}
                      phone={location.phone}
                      address={location.address}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-augenblick mb-4 text-black">{t('global.contact.title')}</h3>
            <p className="text-black/60 leading-relaxed text-lg md:text-xl">
              {t('global.contact.description')}
            </p>
          </div>
          
          <div className="w-full md:w-auto shrink-0">
            <ContactModal 
              trigger={
                <ButtonGradient className="w-full md:w-auto hover:!border-transparent"> {t('contact_now')} </ButtonGradient>
              }
            />
          </div>
        </div>

      </Container>
    </Section>
    </>
  );
}