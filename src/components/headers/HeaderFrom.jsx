"use client"
import React from "react";
import { useTranslations } from "next-intl";

function HeaderFrom() {
  const t = useTranslations("loginForm");
  return (
    <div className="pb-6 border-b">
      <div className="flex items-center justify-center">
      </div>
      <div className="flex flex-col pt-3">
        <span className="text-bsMainGray text-sm">مرحبا بك !!!</span>
        <span className="text-4xl font-semibold">تسجيل الدخول</span>
      </div>
    </div>
  );
}

export default HeaderFrom;
