"use client";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

function CardMostView({ title, slug, image, description, backgroundColor }) {
  const t = useTranslations("buttonOrder");

  return (
    <div
      className="p-5 rounded-[30px] flex flex-col md:flex-row-reverse gap-3 group"
      style={{ backgroundColor }}
    >
      <div className="w-3/12">
        <Link href={`/listProduct/${slug}`}>
          <div className="relative w-full h-[161px] md:h-[190px]">
            <Image
              alt={title}
              title={title}
              src={image}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
              loading="lazy"
              className="object-contain rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
        </Link>
      </div>
      <div className="flex flex-col gap-3 md:w-full">
        <h4 className="text-[#3A5022] text-base font-bold md:text-lg">
          {title}
        </h4>
        <p className="text-black text-sm font-bold">{description}</p>
        <Link href={`/listProduct/${slug}`}>
          <button className="px-7 py-3 md:mt-14 rounded-[20px] bg-[#B4E29B] border border-white text-white">
            {t("orderNow")}
          </button>
        </Link>
      </div>
    </div>
  );
}
export default CardMostView;
