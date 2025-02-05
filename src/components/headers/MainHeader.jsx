import React from "react";
import MainSlider from "../sliders/MainSlider";
import Image from "next/image";

function MainHeader({ locale, sliders }) {
  const isRTL = locale !== "ar"; // Assuming 'ar' is the RTL locale

  return (
    <div
      style={{ backgroundImage: `url(/assets/images/bg.png)` }}
      className="py-[100px] relative md:py-24 md:min-h-[calc(100vh-3rem-3rem)] flex items-center bg-no-repeat bg-center bg-cover"
    >
      <div className="container mx-auto px-4">
        <MainSlider sliders={sliders} />
      </div>
      {/* shape 2 */}
      <div
        className={`absolute z-10 top-[41%] hidden md:block ${
          isRTL ? "right-0 rotate-y-180" : "left-0"
        } w-[108px] h-[229px]`}
      >
        <div className="relative w-full h-full">
          <Image
            alt="shape1"
            title="shape1"
            src={"/assets/images/shape (2).svg"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            loading="lazy"
            quality={60}
            className=""
          />
        </div>
      </div>
      {/* shape 3 */}
      <div
        className={`absolute z-10 top-[27%] hidden md:block ${
          isRTL ? "right-[13%] rotate-y-180" : "left-[13%]"
        } w-[59px] h-[92px]`}
      >
        <div className="relative w-full h-full">
          <Image
            alt="shape1"
            title="shape1"
            src={"/assets/images/shape (1).svg"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            loading="lazy"
            quality={60}
            className=""
          />
        </div>
      </div>
      {/* shape 4 */}
      <div
        className={`absolute z-10 top-[40%] hidden md:block ${
          isRTL ? "left-0 rotate-y-180" : "right-0"
        } w-[131px] h-[304.19px]`}
      >
        <div className="relative w-full h-full">
          <Image
            alt="shape1"
            title="shape1"
            src={"/assets/images/shape (3).svg"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            loading="lazy"
            quality={60}
            className=""
          />
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
