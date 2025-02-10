"use client";
import React from "react";
import { useTranslations } from "next-intl";

function HeaderFrom() {
  const t = useTranslations("headerFrom"); // Fetch translations

  return (
    <div className="pb-6 border-b">
      <div className="flex items-center justify-center">
        {/* Add any content here if needed */}
      </div>
      <div className="flex flex-col pt-3">
        <span className="text-bsMainGray text-sm">
          {t("welcomeMessage")} {/* Translated welcome message */}
        </span>
        <span className="text-4xl font-semibold">
          {t("loginTitle")} {/* Translated login title */}
        </span>
      </div>
    </div>
  );
}

export default HeaderFrom;
