import { useTranslation } from "react-i18next";
import videoAbout from "/src/assets/videos/gris-desktop.mp4"; 
import { HeroVideo } from "../../components/HeroVideo";
import { PurposeSection } from "../../components/PurposeSection";
import { SectionTextHover} from "../../components/SectionTextHover";
import { Certificates } from "../../pages/Home/sections/Certificates";

export default function About() {
  const { t } = useTranslation();

  const purposeItems = t('about.purpose', { returnObjects: true }) as PurposeItem[];

  const valueItems = t('about.values.items', { returnObjects: true }) as ValueItem[];
  
  return (
    <>
      <HeroVideo 
        video={videoAbout}
        name={t('about.hero.name')}
        title={t('about.hero.title')}
        subtitle={t('about.hero.subtitle')}
      />

      <PurposeSection items={purposeItems} />

      <SectionTextHover
        title={t('about.values.title')}
        desc={t('about.values.description')}
        items={valueItems}
      />

      <Certificates />
    </>
  );
}
