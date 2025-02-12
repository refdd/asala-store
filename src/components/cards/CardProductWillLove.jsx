import Image from "next/image";
import React from "react";
import { renderStars } from "../helper/rateingStars";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "@/i18n/routing";
import AddToCartAction from "../addToCart/AddToCartAction";

function CardProductWillLove({
  desc,
  title,
  rate,
  price,
  image,
  discount,
  slug,
}) {
  return (
    <div className="cardProductShadow rounded-2xl bg-white px-3 py-2 flex flex-col">
      {/* image */}
      <Link href={`/listProduct/${slug}`}>
        <div className="relative w-full h-[340px] md:h-[310px]">
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
      </Link>
      {/* title */}
      <Link href={`/listProduct/${slug}`}>
        <div className="flex flex-col">
          <p className="">{title}</p>
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
            <p className="text-2xl font-bold text-bsMainBrown ">{price}</p>
            <p className="text-xl font-semibold text-bsSecondPupl ">دك</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CardProductWillLove;
