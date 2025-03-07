"use client"; // Add this if it's a client component
import React from "react";
import { FaShippingFast, FaStar } from "react-icons/fa";
import { Button } from "../ui/button";
import { MdAssignmentReturn, MdSupportAgent } from "react-icons/md";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import SingleProductAddTOCart from "./SingleProductAddTOCart";

function SingleProductOverView({
  title,
  description,
  category,
  stock,
  code,
  rating,
  status,
  price,
  discountedPrice,
  locale,
  productId,
}) {
  const t = useTranslations("singleProductOverView"); // Fetch translations
  const t1 = useTranslations("price");
  // Function to render star rating based on the rating prop
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`ph-fill ph-star text-sm ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="">
      <div className="flex flex-col">
        <div>
          {/* <div className="text-lg text-bsMainBrown font-bold uppercase">
            {category}
          </div> */}
          <div className="text-4xl font-bold my-2">{title}</div>
        </div>
        <div className="flex items-center gap-1 ">
          <div className="rate flex gap-1">{renderStars(rating)}</div>
          {/* <span className="caption1 text-bsMainBrown">{t("reviews")}</span> */}
        </div>
      </div>
      <div className="flex items-center gap-3 flex-wrap mt-5  ">
        <div className="text-2xl font-bold ">
          {t1("currency")}
          {price}
        </div>
        <div className="w-px h-4 bg-line"></div>
      </div>
      <div className="font-medium  text-black mt-3">{description}</div>
      <SingleProductAddTOCart t={t} productId={productId} quantity={1} />
      <div className="more-infor mt-6">
        {/* <div className="flex items-center gap-1 mt-3">
          <i className="ph ph-timer body1"></i>
          <div className="font-semibold">{t("estimatedDelivery")}</div>
          <div className="text-black">14 January - 18 January</div>
        </div> */}
        <div className="flex items-center gap-1 mt-3">
          <i className="ph ph-eye body1"></i>
          <div className="text-black">{t("itemsInStock")}:</div>
          <div className="font-semibold">{stock}</div>
        </div>
        <div className="flex items-center gap-1 mt-3">
          <div className="font-semibold">{t("sku")}</div>
          <div className="text-black">{code}</div>
        </div>
        <div className="flex items-center gap-1 mt-3">
          <div className="font-semibold">{t("categories")}</div>
          <div className="list-category text-black">{category}</div>
        </div>
        <div className="flex items-center gap-1 mt-3">
          <div className="font-semibold">{t("status")}</div>
          <div className="list-tag text-black">
            {status == 1 ? t("inStock") : t("outOfStock")}
          </div>
        </div>
      </div>
      {/* <div className="get-it mt-6 pb-8 border-b border-line">
        <div className="heading5">{t("getItToday")}</div>
        <div className="item flex items-center gap-3 mt-4">
          <FaShippingFast className="text-bsMainBrown text-4xl" />
          <div>
            <div className="text-lg font-semibold">{t("freeShipping")}</div>
            <div className="caption1 text-black font-semibold mt-1">
              {t("freeShippingDescription")}
            </div>
          </div>
        </div>
        <div className="item flex items-center gap-3 mt-4">
          <MdSupportAgent className="text-bsMainBrown text-4xl" />
          <div>
            <div className="text-lg font-semibold">{t("supportEveryday")}</div>
            <div className="caption1 text-black font-semibold mt-1">
              {t("supportEverydayDescription")}
            </div>
          </div>
        </div>
        <div className="item flex items-center gap-3 mt-4">
          <MdAssignmentReturn className="text-bsMainBrown text-4xl" />
          <div>
            <div className="text-lg font-semibold">{t("dayReturns")}</div>
            <div className="caption1 text-black font-semibold mt-1">
              {t("dayReturnsDescription")}
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default SingleProductOverView;
