"use client";
import { Link } from "@/i18n/routing";
import React from "react";
import { useTranslations } from "next-intl";

function LinksNav({ userData }) {
  const t = useTranslations("links");

  return (
    <div className="flex items-center gap-3 text-white md:text-sm lg:text-base">
      {/* {!userData && <Link href={`/auth/login`}>{t("login")}</Link>} */}
      <Link href={`/contactUs`}>{t("contactUs")}</Link>
      <Link href={`/listProduct`}>{t("products")}</Link>
      <Link href={`/aboutUs`}>{t("aboutUs")}</Link>
    </div>
  );
}

export default LinksNav;
