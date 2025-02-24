import React from "react";
import HeaderSection from "../headers/HeaderSection";
import ProductsSlider from "../sliders/ProductsSlider";
import GridProducts from "./GridProducts";

function MostRequested({ mostRequestedProducts }) {
  return (
    <div className=" py-7 relative ">
      <div className="container mx-auto px-4">
        <HeaderSection title={"most_requested_products"} />
        <ProductsSlider products={mostRequestedProducts} />
        <GridProducts products={mostRequestedProducts} />
      </div>
    </div>
  );
}

export default MostRequested;
