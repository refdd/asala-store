import Image from "next/image";
import React from "react";

function SingleGallery({ image }) {
  return (
    <div
      style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
      className=""
    >
      <div className="relative w-full h-[273px] md:h-[400px] bg-white ">
        <Image
          alt={"single product image"}
          title={"single product image"}
          src={image}
          // src={"/assets/images/image 1.png"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          loading="lazy"
          className=" object-contain py-3 rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>{" "}
    </div>
  );
}

export default SingleGallery;
