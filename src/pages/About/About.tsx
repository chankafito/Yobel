import { useTranslation } from "react-i18next";
import { HeroVideo } from "../../components/HeroVideo";
import videoAbout from "/src/assets/videos/gris-desktop.mp4"; // ajusta la ruta según tu proyecto

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <HeroVideo 
        video={videoAbout}
        name={t('about.hero.name')}
        title={t('about.hero.title')}
        subtitle={t('about.hero.subtitle')}
      />
      {/* resto de secciones de About */}
    </>
  );
}
