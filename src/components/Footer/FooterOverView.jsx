"use client";
import React from "react";
import DwonloadApp from "./DwonloadApp";
import { useLocale, useTranslations } from "next-intl";

function FooterOverView() {
  const locale = useLocale();
  const t = useTranslations("footer");

  return (
    <div
      className={`md:col-span-2 ${locale === "ar" ? "md:pl-16" : "md:pr-16"}`}
    >
      <div className="flex flex-col gap-3">
        <span className="text-lg text-white font-bold">{t("title")}</span>
        <p className="text-white text-sm font-bold md:leading-7">
          {t("description")}
        </p>
      </div>
      <DwonloadApp />
    </div>
  );
}

export default FooterOverView;
