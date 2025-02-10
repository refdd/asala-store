"use client";
import React from "react";
import FooterOverView from "./FooterOverView";
import FooterLinks from "./FooterLinks";
import FooterSocialMedia from "./FooterSocialMedia";
import FooterSubscribe from "./FooterSubscribe";
import Image from "next/image";
import { useTranslations } from "next-intl";
import FooterLogo from "./FooterLogo";
import DwonloadApp from "./DwonloadApp";

function Footer() {
  const t = useTranslations("footerLinks");

  const links = [
    { link_slug: "/shippingPolicy", link_title: t("shippingPolicy") },
    { link_slug: "/returnPolicy", link_title: t("returnPolicy") },
    { link_slug: "/refundPolicy", link_title: t("refundPolicy") },
  ];

  const links1 = [{ link_slug: "/contactUs", link_title: t("contactUs") }];

  return (
    <div
      style={{ background: "linear-gradient(90deg, #F4D891 0%, #CBA661 100%)" }}
      className="py-9 relative mt-20 md:mt-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-5 md:gap-10 relative z-30">
          <FooterLogo />

          <FooterOverView />
          <div className="flex flex-col gap-4 md:gap-10">
            <FooterLinks titleLinks={t("usefulLinks")} links={links} />
            <FooterLinks titleLinks={t("help")} links={links1} />
          </div>

          <FooterSubscribe />
          <div className="md:col-span-2 flex flex-col items-center justify-end">
            <DwonloadApp />
          </div>
        </div>
      </div>
      {/*  */}
      <div className=" hidden md:block absolute top-[-5rem] left-0 w-[432px] h-[332px]">
        <div className="relative w-full h-full">
          <Image
            src="/assets/images/footerlogolayout.svg"
            alt="footerWave"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
      <div className=" hidden md:block absolute top-[-3rem] left-[3.9rem] w-[207px] h-[162px]">
        <div className="relative w-full h-full">
          <Image
            src="/assets/images/foooterlogn.svg"
            alt="footerWave"
            layout="fill"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
//rotate-[22.03deg]
