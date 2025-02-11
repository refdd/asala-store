import Image from "next/image";
import React from "react";

function AboutUsFeatured() {
  return (
    <div className="pt-4 flex flex-col gap-5">
      {/*  */}
      <div className="flex items-center gap-1">
        <div className="relative w-[80px] h-[80px]">
          <Image
            title={"Why Choose Us"}
            alt="Why Choose Us"
            src={"/assets/images/organic-food.png"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            loading="lazy"
            className="object-contain py-3 rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-black">Why Organic?</h3>
          <p className="text-sm text-gray-500 ">
            We're making room for self care today with plan.
          </p>
        </div>
      </div>
      {/*  */}
      <div className="flex items-center gap-1">
        <div className="relative w-[80px] h-[80px]">
          <Image
            title={"Why Choose Us"}
            alt="Why Choose Us"
            src={"/assets/images/organic-food2.png"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            loading="lazy"
            className="object-contain py-3 rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-black">Speciality Produce</h3>
          <p className="text-sm text-gray-500 ">
            We're making room for self care today with plan.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsFeatured;
