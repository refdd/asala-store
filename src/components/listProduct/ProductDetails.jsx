import { getItem } from "@/utils/featchApi";
import Image from "next/image";
import React from "react";

function ProductDetails({ product, slug }) {
  // const product1 = await getItem(`/website/getProduct?id=${slug}`);
  const {
    name,
    image,
    details,
    category_name,
    quantity,
    sku,
    stars,
    is_activated,
    price,
    discountedPrice,
  } = product?.data;

  return (
    <div className="flex flex-col md:flex-row gap-6 pt-6">
      <div className="">
        <div className="relative w-full md:w-[400px] h-[400px]">
          <Image
            alt={"product image"}
            title={"Product Image"}
            src={image}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            loading="lazy"
            className="object-cover rounded-xl"
          />
        </div>
      </div>
      <div className="">
        <div className="space-y-6">
          <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">تفاصيل المنتج</h3>
              <p className="text-lg text-gray-700">{details?.detail}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-500">
              <div className="flex gap-2 items-center">
                <strong>التصنيف:</strong>
                <span>{category_name}</span>
              </div>
              <div className="flex gap-2 items-center">
                <strong>المخزون:</strong>
                <span>{quantity}</span>
              </div>
              <div className="flex gap-2 items-center">
                <strong>الكود:</strong>
                <span>{sku}</span>
              </div>
              <div className="flex gap-2 items-center">
                <strong>التقييم:</strong>
                <span className="flex items-center">
                  {stars} <span className="text-yellow-400 ml-1">⭐</span>
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <strong>حالة المنتج:</strong>
                <span>{is_activated === 1 ? "متاح" : "غير متاح"}</span>
              </div>
            </div>
            <div className="flex items-center gap-6 mt-6">
              <span className="text-4xl font-semibold text-green-600">
                ${price}
              </span>
              <span className="text-xl font-medium text-red-500 line-through">
                ${discountedPrice}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
