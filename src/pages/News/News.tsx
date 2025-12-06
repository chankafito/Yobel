import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useSearchParams } from "react-router-dom";
import { Section } from "../../components/ui/section";
import { Container } from "../../components/ui/container";
import { cn } from "../../utils/cn";
import { useNews } from "../../hooks/useNews";

export function News() {
  const { t } = useTranslation();
  const newsData = useNews(); 
  const [searchParams, setSearchParams] = useSearchParams();
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const categoryFromUrl = searchParams.get("categoria");
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl || "Todas las categorías");
  const [selectedCountry, setSelectedCountry] = useState("Todos los países");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const itemsPerPage = 9;

  // Actualizar el estado cuando cambia el parámetro de la URL
  React.useEffect(() => {
    const categoryFromUrl = searchParams.get("categoria");
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [searchParams]);

  // Extract unique categories and countries
  const categories = ["Todas las categorías", ...Array.from(new Set(newsData.map(news => news.category)))];
  const countries = ["Todos los países", ...Array.from(new Set(newsData.map(news => news.country)))];

  // Filter news based on selections
  const filteredNews = newsData.filter(news => {
    const categoryMatch = selectedCategory === "Todas las categorías" || news.category === selectedCategory;
    const countryMatch = selectedCountry === "Todos los países" || news.country === selectedCountry;
    return categoryMatch && countryMatch;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = filteredNews.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedCountry]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    }
  };

  return (
    <div onMouseMove={handleMouseMove} className="relative">
      <div 
        ref={cursorRef}
        className={cn(
            "fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ease-out",
            "bg-black/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3",
            "text-white font-augenblick text-lg whitespace-nowrap",
            isHovering ? "opacity-100" : "opacity-0"
        )}
        style={{ left: 0, top: 0 }}
      >
        {t('news.read_more')}
      </div>
      
      <div className="relative h-[40vh] min-h-[300px] md:min-h-[400px] max-h-[500px] w-full overflow-hidden font-augenblick bg-gradient-to-b from-[#59c1e6] to-white">
        <div className="absolute bottom-10 left-0 right-0 px-[5%] md:px-[50px] z-10">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-[20px] md:gap-[30px]">
            <p className="text-base md:text-[18px] text-black font-[Neue_Augenblick]">{t('news.news_center')}</p>
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 md:gap-[40px] w-full">
                <h1 className="text-4xl md:text-6xl lg:text-[65px] leading-[1] text-black max-w-[773px] font-[Neue_Augenblick]">
                  {t('news.title')}
                </h1>
                <p className="text-lg md:text-[22px] leading-snug md:leading-[24px] text-black max-w-[400px] lg:mr-32 pb-1 font-[Neue_Augenblick]">
                  {t('news.description')}
                </p>
            </div>
          </div>
        </div>
      </div>

      <Section className="bg-white py-[60px] md:py-[60px]">
        <Container className="px-[20px] md:px-[50px]">
          {/* Filtros */}
          <div className="content-stretch flex flex-col md:flex-row gap-[20px] items-start mb-[60px] md:mb-[120px]" data-name="Filtro">
            {/* Categorías Filter */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full md:w-[547px]">
              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
              <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] text-nowrap whitespace-pre">Categorías</p>
              <button 
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="box-border content-stretch flex gap-[20px] items-start px-0 py-[8px] relative shrink-0 w-full cursor-pointer"
              >
                <div aria-hidden="true" className="absolute border-[0px_0px_1.5px] border-black border-solid bottom-[-0.75px] left-0 pointer-events-none right-0 top-0" />
                <div className="basis-0 flex flex-col font-['Neue_Augenblick:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black">
                  <p className="leading-[24px]">{selectedCategory}</p>
                </div>
                <div className="overflow-clip relative shrink-0 size-[32px]">
                  <div className="absolute flex inset-[36.67%_21.67%_34.17%_20%] items-center justify-center">
                    <div className="flex-none h-[18.667px] rotate-[90deg] w-[9.333px]">
                      <div className="relative size-full">
                        <div className="absolute inset-[-2.84%_-8.04%_-2.84%_-5.68%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 20">
                            <path d="M0.53033 0.53033L9.86366 9.86366L0.53033 19.197" stroke="black" strokeLinejoin="round" strokeWidth="1.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
              {isCategoryOpen && (
                <div className="absolute left-0 top-full mt-2 w-full bg-white border-[1.5px] border-black rounded-[8px] shadow-lg z-20 max-h-[300px] overflow-y-auto">
                  {categories.map(category => (
                    <div
                      key={category}
                      className="px-[20px] py-[12px] cursor-pointer hover:bg-gray-50 font-['Neue_Augenblick:Medium',sans-serif] text-[18px] text-black border-b border-gray-100 last:border-b-0"
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsCategoryOpen(false);
                        setSearchParams({ categoria: category });
                      }}
                    >
                      {category}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* País Filter */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full md:w-[547px]">
              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
              <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] text-nowrap whitespace-pre">País</p>
              <button
                onClick={() => setIsCountryOpen(!isCountryOpen)}
                className="box-border content-stretch flex gap-[20px] items-start px-0 py-[8px] relative shrink-0 w-full cursor-pointer"
              >
                <div aria-hidden="true" className="absolute border-[0px_0px_1.5px] border-black border-solid bottom-[-0.75px] left-0 pointer-events-none right-0 top-0" />
                <div className="basis-0 flex flex-col font-['Neue_Augenblick:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black">
                  <p className="leading-[24px]">{selectedCountry}</p>
                </div>
                <div className="overflow-clip relative shrink-0 size-[32px]">
                  <div className="absolute flex inset-[36.67%_21.67%_34.17%_20%] items-center justify-center">
                    <div className="flex-none h-[18.667px] rotate-[90deg] w-[9.333px]">
                      <div className="relative size-full">
                        <div className="absolute inset-[-2.84%_-8.04%_-2.84%_-5.68%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 20">
                            <path d="M0.53033 0.53033L9.86366 9.86366L0.53033 19.197" stroke="black" strokeLinejoin="round" strokeWidth="1.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
              {isCountryOpen && (
                <div className="absolute left-0 top-full mt-2 w-full bg-white border-[1.5px] border-black rounded-[8px] shadow-lg z-20 max-h-[300px] overflow-y-auto">
                  {countries.map(country => (
                    <div
                      key={country}
                      className="px-[20px] py-[12px] cursor-pointer hover:bg-gray-50 font-['Neue_Augenblick:Medium',sans-serif] text-[18px] text-black border-b border-gray-100 last:border-b-0"
                      onClick={() => {
                        setSelectedCountry(country);
                        setIsCountryOpen(false);
                      }}
                    >
                      {country}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[20px] gap-y-[60px] mb-[120px]">
            {currentNews.map((news) => (
              <Link 
                to={`/noticias/${news.id}`} 
                key={news.id} 
                className="group flex flex-col gap-[16px] cursor-pointer"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="overflow-hidden rounded-[20px] h-[400px] w-full bg-gray-100 relative">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div className="flex flex-col gap-[16px] px-[20px]">
                  <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] text-[16px] text-[rgba(73,73,73,0.5)] whitespace-nowrap">
                    Publicado el {news.date}
                  </p>
                  <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[24px] text-[24px] text-black">
                    {news.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="content-stretch flex gap-[20px] items-end relative shrink-0 w-full">
            <div className="basis-0 box-border content-stretch flex gap-[10px] grow items-center min-h-px min-w-px opacity-60 px-0 py-px relative shrink-0">
              <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">
                Página {currentPage} de {totalPages} ({filteredNews.length} noticias)
              </p>
            </div>
            
            <div className="content-stretch flex gap-[20px] h-[40px] items-center justify-end relative w-[430px]">
              {/* Previous Button */}
              <div className="flex items-center justify-center relative shrink-0">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="box-border content-stretch flex gap-[12px] items-center justify-center px-[14px] py-[8px] relative rounded-[20px] disabled:opacity-30"
                >
                  <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-[-0.75px] pointer-events-none rounded-[20.75px]" />
                  <div className="overflow-clip relative shrink-0 size-[24px]">
                    <div className="absolute flex inset-[20.81%_16.06%_20.86%_17.27%] items-center justify-center">
                      <div className="flex-none h-[14px] rotate-[180deg] w-[16px]">
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
                </button>
              </div>

              {/* Next Button */}
              <div className="flex items-center justify-center relative shrink-0">
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="box-border content-stretch flex gap-[12px] items-center justify-center px-[14px] py-[8px] relative rounded-[20px] disabled:opacity-30"
                >
                  <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-[-0.75px] pointer-events-none rounded-[20.75px]" />
                  <div className="overflow-clip relative shrink-0 size-[24px]">
                    <div className="absolute inset-[20.81%_16.06%_20.86%_17.27%]">
                      <div className="absolute bottom-[-3.79%] left-0 right-[-3.78%] top-[-3.79%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
                          <path d="M0 7.52417H16" stroke="black" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M8.85449 0.53033L15.8545 7.53033L8.85449 14.5303" stroke="black" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

    </div>
  )

}
