import { Link } from "@/i18n/routing";
import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";

function CardCategory({ title, image, idCategory }) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <Link href={`/listProduct?category=${idCategory}`}>
        <div className="relative w-[160px] h-[120px] rounded-tr-[50px] rounded-bl-[20px] cursor-pointer ">
          {/* categoryShadow */}
          <Image
            alt={title}
            title={title}
            src={image}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            loading="lazy"
            className="object-cover rounded-tr-[50px] rounded-bl-[20px]"
          />
        </div>
      </Link>
      <h4 className="text-xl font-bold text-[#000000] text-center w-full">
        {title}
      </h4>
    </div>
  );
}

export default CardCategory;
