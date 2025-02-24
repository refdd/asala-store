"use client";
import { Minus, Plus, X } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";

function CardOrderTable({
  title,
  image,
  price,
  allQuantity,
  onQuantityChange,
  onRemove,
  product_id,
  cartId,
  totalPrice,
}) {
  const [quantity, setQuantity] = useState(allQuantity);
  const t = useTranslations("price");

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    onQuantityChange(quantity + 1, product_id);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      onQuantityChange(quantity - 1, product_id);
    }
  };

  const handleRemove = (cartId) => {
    onRemove(cartId);
  };

  return (
    <div>
      <div className="flex md:mt-7 md:pb-7 mt-5 pb-5 border-b border-line w-full">
        <div className="w-1/2">
          <div className="flex items-center gap-6">
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
            <div>
              <div className="text-lg font-bold">{title}</div>
              <div className="list-select mt-3"></div>
            </div>
          </div>
        </div>
        <div className="w-1/12 price flex items-center justify-center">
          <div className="text-title text-center">
            {price?.toFixed(2)}
            {t("currency")}
          </div>
        </div>
        <div className="w-1/6 flex items-center justify-center">
          <div className="quantity-block bg-[#f7f7f7] md:p-3 p-2 flex items-center justify-between rounded-lg border border-line md:w-[100px] flex-shrink-0 w-20">
            <Plus onClick={handleIncrement} className="cursor-pointer" />
            <div className="text-button quantity">{quantity}</div>
            <Minus onClick={handleDecrement} className="cursor-pointer" />
          </div>
        </div>
        <div className="w-1/6 flex total-price items-center justify-center">
          <div className="text-title text-center">
            {totalPrice}
            {t("currency")}
          </div>
        </div>
        <div className="w-1/12 flex items-center justify-center">
          <X
            onClick={() => {
              handleRemove(cartId);
            }}
            className="text-xl max-md:text-base text-red-500 cursor-pointer hover:text-black duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default CardOrderTable;
