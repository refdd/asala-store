import React from "react";
import CardListProduct from "../cards/CardListProduct";
import { AlertCircle } from "lucide-react";

// Dummy product data with manually added slugs
const dummyProducts = [
  {
    id: 1,
    title: "Premium Leather Jacket",
    desc: "Stay stylish and warm with this high-quality leather jacket. Perfect for any occasion.",
    rate: 3,
    price: "19",
    image: "/assets/images/product1.jpg",
    slug: "premium-leather-jacket", // Manually added slug
  },
  {
    id: 2,
    title: "Wireless Noise-Cancelling Headphones",
    desc: "Immerse yourself in music with these top-rated wireless headphones featuring noise-cancellation technology.",
    rate: 3,
    price: "29",
    image: "/assets/images/product (1).jpg",
    slug: "wireless-noise-cancelling-headphones", // Manually added slug
  },
  {
    id: 3,
    title: "Smart Home Security Camera",
    desc: "Keep your home safe with this smart security camera that offers 24/7 monitoring and real-time alerts.",
    rate: 4,
    price: "39",
    image: "/assets/images/product (1).jpg",
    slug: "smart-home-security-camera", // Manually added slug
  },
  {
    id: 4,
    title: "Organic Green Tea Pack",
    desc: "Enjoy the health benefits of organic green tea with this premium pack of 50 tea bags.",
    rate: 1,
    price: "49",
    image: "/assets/images/product (2).jpg",
    slug: "organic-green-tea-pack", // Manually added slug
  },
  {
    id: 5,
    title: "Yoga Mat with Carry Strap",
    desc: "Practice yoga comfortably with this eco-friendly, non-slip yoga mat that comes with a convenient carry strap.",
    rate: 4,
    price: "59",
    image: "/assets/images/product (3).jpg",
    slug: "yoga-mat-with-carry-strap", // Manually added slug
  },
];

function ListProductContainer({ products }) {
  if (!products || products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 mt-8">
        <AlertCircle className="w-12 h-12 text-gray-500 mb-4" />{" "}
        {/* Lucide icon */}
        <p className="text-gray-700 text-lg text-center">
          لا توجد منتجات متاحة حاليا. الرجاء التحقق لاحقا.
        </p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-5 pt-8">
      {products.map((product, index) => (
        <CardListProduct
          key={index}
          title={product.name}
          desc={product.details?.summaryDetails}
          rate={product.stars}
          price={product.price}
          image={product.image}
          slug={product.id} // Pass slug to the card
        />
      ))}
    </div>
  );
}

export default ListProductContainer;
