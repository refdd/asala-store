import Image from "next/image";
import React from "react";
import { renderStars } from "../helper/rateingStars";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "@/i18n/routing";
import AddToCartAction from "../addToCart/AddToCartAction";

function CardProduct({
  desc,
  title,
  rate,
  price,
  image,
  discount,
  slug,
  related_products,
}) {
  return (
    <div className="group cardProductShadow rounded-2xl bg-white px-3 py-2 flex flex-col transition-all duration-300 ease-in-out hover:cardHoverAnimation">
      {/* rate and offers */}
      {!related_products && (
        <div className="flex items-center justify-between pb-2">
          <div className="flex items-center gap-2">{renderStars(rate)}</div>
          {discount !== 0 && (
            <div className="flex items-center">
              <p className="text-4xl font-semibold text-bsSecondPupl -ml-2 -mt-4">
                %
              </p>
              <p className="text-2xl font-bold text-bsMainPuple leading-[56.22px]">
                {discount}
              </p>
            </div>
          )}
        </div>
      )}
      {/* image */}
      <Link href={`/listProduct/${slug}`}>
        <div className="relative w-full h-[261px] md:h-[310px] overflow-hidden rounded-xl">
          <Image
            alt={title}
            title={title}
            src={image}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            loading="lazy"
            className="object-cover rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
      </Link>
      {/* title */}
      <Link href={`/listProduct/${slug}`}>
        <div className="flex flex-col">
          <p className="text-base font-semibold text-black">{title}</p>
          <p className="text-sm break-words truncate md:max-w-full">{desc}</p>
        </div>
      </Link>
      <div className="pt-4 flex items-center justify-between">
        {/* add to cart */}
        <div className="">
          <AddToCartAction productId={slug} quantity={1} />
        </div>
        {/* price */}
        <Link href={`/listProduct/${slug}`}>
          <div className="flex items-end gap-1 ">
            <p className="text-2xl font-bold text-bsMainPuple ">{price}</p>
            <p className="text-xl font-semibold text-bsSecondPupl ">دك</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CardProduct;
