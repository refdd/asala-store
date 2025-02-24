"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Thumbs, Navigation } from "swiper/modules";
import SingleGallery from "./SingleGallery";
import Image from "next/image";

export default function GallerySingleProduct({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="md:col-span-3">
      <>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs, Navigation]}
          className="mySwiper2"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="!p-10">
              <SingleGallery image={image?.image} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={30}
          slidesPerView={6}
          breakpoints={{
            280: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 32,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[60px] md:h-[100px] bg-white border ">
                <Image
                  alt={`Nature ${index + 1}`}
                  title={`Nature ${index + 1}`}
                  src={image}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                  loading="lazy"
                  className="object-cover py-3 rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
}
