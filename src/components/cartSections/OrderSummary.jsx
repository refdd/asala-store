"use client";
import React from "react";
import { Button } from "../ui/button";
import { Link } from "@/i18n/routing";
import { useSelector } from "react-redux";
import { useTranslations } from "next-intl";

function OrderSummary({}) {
  const { cartinfo, cartItems } = useSelector((state) => state.cartItems);
  const t = useTranslations("orderSummary");
  const t1 = useTranslations("price");

  return (
    <div className="k bg-[#f7f7f7] p-6 rounded-2xl h-fit">
      <h4 className="text-lg font-semibold">{t("orderSummary")}</h4>
      <div className="flex flex-col ">
        <div className="flex items-center justify-between py-4 border-b">
          <p>{t("pieces", { cart_count: cartinfo?.cart_count })}</p>
          <p className="text-lg font-semibold">{t("cartCount")}</p>
        </div>
        <div className="flex items-center justify-between py-4 border-b">
          <p>{cartinfo?.sum_quantity}</p>
          <p className="text-lg font-semibold">{t("totalQuantity")}</p>
        </div>
        <div className="flex items-center justify-between py-4">
          <p className="text-lg font-semibold">
            {cartinfo?.total_price} {t1("currency")}
          </p>
          <p className="text-xl font-bold">{t("total")}</p>
        </div>
        <Link href={`/checkout`}>
          <Button
            variant="outline"
            className="w-full bg-bsMainPuple text-white hover:bg-bsSecondPupl hover:text-white h-10"
          >
            {t("proceedToCheckout")}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default OrderSummary;
