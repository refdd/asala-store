import React from "react";
import { FaUsersGear } from "react-icons/fa6";

function CardNumber({ icon: Icon, number, label }) {
  return (
    <div className="flex items-center gap-4">
      {/* icon */}
      <div className="">
        <Icon className="text-bsMainBrown text-5xl" />
      </div>
      {/* title */}
      <div className="flex flex-col gap-1">
        <h3 className="text-4xl font-bold text-black">{number}</h3>
        <p className="text-gray-500 font-semibold">{label}</p>
      </div>
    </div>
  );
}

export default CardNumber;
