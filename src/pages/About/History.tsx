import { useTranslation } from "react-i18next";
import { SectionColorTransition } from "../../components/SectionColorTransition";
import { HeroHistory } from "./sections/HeroHistory";
import { Phrase } from "../../components/Phrase";
import { Timeline } from "../../components/Timeline";
import { useTimeline } from "../../hooks/useTimeline";
import { ImageBlock } from "../../components/ImageBlock";
import { SectionList } from "../../components/SectionList";
import { useLife } from "../../hooks/useLife";

import imagen from "../../assets/images/img-history.webp";
const mask = "data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%201452%201020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20id%3D%22Vector%2030%22%20d%3D%22M732.092%2075.0383C472.092%2075.0389%2012.5924%20-1.9617%2012.1064%200.0382969C11.6205%202.0383%200%201019.04%200%201019.04C0%201019.04%20405.092%20964.5%20732.092%20964.5C1059.09%20964.5%201451.62%201019.04%201451.62%201019.04V20.5385C1451.62%2020.5385%201012.77%2075.0377%20732.092%2075.0383Z%22%20fill%3D%22var(--fill-0%2C%20%23C4C4C4)%22%2F%3E%0A%3C%2Fsvg%3E%0A";

export default function History() {
  const { t } = useTranslation();
  const timelineFromHook = useTimeline();
  const lifeFromHook = useLife();
  
  return (
      <SectionColorTransition >
        {(textColor) => ( 
        <>
          <HeroHistory label={t("about.history.name")} title={t("about.history.title")} description={t("about.history.description")} />
          {/* <Phrase textColor={textColor} /> */}
          <Phrase text={t('global.phrase.text')} textColor={textColor} />

          <Timeline items={timelineFromHook}  textColor={textColor} />

          <ImageBlock
            image={imagen}
            mask={mask}
            alt="Our History Image"
            heightClass="h-[500px] md:h-[700px] lg:h-[900px] xl:h-[1019px]"
            className="mt-20"
          />

          <SectionList
            title={t("about.life.title")}
            items={lifeFromHook}
            className="mt-20"
            textColor={textColor}
          />

        </>
      )} 
      </SectionColorTransition>
  )
}