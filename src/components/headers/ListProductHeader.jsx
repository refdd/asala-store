"use client"; // Add this if it's a client component
import { ShoppingCart } from "lucide-react";
import React from "react";
import { CartDrawer } from "../CartDrawer/CartDrawer";
import { useTranslations } from "next-intl";

function ListProductHeader() {
  const t = useTranslations("listProductHeader");

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between py-5 border-b">
        <h4 className="text-2xl text-bsMainPuple font-semibold">
          {t("storeName")}
        </h4>
        <div className="">
          <CartDrawer />
        </div>
      </div>
    </div>
  );
}

export default ListProductHeader;
