import React from "react";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import { Section } from "../../components/ui/section";
import { Container } from "../../components/ui/container";
import { useNews } from "../../hooks/useNews";

import ArticulosRelacionados from "./sections/RelatedArticles";
import NotFound from "../NotFound";

export function NewDetail() {
  const { t } = useTranslation();
  const newsData = useNews();
  const { slug } = useParams<{ slug: string }>();
  
  // Esperar a que newsData se cargue
  if (!newsData || newsData.length === 0) {
    return <div>Cargando...</div>;
  }
  
  const newsItem = newsData.find(item => item.id === slug);
  
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [isNearEnd, setIsNearEnd] = React.useState(false);
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      
      const contentElement = contentRef.current;
      const contentRect = contentElement.getBoundingClientRect();
      const contentTop = contentElement.offsetTop;
      const contentHeight = contentElement.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      
      // Calcular el progreso basado en el contenido principal
      // Empieza a contar cuando el contenido entra al viewport
      // Termina al 100% cuando el final del contenido llega al final del viewport
      const scrollStart = contentTop;
      const scrollEnd = contentTop + contentHeight - windowHeight;
      const scrollRange = scrollEnd - scrollStart;
      
      if (scrollTop < scrollStart) {
        setScrollProgress(0);
      } else if (scrollTop > scrollEnd) {
        setScrollProgress(100);
      } else {
        const progress = ((scrollTop - scrollStart) / scrollRange) * 100;
        setScrollProgress(Math.min(Math.max(progress, 0), 100));
      }
      
      // Mostrar botón cuando el usuario ha scrolleado al menos 50% del contenido
      const overallProgress = (scrollTop / (document.documentElement.scrollHeight - windowHeight)) * 100;
      setIsNearEnd(overallProgress >= 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Calcular inicial
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Enlace copiado al portapapeles");
  };

  const handleShareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  const handleShareLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  if (!newsItem) {
    //console.error('No se encontró la noticia con slug:', slug);
    return <NotFound />;
  }

  return (
    <div className="bg-white min-h-screen font-[Neue_Augenblick]">
      {/* Header Section */}
      <Section className="pt-16 pb-0 md:pt-28 md:pb-6">
        <Container className="px-[20px] md:px-[50px]">
          <div className="relative w-full">
            {/* Back Button */}
            <Link 
              to="/noticias"
              className="hidden md:flex absolute box-border content-stretch gap-[8px] items-center justify-center left-[51px] p-[10px] rounded-[40px] top-[20px] group hover:bg-gray-50 transition-colors z-10"
            >
              <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-[-0.75px] pointer-events-none rounded-[40.75px]" />
              {/* Left Arrow Icon */}
              <div className="overflow-clip relative shrink-0 size-[20px]">
                <div className="absolute flex inset-[20.81%_16.06%_20.86%_17.27%] items-center justify-center">
                  <div className="flex-none h-[12px] rotate-[180deg] w-[14px]">
                    <div className="relative size-full">
                      <div className="absolute bottom-[-3.79%] left-0 right-[-3.78%] top-[-3.79%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
                          <path d="M0 7.52417H16" stroke="black" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M8.85449 0.53033L15.8545 7.53033L8.85449 14.5303" stroke="black" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap whitespace-pre">Regresar a Noticias</p>
            </Link>

            {/* Mobile Back Button */}
            <Link 
              to="/noticias"
              className="flex md:hidden mb-6 box-border content-stretch gap-[8px] items-center justify-start p-[10px] rounded-[40px] group hover:bg-gray-50 transition-colors w-fit relative"
            >
              <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-[-0.75px] pointer-events-none rounded-[40.75px]" />
              {/* Left Arrow Icon */}
              <div className="overflow-clip relative shrink-0 size-[20px]">
                <div className="absolute flex inset-[20.81%_16.06%_20.86%_17.27%] items-center justify-center">
                  <div className="flex-none h-[12px] rotate-[180deg] w-[14px]">
                    <div className="relative size-full">
                      <div className="absolute bottom-[-3.79%] left-0 right-[-3.78%] top-[-3.79%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
                          <path d="M0 7.52417H16" stroke="black" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M8.85449 0.53033L15.8545 7.53033L8.85449 14.5303" stroke="black" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap whitespace-pre">Regresar</p>
            </Link>

            {/* Title Section - Centered */}
            <div className="flex flex-col items-center justify-center size-full">
              <div className="box-border content-stretch flex flex-col gap-[16px] md:gap-[24px] items-center justify-center not-italic pb-[40px] md:pb-[80px] pt-[20px] md:pt-[120px] px-[20px] md:px-[50px] relative text-center w-full">
                <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] relative shrink-0 text-[14px] md:text-[16px] text-[rgba(73,73,73,0.5)] max-w-[351px]">{newsItem.category}</p>
                <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[1.1] md:leading-[67px] relative shrink-0 text-[32px] md:text-[50px] lg:text-[65px] text-black max-w-[773px]">{newsItem.title}</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Content Section */}
      <Section className="pt-12 pb-32">
        <Container className="px-[20px] md:px-[50px]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24">
              
              {/* Sidebar / Meta Column - Hidden on mobile, shown as sticky sidebar on desktop */}
              <div className="hidden lg:block lg:col-span-3 relative">
                <div className="sticky top-32 content-stretch flex flex-col gap-[40px] lg:gap-[60px] items-start w-full max-h-[calc(100vh-10rem)] overflow-visible">
                  {/* Publicado el */}
                  <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] w-full">
                    Publicado el {newsItem.date}
                  </p>

                  {/* Tiempo de Lectura - Progress Bar */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
                    <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] w-[min-content]">
                      Tiempo de Lectura
                    </p>
                    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
                      {/* Progress bar container */}
                      <div className="w-full h-[40px] relative">
                        {/* Text */}
                        <div className="absolute inset-0 flex items-center">
                          <div className="flex flex-col font-['Neue_Augenblick:Medium',sans-serif] justify-center leading-[0] not-italic relative text-[22px] text-nowrap">
                            <p className="leading-[24px] whitespace-pre" style={{ 
                              backgroundImage: `linear-gradient(to right, black ${scrollProgress}%, rgba(73,73,73,0.3) ${scrollProgress}%)`,
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text'
                            }}>
                              6 minutos
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Compartir */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
                    <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] w-[min-content]">
                      Compartir
                    </p>
                    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0">
                      {/* Facebook */}
                      <button 
                        onClick={handleShareFacebook}
                        className="box-border content-stretch flex gap-[12px] items-start px-0 py-[8px] relative shrink-0 cursor-pointer hover:opacity-60 transition-opacity"
                      >
                        <div className="flex flex-col font-['Neue_Augenblick:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-black text-nowrap">
                          <p className="leading-[24px] whitespace-pre">Facebook</p>
                        </div>
                      </button>

                      {/* LinkedIn */}
                      <button 
                        onClick={handleShareLinkedIn}
                        className="box-border content-stretch flex gap-[12px] items-start px-0 py-[8px] relative shrink-0 cursor-pointer hover:opacity-60 transition-opacity"
                      >
                        <div className="flex flex-col font-['Neue_Augenblick:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-black text-nowrap">
                          <p className="leading-[24px] whitespace-pre">LinkedIn</p>
                        </div>
                      </button>

                      {/* Copiar enlace */}
                      <button 
                        onClick={handleCopyLink}
                        className="box-border content-stretch flex gap-[12px] items-start px-0 py-[8px] relative shrink-0 cursor-pointer hover:opacity-60 transition-opacity"
                      >
                        <div className="flex flex-col font-['Neue_Augenblick:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-black text-nowrap">
                          <p className="leading-[24px] whitespace-pre">Copiar enlace</p>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Contactar un asesor */}
                  {isNearEnd && (
                    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full transition-all duration-700 ease-in-out animate-in fade-in slide-in-from-bottom-4">
                      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] text-nowrap whitespace-pre">
                        Conversemos sobre tu operación
                      </p>
                      <Link
                        to="/contacto"
                        className="box-border content-stretch flex gap-[12px] items-center justify-center p-[16px] relative rounded-[30px] shrink-0 cursor-pointer hover:bg-gray-50 transition-colors"
                      >
                        <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-[-0.75px] pointer-events-none rounded-[30.75px]" />
                        <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[24px] text-black text-center text-nowrap whitespace-pre">
                          Contactar un asesor
                        </p>
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              {/* Main Content Column */}
              <div className="lg:col-span-8 lg:col-start-5 flex flex-col gap-12 w-full" ref={contentRef}>
                {/* Mobile Meta Info - Only visible on mobile */}
                <div className="lg:hidden flex flex-col gap-6 pb-6 border-b border-gray-200">
                  <p className="font-['Neue_Augenblick:Medium',sans-serif] text-[14px] text-[rgba(73,73,73,0.5)]">
                    Publicado el {newsItem.date}
                  </p>
                  
                  {/* Mobile Reading Time */}
                  <div className="flex flex-col gap-2">
                    <p className="font-['Neue_Augenblick:Medium',sans-serif] text-[14px] text-[rgba(73,73,73,0.5)]">
                      Tiempo de Lectura
                    </p>
                    <p className="font-['Neue_Augenblick:Medium',sans-serif] text-[20px] text-black">
                      6 minutos
                    </p>
                  </div>
                </div>

                {/* Cover Image */}
                <div className="w-full overflow-hidden rounded-sm">
                   <img 
                     src={newsItem.image}
                     alt="Imagen de portada" 
                     className="w-full h-auto lg:h-[500px] object-cover"
                   />
                </div>

                {/* Lead Paragraph */}
                <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight text-black">
                  {newsItem.excerpt}
                </p>

                {/* Body Content */}
                <div className="text-lg md:text-xl font-light leading-relaxed text-gray-800 flex flex-col gap-8">
                    <div 
                      className="prose prose-lg max-w-none prose-headings:font-normal prose-headings:text-black prose-headings:text-2xl prose-headings:mt-8 prose-headings:mb-4 prose-p:text-gray-600 prose-p:font-light prose-p:leading-relaxed prose-strong:font-medium prose-strong:text-black"
                      dangerouslySetInnerHTML={{ __html: newsItem.content || "" }}
                    />
                    
                    {/* Pull Quote - Standardized */}
                    <div className="my-12 pl-6 border-l-4 border-[#59c1e6]"> 
                       <h3 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-normal text-black tracking-tight">
                         "La innovación no es solo tecnología, es la capacidad de adaptarse y evolucionar constantemente para servir mejor al mundo."
                       </h3>
                    </div>
                    
                    <p>
                      Continuamos nuestro viaje hacia la excelencia operativa, siempre poniendo a nuestros clientes y al planeta en primer lugar. En Yobel, creemos que el futuro se construye hoy.
                    </p>
                </div>

                {/* Bottom Image */}
                <div className="w-full h-[400px] overflow-hidden rounded-sm mt-8">
                   <img 
                     src={newsItem.image}
                     alt="Details" 
                     className="w-full h-full object-cover"
                   />
                </div>

                {/* Mobile Share Section - At the end of article */}
                <div className="lg:hidden flex flex-col gap-6 pt-6 mt-6 border-t border-gray-200">
                  <p className="font-['Neue_Augenblick:Medium',sans-serif] text-[14px] text-[rgba(73,73,73,0.5)]">
                    Compartir este artículo
                  </p>
                  
                  {/* Mobile Share Buttons */}
                  <div className="flex gap-4 flex-wrap">
                    <button 
                      onClick={handleShareFacebook}
                      className="px-4 py-2 border border-black rounded-full text-sm hover:bg-gray-50 transition-colors"
                    >
                      Compartir en Facebook
                    </button>
                    <button 
                      onClick={handleShareLinkedIn}
                      className="px-4 py-2 border border-black rounded-full text-sm hover:bg-gray-50 transition-colors"
                    >
                      Compartir en LinkedIn
                    </button>
                    <button 
                      onClick={handleCopyLink}
                      className="px-4 py-2 border border-black rounded-full text-sm hover:bg-gray-50 transition-colors"
                    >
                      Copiar enlace
                    </button>
                  </div>
                </div>

                {/* Mobile CTA Button - Only visible on mobile when scrolled */}
                {isNearEnd && (
                  <div className="lg:hidden fixed bottom-6 left-0 right-0 px-6 z-40 animate-in fade-in slide-in-from-bottom-4">
                    <Link
                      to="/contacto"
                      className="w-full block text-center px-8 py-4 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-colors shadow-lg"
                    >
                      Contactar un asesor
                    </Link>
                  </div>
                )}
              </div>

            </div>
          </div>
        </Container>
      </Section>

      {/* Related Articles Section */}
      <ArticulosRelacionados />
    </div>
  );
}