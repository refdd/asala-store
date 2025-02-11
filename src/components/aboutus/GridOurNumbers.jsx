import React from "react";
import CardNumber from "../cards/CardNumber";
import { FaUsersGear, FaUsersRays } from "react-icons/fa6";
import { FaAward, FaBoxOpen } from "react-icons/fa";

const numbersData = [
  { icon: FaUsersGear, number: "1,542+", label: "Satisfied Clients" },
  { icon: FaUsersRays, number: "182+", label: "Expert Team" },
  { icon: FaBoxOpen, number: "285+", label: "Activate Products" },
  { icon: FaAward, number: "27+", label: "Awards Winning" },
];

function GridOurNumbers() {
  return (
    <div className="container mx-auto py-5 md:py-20 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {numbersData.map((data, index) => (
          <CardNumber key={index} {...data} />
        ))}
      </div>
    </div>
  );
}

export default GridOurNumbers;
