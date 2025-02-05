import React from "react";
import { renderStars } from "../helper/rateingStars";
import Image from "next/image";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "@/i18n/routing";
import dynamic from "next/dynamic";
import AddToCartAction from "../addToCart/AddToCartAction";
const ShowProductDatalis = dynamic(() =>
  import("../listProduct/ShowProductDatalis")
);

function CardListProduct({ rate, title, image, price, slug }) {
  return (
    <div className="cardProductShadow rounded-2xl bg-white px-3 py-2 flex flex-col">
      {/* rate and offers */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">{renderStars(rate)}</div>
      </div>
      {/* image */}
      <div className="relative w-full h-[340px] md:h-[310px] mt-4 group">
        <Image
          alt={title}
          title={title}
          src={image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          loading="lazy"
          className="object-cover rounded-xl"
        />
        {/* Quick View Button */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center z-30">
          <ShowProductDatalis slug={slug} />
        </div>
      </div>
      {/* title */}
      <Link href={`/listProduct/${slug}`}>
        <div className="flex flex-col">
          <p className="text-base font-bold text-black">{title}</p>
          {/* <p className="text-sm break-words truncate md:max-w-full">{desc}</p> */}
        </div>
      </Link>

      <div className="pt-4 flex items-center justify-between">
        {/* price */}
        <Link href={`/listProduct/${slug}`}>
          <div className="flex items-end ">
            <p className="text-2xl font-bold text-bsMainPuple ">{price}</p>
            <p className="text-xl font-semibold text-bsSecondPupl ">دك</p>
          </div>
        </Link>
        {/* add to cart */}
        <div className="">
          <AddToCartAction productId={slug} quantity={1} />
        </div>
      </div>
    </div>
  );
}

export default CardListProduct;
