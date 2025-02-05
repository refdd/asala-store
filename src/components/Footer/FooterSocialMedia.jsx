import { Link } from "@/i18n/routing";
import React from "react";
import { FaWhatsapp, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { useTranslations } from "next-intl";

function FooterSocialMedia() {
  const t = useTranslations("footerSocialMedia");

  return (
    <div className="md:h-full md:flex md:flex-col md:justify-end">
      <h4 className="text-xl text-white font-bold mb-4">{t("followUs")}</h4>
      <ul className="flex items-center gap-2">
        <li>
          <Link href={"/"}>
            <FaWhatsapp className="text-3xl text-white" />
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <FaFacebookSquare className="text-3xl text-white" />
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <FaInstagram className="text-3xl text-white" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocialMedia;
