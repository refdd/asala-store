import React from "react";
import HeaderSection from "../headers/HeaderSection";
import MostViewGrid from "./MostViewGrid";

function RowMostView() {
  return (
    <div className="py-4 bg-[#B4E29B33]">
      <div className="container mx-auto px-4">
        <HeaderSection title={"most_viewed"} />
        <MostViewGrid />
      </div>
    </div>
  );
}

export default RowMostView;
