import React from "react";
import CardToDayOffer from "../cards/CardToDayOffer";

// Sample data array
const offersData = [
  {
    title: "Offer 2",
    image: "/assets/images/offer (2).png", // Replace with your image path
  },
  {
    title: "Offer 3",
    image: "/assets/images/offer (3).png", // Replace with your image path
  },
  {
    title: "Offer 1",
    image: "/assets/images/offer (1).png", // Replace with your image path
  },
];

function GridOfers({ todayoffer }) {
  return (
    <div className="py-7  grid md:grid-flow-col md:grid-rows-2 gap-4 md:gap-14">
      {offersData.map((offer, index) => (
        <CardToDayOffer
          key={index}
          title={offer.title}
          image={offer.image}
          mainCard={index === 2}
          indexCard={index}
          anhterCards={index !== 2}
          productId={offer.id}
          quantity={1}
        />
      ))}
    </div>
  );
}

export default GridOfers;
