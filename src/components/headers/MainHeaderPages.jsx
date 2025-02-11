"use client";
import { useTranslations } from "next-intl";
import React from "react";
import CustomBreadcrumb from "../breadcrumb/CustomBreadcrumb";

function MainHeaderPages({ title, breadcrumbItems }) {
  const t = useTranslations("haderPages");
  return (
    <div
      className="py-28 relative overflow-hidden bg-bsMainPuple flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/assets/images/bg-about.jpg')" }}
    >
      <h1 className=" relative z-10 text-4xl font-bold text-white text-center pt-5">
        {t(title)}
      </h1>
      <CustomBreadcrumb items={breadcrumbItems} />
      {/* layout */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#00000063] z[-5]"></div>
    </div>
  );
}

export default MainHeaderPages;
