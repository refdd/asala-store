"use client";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import React from "react";

function IhaveAccount() {
  const t = useTranslations("headerForm"); // Fetch translations

  return (
    <p className="pt-4">
      {t("noAccount")}{" "}
      <Link href="/auth/signup" className="">
        <span className="text-bsMainPuple">{t("signup")}</span>
      </Link>
    </p>
  );
}

export default IhaveAccount;
