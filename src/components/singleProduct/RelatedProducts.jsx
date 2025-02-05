import React from "react";
import HeaderSection from "../headers/HeaderSection";
import ProductsSlider from "../sliders/ProductsSlider";
import Image from "next/image";

function RelatedProducts({ products }) {
  return (
    <div className="mt-10">
      <div className="">
        <HeaderSection title={"related_products"} />
        <ProductsSlider products={products} related_products={true} />
      </div>
    </div>
  );
}

export default RelatedProducts;
