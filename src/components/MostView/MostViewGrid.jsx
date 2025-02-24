import React from "react";
import CardMostView from "../cards/CardMostView";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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

function MostViewGrid({ products }) {
  const colors = ["#D1FCBA", "#F4D89180", "#FFD1DC", "#A7C7E7"];
  return (
    <div className="py-10">
      <Carousel>
        <CarouselContent>
          {/* <CarouselItem className="md:basis-1/2 lg:basis-1/3"></CarouselItem> */}
          {products?.map((product, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
              <CardMostView
                title={product.name}
                slug={product.id}
                image={product.image}
                description={product.details?.summaryDetails}
                backgroundColor={colors[index % colors.length]}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
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
      </div> */}
    </div>
  );
}

export default MostViewGrid;
