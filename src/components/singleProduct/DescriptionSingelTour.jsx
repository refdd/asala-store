import React from "react";

function DescriptionSingelTour({ description, locale }) {
  return (
    <div>
      <p
        className={`pt-5 ${locale === "ar" ? "text-right" : ""} text-gray-500`}
      >
        {description}
      </p>
    </div>
  );
}

export default DescriptionSingelTour;
