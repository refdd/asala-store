import React from "react";
import HeaderSection from "../headers/HeaderSection";
import GridOfers from "./GridOfers";
import Image from "next/image";

function TodayOffer({ todayoffer }) {
  return (
    <div className=" py-5 bg-[#D9D9D940] relative ">
      {/* shape icons */}
      <div
        className={`absolute top-[-7%] hidden md:block left-0 w-[400px] h-[400px]`}
      >
        <div className="relative w-full h-full">
          <Image
            alt="shape1"
            title="shape1"
            src={"/assets/images/sale 1.svg"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            loading="lazy"
            quality={60}
            className=""
          />
        </div>
      </div>
      <div className="container mx-auto px-4">
        <HeaderSection title={"Today_offers"} />
        <GridOfers todayoffer={todayoffer} />
      </div>
    </div>
  );
}

export default TodayOffer;
