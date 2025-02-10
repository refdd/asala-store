"use client";
import { useLocale } from "next-intl";
import React from "react";

function NavigationDots({ sliderData, handleDotClick, currentSlide }) {
  const locale = useLocale();
  const isRTL = locale === "ar";
  return (
    <div
      className={`absolute hidden md:block ${
        isRTL ? "left-10  " : "right-10"
      } top-[90%] w-full`}
    >
      <div className="flex justify-center gap-2 mt-4 md:col-span-2 md:justify-end">
        {sliderData?.map((slide, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-bsMainGreen" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default NavigationDots;
