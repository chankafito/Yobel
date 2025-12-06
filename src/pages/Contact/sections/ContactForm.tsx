import React, { useState, useRef, useEffect } from "react";
import { Section } from "../../../components/ui/section";
import { Container } from "../../../components/ui/container";
import { useCountry } from "../../../contexts/CountryContext";
import { Button } from "../../../components/ui/button";

//import { ChevronDown, Mail, Phone, Linkedin, Instagram, Facebook, CheckCircle } from "lucide-react";
import { DynamicIcon } from 'lucide-react/dynamic';

interface Location {
  city: string;
  country: string;
  email: string;
  phone: string;
  address: string;
  imageUrl: string;
  timezone: string;
}

const locationsData: Record<string, Location[]> = {
  peru: [
    {
      city: "Los Olivos",
      country: "Perú",
      email: "comercial.pe@Yobel.biz",
      phone: "+51 1 618 5400",
      address: "Av. San Genaro 150, Urb. Molitalia, Los Olivos",
      imageUrl: "https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXJlaG91c2UlMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzY0NjUwOTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Lima"
    },
    {
      city: "Los Olivos",
      country: "Perú",
      email: "comercial.pe@Yobel.biz",
      phone: "+51 1 618 5400",
      address: "Calle San Andrés 6100, Urb. Molitalia, Los Olivos",
      imageUrl: "https://images.unsplash.com/photo-1717662292789-e97dfb7d3c88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjBjZW50ZXIlMjBleHRlcmlvcnxlbnwxfHx8fDE3NjQ2NjY3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Lima"
    },
    {
      city: "Lurín",
      country: "Perú",
      email: "comercial.pe@Yobel.biz",
      phone: "+51 1 618 5400",
      address: "Parcela 3-4, Los Eucaliptos, s/n Santa Genoveva, Lurín",
      imageUrl: "https://images.unsplash.com/photo-1761815139982-0876947bf09a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXN0cmlidXRpb24lMjBjZW50ZXIlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ2NjY3OTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Lima"
    }
  ],
  ecuador: [
    {
      city: "Guayaquil",
      country: "Ecuador",
      email: "comercial.ec@Yobel.biz",
      phone: "+593 4 263 4800",
      address: "Km 9.5 vía a Daule, Guayaquil",
      imageUrl: "https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXJlaG91c2UlMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzY0NjUwOTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Guayaquil"
    },
    {
      city: "Quito",
      country: "Ecuador",
      email: "comercial.ec@Yobel.biz",
      phone: "+593 2 398 3800",
      address: "Av. García Moreno Km 15.5, sector Llano Chico – Quito",
      imageUrl: "https://images.unsplash.com/photo-1650392131866-e4e2e06a0c78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY0NjY2Nzk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Guayaquil"
    }
  ],
  colombia: [
    {
      city: "Guarne, Antioquia",
      country: "Colombia",
      email: "comercial.col@Yobel.biz",
      phone: "+57 4 444 3200",
      address: "Vereda Garrido, A 1.5 km del, Batallón Juan del Corral, Guarne, Antioquia",
      imageUrl: "https://images.unsplash.com/photo-1704423846283-f92ff6badea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ2NDUwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Bogota"
    },
    {
      city: "Guarne, Antioquia",
      country: "Colombia",
      email: "comercial.col@Yobel.biz",
      phone: "+57 4 444 3200",
      address: "Vereda Berracal Retorno 9 Autopista Medellín Bogotá, Guarne, Antioquia",
      imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQ1NTc5MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Bogota"
    }
  ],
  panama: [
    {
      city: "Ciudad de Panamá",
      country: "Panamá",
      email: "comercial.pa@Yobel.biz",
      phone: "+507 200 0000",
      address: "Av. José Domingo Díaz, Parque Industrial Corporativo Sur - Panamá",
      imageUrl: "https://images.unsplash.com/photo-1704423846283-f92ff6badea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ2NDUwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Panama"
    },
    {
      city: "Ciudad de Panamá",
      country: "Panamá",
      email: "comercial.pa@Yobel.biz",
      phone: "+507 200 0000",
      address: "24 de diciembre, Parque Logistico Panamá",
      imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQ1NTc5MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Panama"
    }
  ],
  costa_rica: [
    {
      city: "Alajuela",
      country: "Costa Rica",
      email: "comercial.cr@Yobel.biz",
      phone: "+506 2000 0000",
      address: "Radial Coyol, parque logístico LATAM, bodega 100, Alajuela, Provincia de San José",
      imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQ1NTc5MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Costa_Rica"
    }
  ],
  rep_dominicana: [
    {
      city: "Santo Domingo",
      country: "República Dominicana",
      email: "comercial.rd@Yobel.biz",
      phone: "+1 809 500 0000",
      address: "Av. Prolongación 27 de Febrero casi esq. Autopista Duarte, Sector Alameda",
      imageUrl: "https://images.unsplash.com/photo-1704423846283-f92ff6badea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ2NDUwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Santo_Domingo"
    }
  ],
  el_salvador: [
    {
      city: "San Juan Opico",
      country: "El Salvador",
      email: "comercial.sv@Yobel.biz",
      phone: "+503 2500 0000",
      address: "Carretera Panamericana Km 26.10 San Juan Opico – San Salvador",
      imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQ1NTc5MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/El_Salvador"
    },
    {
      city: "Santa Tecla",
      country: "El Salvador",
      email: "comercial.sv@Yobel.biz",
      phone: "+503 2500 0000",
      address: "Carretera al Puerto de La Libertad, km 11, Block E Santa Tecla, La Libertad",
      imageUrl: "https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXJlaG91c2UlMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzY0NjUwOTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/El_Salvador"
    },
    {
      city: "Ciudad Arce",
      country: "El Salvador",
      email: "comercial.sv@Yobel.biz",
      phone: "+503 2500 0000",
      address: "Km 36 1/2 Carretera A Santa Ana. Zona Franca American Park. Ciudad Arce La Libertad",
      imageUrl: "https://images.unsplash.com/photo-1704423846283-f92ff6badea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ2NDUwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/El_Salvador"
    }
  ],
  guatemala: [
    {
      city: "CEDI Villa Lobos",
      country: "Guatemala",
      email: "comercial.gt@Yobel.biz",
      phone: "+502 2300 0000",
      address: "Calzada Aguilar Batres 57-61 zona 12",
      imageUrl: "https://images.unsplash.com/photo-1704423846283-f92ff6badea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ2NDUwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Guatemala"
    },
    {
      city: "CEDI ALGESA",
      country: "Guatemala",
      email: "comercial.gt@Yobel.biz",
      phone: "+502 2300 0000",
      address: "27 Avenida 33 – 85, Bodega #3, zona 12",
      imageUrl: "https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXJlaG91c2UlMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzY0NjUwOTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Guatemala"
    },
    {
      city: "CEDI CLEF",
      country: "Guatemala",
      email: "comercial.gt@Yobel.biz",
      phone: "+502 2300 0000",
      address: "23 calle 11-41 interior zona 5 Finca El Frutal, Villa Nueva",
      imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQ1NTc5MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Guatemala"
    },
    {
      city: "CEDI El Frutal",
      country: "Guatemala",
      email: "comercial.gt@Yobel.biz",
      phone: "+502 2300 0000",
      address: "1ra. Av. 20-77 zona 7, El Frutal, San Miguel Petapa",
      imageUrl: "https://images.unsplash.com/photo-1650392131866-e4e2e06a0c78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY0NjY2Nzk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Guatemala"
    },
    {
      city: "CEDI Los Álamos",
      country: "Guatemala",
      email: "comercial.gt@Yobel.biz",
      phone: "+502 2300 0000",
      address: "0 Avenida 7-83´Col. Los Álamos zona 6, San Miguel Petapa",
      imageUrl: "https://images.unsplash.com/photo-1717662292789-e97dfb7d3c88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjBjZW50ZXIlMjBleHRlcmlvcnxlbnwxfHx8fDE3NjQ2NjY3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Guatemala"
    },
    {
      city: "CEDI Distripark",
      country: "Guatemala",
      email: "comercial.gt@Yobel.biz",
      phone: "+502 2300 0000",
      address: "Parque logístico Distripark, Bodega D-4, Km.28.5 Carretera al Pacífico, Amatitlán",
      imageUrl: "https://images.unsplash.com/photo-1761815139982-0876947bf09a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXN0cmlidXRpb24lMjBjZW50ZXIlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ2NjY3OTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Guatemala"
    }
  ],
  mexico: [
    {
      city: "Estado de México",
      country: "México",
      email: "comercial.mx@Yobel.biz",
      phone: "+52 55 5000 0000",
      address: "Av. Tejocotes Lote 9 Interior Encino 1 Colonia San Martín Obispo, Estado de México",
      imageUrl: "https://images.unsplash.com/photo-1704423846283-f92ff6badea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ2NDUwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Mexico_City"
    }
  ]
};

