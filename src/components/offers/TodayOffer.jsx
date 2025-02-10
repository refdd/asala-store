import React from "react";
import HeaderSection from "../headers/HeaderSection";
import GridOfers from "./GridOfers";
import Image from "next/image";

function TodayOffer({ todayoffer }) {
  return (
    <div className=" py-5 bg-[#FFFF1E1A] relative ">
      <div className="container mx-auto px-4">
        <HeaderSection title={"Today_offers"} />
        <GridOfers todayoffer={todayoffer} />
      </div>
    </div>
  );
}

export default TodayOffer;
