"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

function MainSliderContent({ title, description, link }) {
  const t = useTranslations("buttonOrder");

  return (
    <div className="md:col-span-2">
      <div className="flex flex-col md:justify-center gap-3">
        <h1 className="text-2xl font-semibold text-white md:text-4xl">
          {title}
        </h1>
        <p className="text-white text-xl md:text-2xl font-semibold  md:leading-[50px]">
          {description}
        </p>
        <div className="flex items-center justify-end md:justify-start pt-10">
          <Link href={`${link}`}>
            <button className="px-7 py-3 rounded-xl bg-bsMainBrown border border-white text-white">
              {t("orderNow")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainSliderContent;
