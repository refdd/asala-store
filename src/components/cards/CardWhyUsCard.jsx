import React from "react";

function CardWhyUsCard({ icon, title, description }) {
  return (
    <div
      style={{ boxShadow: "0 0 29px rgba(12, 12, 12, 5%)" }}
      className="relative z-20 py-8 px-5 bg-white  group hover:bg-bsMainBrown transition-all duration-500 "
    >
      <div className="flex  flex-col gap-3 justify-center items-center">
        {/* icon */}
        <div
          style={{ boxShadow: "0 0 0 14px #82d6272e" }}
          className="relative h-[52px] w-[52px] rounded-full bg-bsMainBrown group-hover:bg-white flex items-center justify-center "
        >
          {icon}
        </div>
        {/* title */}
        <h3 className="text-xl font-semibold text-black group-hover:text-white pt-4">
          {title}
        </h3>
        {/* desc */}
        <div className="">
          <p className="text-sm text-center text-gray-500 group-hover:text-white">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardWhyUsCard;
