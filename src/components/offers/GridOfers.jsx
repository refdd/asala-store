import React from "react";
import CardToDayOffer from "../cards/CardToDayOffer";

// Sample data array
const offersData = [
  {
    title: "Offer 1",
    image: "/assets/images/offer2.png", // Replace with your image path
  },
  {
    title: "Offer 2",
    image: "/assets/images/offer1.png", // Replace with your image path
  },
  {
    title: "Offer 3",
    image: "/assets/images/offer3.png", // Replace with your image path
  },
];

function GridOfers({ todayoffer }) {
  return (
    <div className="py-7 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-16 xl:gap-20">
      {todayoffer.map((offer, index) => (
        <CardToDayOffer
          key={index} // Always use a unique key when mapping
          title={offer.name}
          image={offer.image}
          mainCard={index == 1 ? true : false}
        />
      ))}
    </div>
  );
}

export default GridOfers;
