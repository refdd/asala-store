"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import MainSliderContent from "../contentText/MainSliderContent";
import NavigationDots from "./NavigationDots";

const sliderData = [
  {
    image: "/assets/images/panner1.png",
    name: "كريم شان 1",
    detail: "العرض المميز اليوم من كريم شان بخصم 30% الواقي الشمسي الالماني",
  },
  {
    image: "/assets/images/panner1.png",
    name: "كريم شان 2",
    detail: "عرض خاص على كريم شان الجديد بخصم 20%",
  },
  {
    image: "/assets/images/panner1.png",
    name: "كريم شان 3",
    detail: "خصم 25% على جميع منتجات كريم شان",
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
    <div
      style={{ backgroundImage: `url(${sliders[currentSlide]?.image})` }}
      className="py-[100px] relative md:py-0 md:min-h-[calc(100vh-3rem-3rem)] flex items-center bg-no-repeat bg-center bg-cover"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Image */}
          <div className="md:col-span-3"></div>

          {/* Content */}
          <MainSliderContent
            title={sliders[currentSlide]?.name}
            description={sliderData[currentSlide]?.detail}
            // description={sliders[currentSlide].detail}
            link={sliders[currentSlide]?.link}
          />
        </div>
      </div>
      {/* Navigation Dots */}
      <NavigationDots
        sliderData={sliders}
        handleDotClick={handleDotClick}
        currentSlide={currentSlide}
      />
    </div>
  );
}

export default MainSlider;
