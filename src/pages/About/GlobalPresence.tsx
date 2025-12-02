import { useTranslation } from "react-i18next";
import { HeroVideo } from "../../components/HeroVideo";
import { Phrase } from "../../components/Phrase";
import { VideoScrollSection, type DataPoint } from "../../components/VideoScrollSection/VideoScrollSection";
import { SectionMaps } from "./sections/SectionMaps";

import videoHero from "/src/assets/videos/gris-desktop.mp4";
import videoSection from "/src/assets/videos/fabrica.mp4";

export default function GlobalPresence() {
  const { t } = useTranslation();
  
  const videoItems = t('global.video.items', { returnObjects: true }) as DataPoint[];
  
  return (
    <>
      <HeroVideo 
        video={videoHero}
        name={t('global.hero.name')}
        title={t('global.hero.title')}
      />

      <Phrase text={t('global.phrase.text')} />

      <VideoScrollSection videoSrc={videoSection} items={videoItems} />

      <SectionMaps />
    </>
  )
}
