import React from "react";
import { useTranslation } from "react-i18next";
import { HeroHistory } from "./sections/HeroHistory";

export default function History() {
  const { t } = useTranslation();
  return (
    <>
      <HeroHistory label={t("about.history.name")} title={t("about.history.title")} description={t("about.history.description")} />
    </>
  )
}