import React from "react";
import HeaderSection from "../headers/HeaderSection";
import ProductsSlider from "../sliders/ProductsSlider";
import Image from "next/image";

function RowProducts({ products }) {
  return (
    <div className="bg-[#D9D9D940] py-5 relative ">
      {/* shape icons */}
      <div
        className={`absolute top-[0%] hidden md:block left-0 w-[598px] h-[696px]`}
      >
        <div className="relative w-full h-full">
          <Image
            alt="shape1"
            title="shape1"
            src={"/assets/images/p--prime 1.svg"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            loading="lazy"
            quality={60}
            className=""
          />
        </div>
      </div>
      <div className="container mx-auto px-4">
        <HeaderSection title={"We_chose_for_you"} />
        <ProductsSlider products={products} />
      </div>
    </div>
  );
}

export default RowProducts;
