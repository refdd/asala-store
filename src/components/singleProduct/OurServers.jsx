"use client"; // Add this if it's a client component
import React from "react";
import {
  FaShippingFast,
  FaCottonBureau,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";
import CardServer from "../cards/CardServer";
import { useTranslations } from "next-intl";

function OurServers() {
  const t = useTranslations("ourServers"); // Fetch translations

  // Define data within the component and translate it
  const serversData = [
    {
      Icon: FaShippingFast,
      title: t("fasterShippingTitle"),
      desc: t("fasterShippingDesc"),
    },
    {
      Icon: FaCottonBureau,
      title: t("cottonMaterialsTitle"),
      desc: t("cottonMaterialsDesc"),
    },
    {
      Icon: FaStar,
      title: t("highQualityTitle"),
      desc: t("highQualityDesc"),
    },
    {
      Icon: FaCheckCircle,
      title: t("highCompatibilityTitle"),
      desc: t("highCompatibilityDesc"),
    },
  ];

  return (
    <div className="mt-10 pt-8 border-t">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {serversData.map((server, index) => (
          <CardServer
            key={index}
            icon={server.Icon}
            title={server.title}
            desc={server.desc}
          />
        ))}
      </div>
    </div>
  );
}

export default OurServers;
