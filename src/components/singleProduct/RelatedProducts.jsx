import React from "react";
import HeaderSection from "../headers/HeaderSection";
import ProductsSlider from "../sliders/ProductsSlider";
import Image from "next/image";
import RelatedProductsSlider from "../sliders/RelatedProductsSlider";

function RelatedProducts({ products }) {
  return (
    <div className="mt-10">
      <div className="">
        <HeaderSection title={"related_products"} />
        <RelatedProductsSlider products={products} related_products={true} />
      </div>
    </div>
  );
}

export default RelatedProducts;
