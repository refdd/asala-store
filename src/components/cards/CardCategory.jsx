import { Link } from "@/i18n/routing";
import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";

function CardCategory({ title, image, idCategory }) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center  ">
      <Link href={`/listProduct?category=${idCategory}`}>
        <div className="relative w-[120px] h-[120px] rounded-full  imageCategory cursor-pointer ">
          {/*  cardProductShadow*/}
          <Image
            alt={title}
            title={title}
            src={image}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            loading="lazy"
            className="object-cover rounded-full "
          />
          <div className="borderCategory rounded-full top-0 left-0 "></div>
          <div className="categoryLayout flex items-center justify-center">
            <Search className="w-7 h-7 text-bsMainPuple " />
          </div>
        </div>
      </Link>
      <h4 className="text-xl font-bold text-[#000000] text-center w-full ">
        {title}
      </h4>
    </div>
  );
}

export default CardCategory;
