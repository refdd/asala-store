import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

function CardUserOrder({ title, image, size, color, quantity, price }) {
  const t = useTranslations("price");

  return (
    <div className="item flex items-center justify-between w-full pb-5 border-b border-line gap-6 mt-5">
      <div className="relative bg-img md:w-[100px] w-20 aspect-[3/4]">
        <Image
          alt={title}
          title={title}
          src={image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          loading="lazy"
          className="object-cover rounded-xl"
        />
      </div>
      <div className="flex items-center justify-between w-full">
        <div>
          <div className="text-lg font-bold">{title}</div>
          {/* <div className="mt-2">
            <span className="size capitalize">{size}</span>
            <span>/</span>
            <span className="color capitalize">{color}</span>
          </div> */}
        </div>
        <div className="font-semibold">
          <span className="quantity">{quantity}</span>
          <span className="px-1">x</span>
          <span>
            {price?.toFixed(2)} {t("currency")}{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardUserOrder;