const countries = [
  "Perú",
  "Colombia",
  "Costa Rica",
  "Ecuador",
  "El Salvador",
  "Guatemala",
  "México",
  "Panamá",
  "República Dominicana"
];

const services = [
  "Comercio Exterior",
  "Manufactura",
  "Servicio de Valor Agregado",
  "Almacenamiento",
  "Distribución",
  "Courier",
  "Otro"
];

export function ContactForm() {
  const { selectedCountry: globalSelectedCountry } = useCountry();
  
  const countryNameToId: Record<string, string> = {
    'Perú': 'peru',
    'Ecuador': 'ecuador',
    'Colombia': 'colombia',
    'Panamá': 'panama',
    'Costa Rica': 'costa_rica',
    'República Dominicana': 'rep_dominicana',
    'Rep. Dominicana': 'rep_dominicana',
    'El Salvador': 'el_salvador',
    'Guatemala': 'guatemala',
    'México': 'mexico'
  };
  
  const initialCountry = countryNameToId[globalSelectedCountry] || 'peru';
  const [selectedCountry, setSelectedCountry] = useState<string>(initialCountry);
  const [scrollIndex, setScrollIndex] = useState<number>(0);
  const officesRef = useRef<HTMLDivElement>(null);
  const mapSectionRef = useRef<HTMLDivElement>(null);

  // Form state
  const [isFocused, setIsFocused] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    country: globalSelectedCountry,
    phone: "",
    service: "",
    message: "",
    acceptCommunications: false,
    acceptDataStorage: false
  });

  const currentLocations = locationsData[selectedCountry] || locationsData["peru"];
  const currentEmail = currentLocations[0]?.email || "comercial.pe@Yobel.biz";
  const currentPhone = currentLocations[0]?.phone || "+51 1 618 5400";

  const countryDisplayNames: Record<string, string> = {
    'peru': 'Perú',
    'ecuador': 'Ecuador',
    'colombia': 'Colombia',
    'panama': 'Panamá',
    'costa_rica': 'Costa Rica',
    'rep_dominicana': 'Rep. Dominicana',
    'el_salvador': 'El Salvador',
    'guatemala': 'Guatemala',
    'mexico': 'México'
  };

  const countryName = countryDisplayNames[selectedCountry] || 'Perú';

  useEffect(() => {
    const newCountry = countryNameToId[globalSelectedCountry] || 'peru';
    setSelectedCountry(newCountry);
    setScrollIndex(0);
  }, [globalSelectedCountry]);

  // Sync form country field with global selected country
  useEffect(() => {
    setFormData(prev => ({ ...prev, country: globalSelectedCountry }));
  }, [globalSelectedCountry]);

  // Check for hash on mount and scroll to oficinas section
  useEffect(() => {
    const handleHashScroll = () => {
      if (window.location.hash === '#oficinas' && mapSectionRef.current) {
        // Use a longer delay to ensure everything is rendered
        const scrollToSection = () => {
          mapSectionRef.current?.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        };
        
        // Try multiple times with increasing delays
        setTimeout(scrollToSection, 300);
        setTimeout(scrollToSection, 600);
      }
    };

    // Run on mount
    handleHashScroll();

    // Also listen for hash changes
    window.addEventListener('hashchange', handleHashScroll);
    
    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, []);

  const scrollToOffices = () => {
    if (window.innerWidth < 1024 && officesRef.current) {
      officesRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start'
      });
    }
  };

  useEffect(() => {
    scrollToOffices();
  }, [selectedCountry]);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFocus = (field: string) => {
    setIsFocused(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string) => {
    setIsFocused(prev => ({ ...prev, [field]: false }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        company: "",
        email: "",
        country: globalSelectedCountry,
        phone: "",
        service: "",
        message: "",
        acceptCommunications: false,
        acceptDataStorage: false
      });
    }, 5000);
  };
  return (
    <>
    <Section className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Info */}
            <div className="space-y-8 order-2 lg:order-1">
              {/* Contact Details */}
              <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-normal mb-6 font-[Neue_Augenblick]">Contacto {countryName}</h3>
                    
                    {/* Email */}
                    <div className="flex items-start gap-3 mb-4">
                        <DynamicIcon name="mail" strokeWidth={1.5} size={20} className="text-black mt-1 shrink-0" />
                        
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Correo electrónico</p>
                          <a href={`mailto:${currentEmail}`} className="text-lg text-black hover:text-[#59c1e6] transition-colors">
                              {currentEmail}
                          </a>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3">
                        <DynamicIcon name="phone" strokeWidth={1.5} size={20} className="text-black mt-1 shrink-0" />
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Teléfono</p>
                          <a href={`tel:${currentPhone.replace(/\s/g, '')}`} className="text-lg text-black hover:text-[#59c1e6] transition-colors">
                              {currentPhone}
                          </a>
                        </div>
                    </div>
                  </div>

                  {/* International Contact */}
                  <div className="pt-6 border-t border-gray-200">
                    <h4 className="text-lg font-normal mb-4 font-[Neue_Augenblick]">Contacto Internacional</h4>
                    <div className="flex items-start gap-3 mb-4">
                        <DynamicIcon name="mail" strokeWidth={1.5} size={20} className="text-black mt-1 shrink-0" />
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Correo electrónico</p>
                          <a href="mailto:comercial@yobel.biz" className="text-lg text-black hover:text-[#59c1e6] transition-colors">
                              comercial@yobel.biz
                          </a>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <DynamicIcon name="phone" strokeWidth={1.5} size={20} className="text-black mt-1 shrink-0"/>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Teléfono</p>
                          <a href="tel:+5116185400" className="text-lg text-black hover:text-[#59c1e6] transition-colors">
                              +51 1 618 5400
                          </a>
                        </div>
                    </div>
                  </div>
              </div>

              {/* Social Media */}
              <div className="pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-normal mb-4 font-[Neue_Augenblick]">Síguenos</h4>
                  <div className="flex gap-4">
                    <a 
                        href="https://www.linkedin.com/company/yobel-scm" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                    >
                        <DynamicIcon name="linkedin" strokeWidth={1.5} size={20} />
                    </a>
                    <a 
                        href="https://www.instagram.com/yobelscm" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                    >
                        <DynamicIcon name="instagram" strokeWidth={1.5} size={20} />
                    </a>
                    <a 
                        href="https://www.facebook.com/YobelSCM" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                    >
                        <DynamicIcon name="facebook" strokeWidth={1.5} size={20} />
                    </a>
                  </div>
              </div>

              {/* Button to see other countries */}
              <div className="pt-6">
                  <Button 
                    onClick={() => {
                      mapSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="w-full bg-transparent border-[1.5px] border-black text-black px-8 py-6 rounded-full text-lg hover:bg-black hover:text-white transition-colors"
                  >
                    Ver contacto de otros países
                  </Button>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="order-1 lg:order-2">
              {!isSubmitted ? (
                  <div className="bg-white p-8 md:p-10 rounded-[40px] border border-gray-200">
                    <h3 className="text-3xl md:text-4xl font-normal mb-8 font-[Neue_Augenblick]">Contacta a un asesor</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Nombre y Apellidos */}
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                          <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
                              <span>Nombre y Apellidos </span>
                              <span className="text-[#59c1e6]">*</span>
                          </p>
                          <div className="box-border content-stretch flex gap-[20px] items-start px-0 py-[8px] relative w-full">
                              <div 
                                aria-hidden="true" 
                                className={`absolute border-[0px_0px_1.5px] border-solid bottom-[-0.75px] left-0 pointer-events-none right-0 top-0 transition-colors duration-300 ${
                                    isFocused.fullName ? 'border-[#59c1e6]' : 'border-black'
                                }`} 
                              />
                              <input
                                type="text"
                                value={formData.fullName}
                                onChange={(e) => handleInputChange('fullName', e.target.value)}
                                onFocus={() => handleFocus('fullName')}
                                onBlur={() => handleBlur('fullName')}
                                required
                                placeholder="Ingresa tu nombre completo"
                                className="basis-0 flex flex-col font-['Neue_Augenblick:Medium',sans-serif] grow justify-center leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[18px] text-black bg-transparent border-none outline-none w-full placeholder:text-[rgba(0,0,0,0.3)]"
                              />
                          </div>
                        </div>

                        {/* Empresa */}
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                          <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
                              <span>Empresa </span>
                              <span className="text-[#59c1e6]">*</span>
                          </p>
                          <div className="box-border content-stretch flex gap-[20px] items-start px-0 py-[8px] relative w-full">
                              <div 
                                aria-hidden="true" 
                                className={`absolute border-[0px_0px_1.5px] border-solid bottom-[-0.75px] left-0 pointer-events-none right-0 top-0 transition-colors duration-300 ${
                                    isFocused.company ? 'border-[#59c1e6]' : 'border-black'
                                }`} 
                              />
                              <input
                                type="text"
                                value={formData.company}
                                onChange={(e) => handleInputChange('company', e.target.value)}
                                onFocus={() => handleFocus('company')}
                                onBlur={() => handleBlur('company')}
                                required
                                placeholder="Nombre de tu empresa"
                                className="basis-0 flex flex-col font-['Neue_Augenblick:Medium',sans-serif] grow justify-center leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[18px] text-black bg-transparent border-none outline-none w-full placeholder:text-[rgba(0,0,0,0.3)]"
                              />
                          </div>
                        </div>

                        {/* Correo electrónico */}
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                          <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
                              <span>Correo electrónico corporativo </span>
                              <span className="text-[#59c1e6]">*</span>
                          </p>
                          <div className="box-border content-stretch flex gap-[20px] items-start px-0 py-[8px] relative w-full">
                              <div 
                                aria-hidden="true" 
                                className={`absolute border-[0px_0px_1.5px] border-solid bottom-[-0.75px] left-0 pointer-events-none right-0 top-0 transition-colors duration-300 ${
                                    isFocused.email ? 'border-[#59c1e6]' : 'border-black'
                                }`} 
                              />
                              <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                onFocus={() => handleFocus('email')}
                                onBlur={() => handleBlur('email')}
                                required
                                placeholder="nombre@empresa.com"
                                className="basis-0 flex flex-col font-['Neue_Augenblick:Medium',sans-serif] grow justify-center leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[18px] text-black bg-transparent border-none outline-none w-full placeholder:text-[rgba(0,0,0,0.3)]"
                              />
                          </div>
                        </div>

                        {/* País */}
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                          <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
                              País
                          </p>
                          <div className="box-border content-stretch flex gap-[20px] items-start px-0 py-[8px] relative w-full">
                              <div 
                                aria-hidden="true" 
                                className={`absolute border-[0px_0px_1.5px] border-solid bottom-[-0.75px] left-0 pointer-events-none right-0 top-0 transition-colors duration-300 ${
                                    isFocused.country ? 'border-[#59c1e6]' : 'border-black'
                                }`} 
                              />
                              <select
                                value={formData.country}
                                onChange={(e) => handleInputChange('country', e.target.value)}
                                onFocus={() => handleFocus('country')}
                                onBlur={() => handleBlur('country')}
                                className="basis-0 flex flex-col font-['Neue_Augenblick:Medium',sans-serif] grow justify-center leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[18px] text-black bg-transparent border-none outline-none w-full appearance-none cursor-pointer pr-8"
                              >
                                <option value="">Selecciona un país</option>
                                {countries.map((country) => (
                                    <option key={country} value={country}>{country}</option>
                                ))}
                              </select>
                              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                                    <path d="M1 1L6 6L11 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                          </div>
                        </div>

                        {/* Número de teléfono */}
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                          <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
                              Número de teléfono
                          </p>
                          <div className="box-border content-stretch flex gap-[20px] items-start px-0 py-[8px] relative w-full">
                              <div 
                                aria-hidden="true" 
                                className={`absolute border-[0px_0px_1.5px] border-solid bottom-[-0.75px] left-0 pointer-events-none right-0 top-0 transition-colors duration-300 ${
                                    isFocused.phone ? 'border-[#59c1e6]' : 'border-black'
                                }`} 
                              />
                              <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                onFocus={() => handleFocus('phone')}
                                onBlur={() => handleBlur('phone')}
                                placeholder="+51 999 999 999"
                                className="basis-0 flex flex-col font-['Neue_Augenblick:Medium',sans-serif] grow justify-center leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[18px] text-black bg-transparent border-none outline-none w-full placeholder:text-[rgba(0,0,0,0.3)]"
                              />
                          </div>
                        </div>

                        {/* Servicio de interés */}
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                          <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
                              Servicio de interés
                          </p>
                          <div className="box-border content-stretch flex gap-[20px] items-start px-0 py-[8px] relative w-full">
                              <div 
                                aria-hidden="true" 
                                className={`absolute border-[0px_0px_1.5px] border-solid bottom-[-0.75px] left-0 pointer-events-none right-0 top-0 transition-colors duration-300 ${
                                    isFocused.service ? 'border-[#59c1e6]' : 'border-black'
                                }`} 
                              />
                              <select
                                value={formData.service}
                                onChange={(e) => handleInputChange('service', e.target.value)}
                                onFocus={() => handleFocus('service')}
                                onBlur={() => handleBlur('service')}
                                className="basis-0 flex flex-col font-['Neue_Augenblick:Medium',sans-serif] grow justify-center leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[18px] text-black bg-transparent border-none outline-none w-full appearance-none cursor-pointer pr-8"
                              >
                                <option value="">Selecciona un servicio</option>
                                {services.map((service) => (
                                    <option key={service} value={service}>{service}</option>
                                ))}
                              </select>
                              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                                    <path d="M1 1L6 6L11 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                          </div>
                        </div>

                        {/* Mensaje */}
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                          <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
                              <span>Mensaje / Consulta </span>
                              <span className="text-[#59c1e6]">*</span>
                          </p>
                          <div className="box-border content-stretch flex gap-[20px] items-start px-0 py-[8px] relative w-full">
                              <div 
                                aria-hidden="true" 
                                className={`absolute border-[0px_0px_1.5px] border-solid bottom-[-0.75px] left-0 pointer-events-none right-0 top-0 transition-colors duration-300 ${
                                    isFocused.message ? 'border-[#59c1e6]' : 'border-black'
                                }`} 
                              />
                              <textarea
                                value={formData.message}
                                onChange={(e) => handleInputChange('message', e.target.value)}
                                onFocus={() => handleFocus('message')}
                                onBlur={() => handleBlur('message')}
                                required
                                rows={4}
                                placeholder="¿Cómo podemos ayudarte?"
                                className="basis-0 flex flex-col font-['Neue_Augenblick:Medium',sans-serif] grow justify-center leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[18px] text-black bg-transparent border-none outline-none w-full resize-none placeholder:text-[rgba(0,0,0,0.3)]"
                              />
                          </div>
                        </div>

                        {/* Checkboxes */}
                        <div className="space-y-6 pt-4">
                          <div>
                              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                Yobel se compromete a proteger y respetar tu privacidad, y solo usaremos tu información personal para administrar tu cuenta y proporcionar los productos y servicios que nos solicitaste. De vez en cuando, nos gustaría ponernos en contacto contigo acerca de nuestros productos y servicios, así como sobre otros contenidos que puedan interesarte. Si aceptas que nos comuniquemos contigo para este fin, marca la casilla a continuación para indicar cómo deseas que nos comuniquemos:
                              </p>
                              <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[8px] relative shrink-0 w-full">
                                <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                                    <div className="relative shrink-0 size-[32px]">
                                      <div className="absolute left-[4px] rounded-[4px] size-[24px] top-[4px]">
                                          <input
                                            type="checkbox"
                                            checked={formData.acceptCommunications}
                                            onChange={(e) => handleInputChange('acceptCommunications', e.target.checked)}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                          />
                                          <div aria-hidden="true" className="absolute border border-black border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
                                          {formData.acceptCommunications && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 20 20">
                                                  <path d="M4 10l4 4 8-8" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                                                </svg>
                                            </div>
                                          )}
                                      </div>
                                    </div>
                                    <p className="basis-0 font-['Neue_Augenblick:Medium',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[18px] text-black">
                                      Acepto recibir otras comunicaciones de Yobel.
                                    </p>
                                </div>
                              </div>
                          </div>

                          <div>
                              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                Para poder darte acceso al contenido solicitado, debemos almacenar y tratar tus datos personales. Si aceptas que almacenemos tus datos para este fin, marca la casilla que aparece abajo.
                              </p>
                              <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[8px] relative shrink-0 w-full">
                                <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                                    <div className="relative shrink-0 size-[32px]">
                                      <div className="absolute left-[4px] rounded-[4px] size-[24px] top-[4px]">
                                          <input
                                            type="checkbox"
                                            checked={formData.acceptDataStorage}
                                            onChange={(e) => handleInputChange('acceptDataStorage', e.target.checked)}
                                            required
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                          />
                                          <div aria-hidden="true" className="absolute border border-black border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
                                          {formData.acceptDataStorage && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 20 20">
                                                  <path d="M4 10l4 4 8-8" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                                                </svg>
                                            </div>
                                          )}
                                      </div>
                                    </div>
                                    <p className="basis-0 font-['Neue_Augenblick:Medium',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[18px] text-black">
                                      Acepto que Yobel almacene y trate mis datos personales. <span className="text-[#59c1e6]">*</span>
                                    </p>
                                </div>
                              </div>
                          </div>

                          <p className="text-sm text-gray-500 leading-relaxed">
                              Puedes darte de baja de estas comunicaciones en cualquier momento. Para obtener más información sobre cómo darte de baja, nuestras prácticas de privacidad y cómo nos comprometemos a proteger y respetar tu privacidad, consulta nuestra Política de privacidad.
                          </p>
                        </div>

                        <Button 
                          type="submit"
                          className="w-full bg-transparent border-[1.5px] border-black text-black px-8 py-6 rounded-full text-xl relative overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:bg-[linear-gradient(150deg,#FFF700_0%,#FFF700_32%,#FFE300_70%,#5dd3c0_100%)] before:opacity-0 before:transition-opacity before:duration-500 before:rounded-full hover:before:opacity-100 hover:border-0 font-[Neue_Augenblick]"
                        >
                          <span className="relative z-10">Enviar mensaje</span>
                        </Button>
                    </form>
                  </div>
              ) : (
                  // Success Message
                  <div className="bg-white p-8 md:p-10 rounded-[40px] border border-gray-200 text-center">
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckCircle className="w-12 h-12 text-green-600" />
                        </div>
                    </div>
                    <h3 className="text-3xl font-normal mb-4 font-[Neue_Augenblick]">¡Mensaje enviado!</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Gracias por contactarte con Yobel. Hemos recibido tu mensaje y uno de nuestros especialistas se comunicará contigo a la brevedad.
                    </p>
                  </div>
              )}
            </div>
        </div>
      </Container>
    </Section>
    </>
  )
}