"use client";
import { useTranslations } from "next-intl";
import React from "react";

function HeaderPages({ title }) {
  const t = useTranslations("haderPages");
  return (
    <div className="py-36 bg-bsMainBrown">
      <h1 className="text-4xl text-white text-center pt-5">{t(title)}</h1>
    </div>
  );
}

export default HeaderPages;
