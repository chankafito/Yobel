import { Link } from "react-router-dom";
import { useNews } from "../../../hooks/useNews";

function Marcador() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-center relative shrink-0 w-full max-w-[547px]" data-name="Marcador">
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[24px] text-[rgba(73,73,73,0.5)] w-full">Noticias</p>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full max-w-[547px]" data-name="Title">
      <p className="basis-0 font-['Neue_Augenblick:Regular',sans-serif] grow leading-[48px] min-h-px min-w-px not-italic relative shrink-0 text-[45px] text-black">Más insights para tu operación</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[40px] md:gap-[133px] items-start relative shrink-0 w-full max-w-[1340px]" data-name="Text">
      <Marcador />
      <Title />
    </div>
  );
}

interface CardNoticiaProps {
  title: string;
  date: string;
  image: string;
  slug: string;
}

function CardNoticia({ title, date, image, slug }: CardNoticiaProps) {
  return (
    <Link to={`/noticias/${slug}`} className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full max-w-[350px] hover:opacity-80 transition-opacity" data-name="Card Noticia">
      <div className="h-[280px] relative rounded-[20px] shrink-0 w-full overflow-hidden" data-name="Image">
        <img alt={title} className="absolute inset-0 object-cover pointer-events-none rounded-[20px] size-full" src={image} />
      </div>
      <div className="relative shrink-0 w-full" data-name="Textos">
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col font-['Neue_Augenblick:Medium',sans-serif] gap-[16px] items-start not-italic px-[20px] py-0 relative w-full">
            <p className="leading-[18px] relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] text-nowrap whitespace-pre">Publicado el {date}</p>
            <p className="leading-[24px] relative shrink-0 text-[24px] text-black w-full">{title}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

function Row({ currentNewsId }: { currentNewsId?: string }) {
  const newsData = useNews();
  // Filtrar las noticias excluyendo la actual y tomar solo 3
  const relatedNews = newsData
    .filter(news => news.id !== currentNewsId)
    .slice(0, 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] w-full max-w-full" data-name="Row">
      {relatedNews.map((news) => (
        <CardNoticia
          key={news.id}
          title={news.title}
          date={news.date}
          image={news.image}
          slug={news.id}
        />
      ))}
    </div>
  );
}

export default function RelatedArticles({ currentNewsId }: { currentNewsId?: string }) {
  return (
    <div className="bg-gradient-to-b from-[#ffffff] from-[11.742%] relative w-full to-[#f0de32] to-[46.753%] overflow-x-hidden" data-name="Articulos relacionados">
      <div className="flex flex-col justify-center w-full">
        <div className="box-border content-stretch flex flex-col gap-[60px] items-start justify-center px-[20px] md:px-[50px] py-[120px] relative w-full max-w-full">
          <Text />
          <Row currentNewsId={currentNewsId} />
        </div>
      </div>
    </div>
  );
}