import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CardListProduct from "../cards/CardListProduct";

// Updated product data from the image
const products = [
  {
    id: 1,
    name: "Organic Juice",
    price: "$10.00 - $20.00",
    stars: 5,
    image: "/assets/images/product11.jpg",
  },
  {
    id: 2,
    name: "Fresh Orange",
    price: "$12.00 - $85.00",
    stars: 5,
    image: "/assets/images/product12.png",
  },
  {
    id: 3,
    name: "Organic Cabbage",
    price: "$4.00",
    stars: 5,
    image: "/assets/images/product13.jpg",
  },
  {
    id: 4,
    name: "Brown Bread",
    price: "$6.00",
    stars: 5,
    image: "/assets/images/product14.jpg",
  },
  {
    id: 5,
    name: "Fresh Juice",
    price: "$8.00",
    stars: 5,
    image: "/assets/images/product12.png",
  },
  {
    id: 6,
    name: "Organic Rice",
    price: "$10.00 - $20.00",
    stars: 5,
    image: "/assets/images/product11.jpg",
  },
];

function RelatedProductsSlider({ related_products }) {
  return (
    <div className="">
      <Carousel>
        <CarouselContent className="py-7 px-2 md:px-0">
          {products?.map((product, index) => (
            <CarouselItem
              key={product.id}
              className="md:basis-1/2 lg:basis-1/4 pl-2 md:pl-6"
            >
              <CardListProduct
                key={index}
                title={product.name}
                desc={product.details?.summaryDetails}
                rate={product.stars}
                price={product.price}
                image={product.image}
                slug={product.id} // Pass slug to the card
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default RelatedProductsSlider;
