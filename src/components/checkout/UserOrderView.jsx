"use client";
import React from "react";
import CardUserOrder from "../cards/CardUserOrder";
import { useSelector } from "react-redux";
import { ScrollArea } from "../ui/scroll-area";
import { useTranslations } from "next-intl";

function UserOrderView() {
  const { cartinfo, cartItems } = useSelector((state) => state.cartItems);
  const t = useTranslations("userOrder");
  const t1 = useTranslations("price");

  return (
    <div className="md:col-span-2">
      <h4 className="text-2xl text-bsMainPuple font-semibold">{t("title")}</h4>
      {/* Product List */}
      <ScrollArea className="grid grid-cols-1 gap-4 md:h-[400px] px-4">
        {cartItems?.items?.map((item) => (
          <CardUserOrder
            key={item.id}
            title={item.product.name}
            image={item.product.image}
            size="XS"
            color="green"
            quantity={item.quantity}
            price={item.product.selling_price}
          />
        ))}
      </ScrollArea>
      {/* Product Overview */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between py-4 border-b">
          <p>
            {cartinfo?.cart_count} {t("pieces")}
          </p>
          <p className="text-lg font-semibold">{t("cart_count")}</p>
        </div>
        <div className="flex items-center justify-between py-4 border-b">
          <p>{cartinfo?.sum_quantity}</p>
          <p className="text-lg font-semibold">{t("total_quantity")}</p>
        </div>
        <div className="flex items-center justify-between py-4">
          <p className="text-lg font-semibold">
            {cartinfo?.total_price} {t1("currency")}
          </p>
          <p className="text-xl font-bold">{t("total")}</p>
        </div>
      </div>
    </div>
  );
}

export default UserOrderView;
