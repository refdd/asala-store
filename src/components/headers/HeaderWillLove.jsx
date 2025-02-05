"use client";
import { useTranslations } from "next-intl";
import React from "react";

function HeaderWillLove({}) {
  const t = useTranslations("willLoveToo");
  return (
    <div>
      <h1 className="text-2xl font-bold">{t("title")}</h1>
    </div>
  );
}

export default HeaderWillLove;
