import React from "react";
import WillLoveSlider from "../sliders/WillLoveSlider";
import { getData } from "@/utils/featchApi";
import HeaderWillLove from "../headers/HeaderWillLove";

async function Willlovetoo({ locale, categoryId }) {
  const listProduct = await getData(
    `/website/getProducts?id&name&category_id=${categoryId || ""}&sku=`,
    locale
  );
  return (
    <div className="mt-5">
      <HeaderWillLove />
      <WillLoveSlider products={listProduct?.data?.items} />
    </div>
  );
}

export default Willlovetoo;
