"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import MainSliderContent from "../contentText/MainSliderContent";

const sliderData = [
  {
    image: "/assets/images/banner.png",
    title: "كريم شان 1",
    description:
      "العرض المميز اليوم من كريم شان بخصم 30% الواقي الشمسي الالماني",
  },
  {
    image: "/assets/images/banner.png",
    title: "كريم شان 2",
    description: "عرض خاص على كريم شان الجديد بخصم 20%",
  },
  {
    image: "/assets/images/banner.png",
    title: "كريم شان 3",
    description: "خصم 25% على جميع منتجات كريم شان",
  },
];

function MainSlider({ sliders }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliders.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Image */}
        <div className="flex items-center justify-center">
          <div className="relative w-full h-[260px] md:h-[380px] md:w-[400px] z-20">
            <Image
              alt={"Slider Image"}
              title={"Slider Image"}
              src={sliders[currentSlide].image}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
              priority
              className="object-cover "
            />
          </div>
        </div>

        {/* Content */}
        <MainSliderContent
          title={sliders[currentSlide].name}
          description={sliders[currentSlide].detail}
        />

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-4 md:col-span-2 md:justify-end">
          {sliders.map((slide, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-bsMainPuple" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainSlider;
