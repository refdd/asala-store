import React from "react";
import MainSlider from "../sliders/MainSlider";
import Image from "next/image";

function MainHeader({ locale, sliders }) {
  const isRTL = locale !== "ar"; // Assuming 'ar' is the RTL locale
  console.log(sliders);

  return (
    <div>
      <MainSlider sliders={sliders} />
    </div>
  );
}

export default MainHeader;
