"use client"; // Add this if it's a client component
import React from "react";
import { useTranslations } from "next-intl";

function ContactInfo() {
  const t = useTranslations("contactInfo"); // Fetch translations

  return (
    <div className="md:col-span-1 border p-3 rounded-xl">
      <div className="">
        <div className="item">
          <div className="text-2xl">{t("ourStore")}</div>
          <p className="mt-3">{t("address")}</p>
          <p className="mt-3">
            {t("phone")} <span className="">{t("phoneNumber")}</span>
          </p>
          <p className="mt-1">
            {t("email")} <span className="">{t("emailAddress")}</span>
          </p>
        </div>
        <div className="item mt-10">
          <div className="text-2xl">{t("openHours")}</div>
          <p className="mt-3">
            {t("monFri")} <span className="">{t("monFriTime")}</span>
          </p>
          <p className="mt-3">
            {t("saturday")} <span className="">{t("saturdayTime")}</span>
          </p>
          <p className="mt-3">
            {t("sunday")} <span className="">{t("sundayTime")}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
