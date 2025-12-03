import { useTranslation } from "react-i18next";
import { SectionColorTransition } from "../../components/SectionColorTransition";
import { HeroHistory } from "./sections/HeroHistory";
import { Phrase } from "../../components/Phrase";
import { Timeline } from "../../components/Timeline";
import { useTimeline } from "../../hooks/useTimeline";

export default function History() {
  const { t } = useTranslation();
  const timelineFromHook = useTimeline();
  return (
      <SectionColorTransition >
        {(textColor) => ( 
        <>
          <HeroHistory label={t("about.history.name")} title={t("about.history.title")} description={t("about.history.description")} />
          {/* <Phrase textColor={textColor} /> */}
          <Phrase text={t('global.phrase.text')} textColor={textColor} />

          <Timeline items={timelineFromHook}  textColor={textColor} />

        </>
      )} 
      </SectionColorTransition>
  )
}