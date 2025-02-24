import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardProduct from "../cards/CardProduct";

// Updated product data from the image
const productsFromImage = [
  {
    id: 1,
    title: "مربى التوت",
    price: "5000",
    offer: 30,
    image: "/assets/images/image 1.png",
  },
  {
    id: 2,
    title: "مربى الثين",
    price: "5000",
    offer: 30,
    image: "/assets/images/image 2.png",
  },
  {
    id: 3,
    title: "مربى الفريز",
    price: "5000",
    offer: 30,
    image: "/assets/images/image 2.png",
  },
  {
    id: 4,
    title: "قنع مجفف",
    price: "5000",
    offer: 30,
    image: "/assets/images/image 4.png",
  },
  {
    id: 5,
    title: "خوسا محفورة ومجففة",
    price: "5000",
    offer: 30,
    image: "/assets/images/image 1.png",
  },
  {
    id: 6,
    title: "باذنجان محفور ومجفف",
    price: "5000",
    offer: 30,
    image: "/assets/images/image 1.png",
  },
];

function ProductsSlider({ products, related_products }) {
  return (
    <div className="block md:hidden">
      <Carousel>
        <CarouselContent className="py-7 px-2 md:px-0">
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="md:basis-1/2 lg:basis-1/4 pl-2 md:pl-6"
            >
              <CardProduct
                title={product.name}
                price={product.price}
                image={product.image}
                slug={product.id}
                related_products={related_products}
                offer={product.offer}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default ProductsSlider;
