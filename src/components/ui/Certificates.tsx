import { Section } from "./section";
import { Container } from "./container";

// Import certificate images
import cert01 from "../../assets/images/certificates/cert-01.png";
import cert02 from "../../assets/images/certificates/cert-02.png";
import cert03 from "../../assets/images/certificates/cert-03.png";
import cert04 from "../../assets/images/certificates/cert-04.png";
import cert05 from "../../assets/images/certificates/cert-05.png";

interface CertificatesProps {
  label?: string;
  title?: string;
  description?: string;
}

export function Certificates({
  label = "Certificados",
  title = "Nuestros certificados nos respaldan",
  description = "En Yobel contamos con certificaciones internacionales y políticas internas que avalan nuestro compromiso con la excelencia operativa, la sostenibilidad ambiental y la integridad en la gestión logística y de manufactura.",
}: CertificatesProps) {
  const certificates = [cert01, cert02, cert03, cert04, cert05];

  return (
    <Section className="bg-white overflow-hidden py-20">
      <Container className="flex flex-col gap-20">
        <div className="flex flex-col md:flex-row gap-12 md:gap-32 items-start">
          <div className="shrink-0 w-32 text-lg mt-2 text-gray-400">
            {label}
          </div>
          <div className="flex flex-col md:flex-row gap-12 md:gap-32">
            <h2 className="text-4xl md:text-[45px] leading-tight max-w-sm font-augenblick">
              {title}
            </h2>
            <p className="text-lg leading-relaxed max-w-md opacity-80">
              {description}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mt-12">
          {certificates.map((cert, idx) => (
            <img
              key={idx}
              src={cert}
              alt={`Certificado ${idx + 1}`}
              className="h-24 md:h-[180px] object-contain opacity-80 hover:opacity-100 transition-all duration-700 ease-in-out grayscale hover:grayscale-0"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
