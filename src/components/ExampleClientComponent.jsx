"use client";

import { useTranslation } from "react-i18next";
import LanguageChanger from "./LanguageChanger";
import { Button } from "./ui/button";

export default function ExampleClientComponent() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="">
      <h3>{t("greeting")}</h3>
      <p>{t("welcome")}</p>
      <Button>Click me</Button>
      <LanguageChanger onChange={changeLanguage} />
    </div>
  );
}
