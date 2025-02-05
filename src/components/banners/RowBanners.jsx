import Image from "next/image";
import React from "react";

function RowBanners({ image_offer }) {
  return (
    <div className=" py-5 relative  ">
      <div className="container mx-auto px-4">
        <div className="relative w-full h-[330px] md:h-[494.58px] rounded-[30px]">
          <Image
            alt={image_offer?.name}
            title={image_offer?.name}
            src={image_offer?.image}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            loading="lazy"
            className="object-cover rounded-xl z-20"
          />
        </div>

        {/* layout */}
        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[97%] h-[354px] flex items-center justify-center bg-[#E4A4FB33] z-10 "></div>
        {/* button */}
        <div className="absolute top-[83%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center z-30 ">
          <button className="px-7 py-3 rounded-xl bg-[#E4A4FB80]   text-white">
            {" "}
            Order Now
          </button>
        </div>
        {/* content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] md:w-full h-[40%] flex items-center justify-center text-white z-30  ">
          <p className=" text-center text-lg md:text-2xl font-bold text-white">
            {image_offer?.detail}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RowBanners;
