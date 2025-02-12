"use client"; // Add this if it's a client component
import React from "react";
import { useTranslations } from "next-intl";

function AboutUsHeader() {
  const t = useTranslations("aboutUsHeader"); // Fetch translations

  return (
    <div>
      <div className="">
        <div className="text-2xl text-bsMainBrown font-bold text-center">
          {t("title")} {/* Use translated title */}
        </div>
        <div className="body1 text-center md:mt-7 mt-5">
          {t("description")} {/* Use translated description */}
        </div>
      </div>
    </div>
  );
}

export default AboutUsHeader;
