"use client";
import { Link } from "@/i18n/routing";
import React from "react";
import { useTranslations } from "next-intl";

function AlreadyHaveAccount() {
  const t = useTranslations("auth");

  return (
    <div className="pt-4">
      {t("haveAccount")}{" "}
      <Link href="/auth/login" className="">
        <span className="text-bsMainPuple">{t("login")}</span>
      </Link>
    </div>
  );
}

export default AlreadyHaveAccount;
