"use client"; // Add this if it's a client component
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

function AboutUsSection() {
  const t = useTranslations("aboutUsSection"); // Fetch translations

  return (
    <div className="py-20 bg-[#f3f4f6] mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="">
            <div className="relative w-full h-[400px]">
              <Image
                alt={"about us image"}
                title={"about us image"}
                src={"/assets/images/shop_bg.avif"}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                loading="lazy"
                className="object-cover rounded-xl"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-right">
              {t("title")} {/* Use translated title */}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-right">
              {t("description")} {/* Use translated description */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
