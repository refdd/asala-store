"use client";
import React from "react";
import FooterOverView from "./FooterOverView";
import FooterLinks from "./FooterLinks";
import FooterSocialMedia from "./FooterSocialMedia";
import FooterSubscribe from "./FooterSubscribe";
import Image from "next/image";
import { useTranslations } from "next-intl";

function Footer() {
  const t = useTranslations("footerLinks");

  const links = [
    { link_slug: "/shippingPolicy", link_title: t("shippingPolicy") },
    { link_slug: "/returnPolicy", link_title: t("returnPolicy") },
    { link_slug: "/refundPolicy", link_title: t("refundPolicy") },
  ];

  const links1 = [{ link_slug: "/contactUs", link_title: t("contactUs") }];

  return (
    <div className="bg-[#49296A] py-9 relative mt-20 md:mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-5 md:gap-10 relative z-30">
          <FooterOverView />
          <div className="flex flex-col gap-4">
            <FooterLinks titleLinks={t("usefulLinks")} links={links} />
            <FooterLinks titleLinks={t("help")} links={links1} />
          </div>
          <FooterSocialMedia />
          <FooterSubscribe />
        </div>
      </div>
      {/* shape 1 */}
      <div className="absolute top-0 right-0 w-[356px] h-full hidden md:block z-10">
        <div className="relative w-full h-full">
          <Image
            alt="footer shape"
            title="footer shape"
            src={"/assets/images/footerOverivew.svg"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            loading="lazy"
            quality={60}
          />
        </div>
      </div>
      {/* shape 2 */}
      <div className="hidden md:block absolute top-[-10px] left-[236px] w-[428px] rotate-[22.03deg] h-[321px] bg-[#5B3E79] z-10"></div>
    </div>
  );
}

export default Footer;
