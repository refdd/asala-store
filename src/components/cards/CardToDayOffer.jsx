import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

function CardToDayOffer({ title, image, mainCard }) {
  return (
    <div
      className={`${mainCard && " md:mt-0 lg:mt-[80px]"
        } offerCard cursor-pointer`}
    >
      <div className={`relative w-full h-[300px] md:h-[421px]  `}>
        <Image
          alt={title}
          title={title}
          src={image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          loading="lazy"
          className="object-cover rounded-[20px]"
        />
        {/* button */}
        <div className="absolute top-[83%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center ">
          <Button className="px-7 h-12 py-3 hover:bg-bsPurple rounded-xl bg-[#E4A4FB80] border border-white text-white">
            {" "}
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CardToDayOffer;
