import React from "react";
import GridOurNumbers from "./GridOurNumbers";

function OurNumbers() {
  return (
    <div className="py-28 mb-20  relative bg-[#F4F6E8]">
      {/* top  shape  */}
      <div
        style={{
          backgroundImage: "url('/assets/images/bg-section3.png')",
          backgroundSize: "100% auto",
        }}
        className="absolute top-0 left-0 w-full h-[150px] bg-no-repeat bg-top"
      ></div>
      <GridOurNumbers />
      {/* bottom shape */}
      <div
        style={{
          backgroundImage: "url('/assets/images/bg-section4.png')",
          backgroundSize: "100% auto",
        }}
        className="absolute bottom-0 left-0 w-full h-[150px] bg-bottom bg-no-repeat "
      ></div>
    </div>
  );
}

export default OurNumbers;
