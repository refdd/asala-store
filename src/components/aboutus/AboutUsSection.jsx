"use client"; // Add this if it's a client component
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import AboutUsFeatured from "./AboutUsFeatured";

function AboutUsSection() {
  const t = useTranslations("aboutUsSection"); // Fetch translations

  return (
    <div className="py-20 bg-[#F3F3F3] mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="">
            <div className="relative w-full h-[400px]">
              <Image
                alt={"about us image"}
                title={"about us image"}
                src={"/assets/images/about-img1.jpg"}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                loading="lazy"
                className="object-cover rounded-xl"
              />
            </div>
          </div>
          <div>
            <h2 className="text-xl text-bsMainBrown ">
              {t("title")} {/* Use translated title */}
            </h2>
            <p className="text-4xl mb-3 font-bold  ">
              {t("description")} {/* Use translated description */}
            </p>
            <p className="text-xl font-medium">
              Organic Foods and Café is a family run company founded in 2004
              that runs organic supermarkets
            </p>
            <p className="text-base font-medium text-[#666666]">
              Organic means growing our food, which is to nourish us, without
              chemical aids during the growing process such as fertilisers,
              pesticides, fungcides, herbacides, larbicides etc
            </p>
            <AboutUsFeatured />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
