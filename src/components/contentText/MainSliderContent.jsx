import React from "react";

function MainSliderContent({ title, description }) {
  return (
    <div className="flex flex-col md:justify-center gap-3 ">
      <h1 className="text-2xl font-semibold text-white md:text-4xl">{title}</h1>
      <p className="text-white text-xl md:text-2xl font-semibold md:w-[400px] md:leading-[50px]">
        {description}
      </p>
      <div className="flex items-center justify-end md:justify-start  pt-10">
        <button className="px-7 py-3 rounded-xl bg-[#E4A4FB80] border border-white text-white">
          {" "}
          Order Now
        </button>
      </div>
    </div>
  );
}

export default MainSliderContent;
