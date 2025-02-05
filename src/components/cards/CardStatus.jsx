import { Hourglass } from "lucide-react";
import React from "react";

function CardStatus({ title, value, icon: Icon }) {
  return (
    <div className="flex items-center justify-between p-5 border border-[#e9e9e9] rounded-lg shadow-lg">
      <div className="counter">
        <span className="text-gray-400">{title}</span>
        <h5 className="heading5 mt-1">{value}</h5>
      </div>
      <div>
        <Icon className="text-4xl" />
      </div>
    </div>
  );
}

export default CardStatus;
