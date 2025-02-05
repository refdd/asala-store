import React from "react";
import HeaderSection from "../headers/HeaderSection";
import CategorySlider from "../sliders/CategorySlider";

function RowCategory({ categories }) {
  return (
    <div className=" py-5 relative ">
      <div className="container mx-auto px-4">
        <HeaderSection title={"Select_category"} />
        <CategorySlider categories={categories} />
      </div>
    </div>
  );
}

export default RowCategory;
