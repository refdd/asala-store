import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

function FristMianProduct({ offer, image, cardColor, roundedPosition }) {
  const t = useTranslations("buttonOrder");

  return (
    <div
      style={{ backgroundColor: cardColor }}
      className={`relative p-5  ${roundedPosition}  flex flex-col items-center justify-center`}
    >
      {offer && (
        <p className="text-3xl font-bold text-[#D36262] leading-[56.22px] ">
          <span className="">Up to</span>
          <span className="text-7xl leading-[131.18px]">{offer}%</span>
        </p>
      )}
      <div className="relative w-[190px] h-[195.18px]">
        <Image
          alt={"offline image"}
          title={"offline image"}
          src={image}
          // src={"/assets/images/image 1.png"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          loading="lazy"
          className="object-contain py-3 rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2  flex items-center justify-center ">
        <Button
          //   onClick={handleAddToCart}
          className="px-10 h-10 hover:bg-bsMainGreen rounded-[20px] bg-[#82D627CC] border border-white text-white"
        >
          {t("seeMore")}
        </Button>
      </div>
    </div>
  );
}

export default FristMianProduct;
