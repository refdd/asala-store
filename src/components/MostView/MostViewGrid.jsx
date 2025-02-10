import React from "react";
import CardMostView from "../cards/CardMostView";

const productData = [
  {
    title: "زيت الزيتون الطبيعي",
    slug: "1",
    image: "/assets/images/a-product (2).png",
    description: "الزيت الطبيعي ١٠٠٪ دون خلط اي مواد بالمواصفة",
    backgroundColor: "#D1FCBA",
  },
  {
    title: "الطحينة الطبيعية",
    slug: "2",
    image: "/assets/images/a-product (1).png",
    description: "طحينة فاخرة من اجود انواع السمسم الابيض المصري",
    backgroundColor: "#F4D89180",
  },
];

function MostViewGrid() {
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        {productData.map((product, index) => (
          <CardMostView
            key={index}
            title={product.title}
            slug={product.slug}
            image={product.image}
            description={product.description}
            backgroundColor={product.backgroundColor}
          />
        ))}
      </div>
    </div>
  );
}

export default MostViewGrid;
