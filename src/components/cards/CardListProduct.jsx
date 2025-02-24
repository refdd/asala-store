import Image from "next/image";
import React from "react";
import { IoMdStar } from "react-icons/io";
import { Button } from "../ui/button";
import { Link } from "@/i18n/routing";

function CardListProduct({ title, price, image, slug, rate }) {
  // Function to render stars based on the rate
  const renderStars = (rate) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rate) {
        stars.push(<IoMdStar key={i} className="text-lg text-[#efb343]" />);
      } else {
        stars.push(<IoMdStar key={i} className="text-lg text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div
      style={{ boxShadow: "0 8px 38px rgba(12,12,12,6%)" }}
      className="bg-white  border-bsMainBrown relative group  transition-all"
    >
      <div className="">
        <Link href={`/listProduct/${slug}`}>
          <div className="relative w-full h-[290px] md:h-[310px]">
            <Image
              alt={title}
              title={title}
              src={image}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
              loading="lazy"
              className="object-contain py-5 scale-95 rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-100"
            />
          </div>
        </Link>
      </div>
      {/* title */}
      <div className="pt-3 pb-11 px-7 flex flex-col  items-center justify-center">
        <Link href={`/listProduct/${slug}`}>
          <p className="cursor-pointer text-lg font-bold text-black md:hover:text-bsMainBrown">
            {title}
          </p>
        </Link>
        <p className="text-lg font-semibold text-bsMainBrown">{price}$</p>
        <div className="flex items-center ">{renderStars(rate)}</div>
      </div>
      <div
        className="
      absolute w-[93%] h-[93%] md:w-[93%] md:h-[93%] border-2 md:top-3.5 md:left-3.5 top-4 left-4  border-bsMainBrown  transition-all
      group-hover:w-full group-hover:h-full group-hover:border-[4px] group-hover:top-0 group-hover:left-0 group-hover:right-0 group-hover:bottom-0
      "
      ></div>
      <div className="absolute  group-hover:top-[98%] top-[103%] invisible  group-hover:visible transition-all left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center  ">
        <Link href={`/listProduct/${slug}`}>
          <Button
            className={
              "h-[44px] rounded-[44px] px-10 font-semibold hover:bg-bsMainGreen bg-bsMainBrown"
            }
          >
            Select options
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default CardListProduct;
