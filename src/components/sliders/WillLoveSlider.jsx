import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardProduct from "../cards/CardProduct";
import CardProductWillLove from "../cards/CardProductWillLove";

// Dummy product data
const dummyProducts = [
  {
    id: 1,
    title: "Premium Leather Jacket",
    desc: "Stay stylish and warm with this high-quality leather jacket. Perfect for any occasion.",
    rate: 3,
    price: "19",
    image: "/assets/images/product1.jpg",
  },
  {
    id: 2,
    title: "Wireless Noise-Cancelling Headphones",
    desc: "Immerse yourself in music with these top-rated wireless headphones featuring noise-cancellation technology.",
    rate: 3,
    price: "29",
    image: "/assets/images/product (1).jpg",
  },
  {
    id: 3,
    title: "Smart Home Security Camera",
    desc: "Keep your home safe with this smart security camera that offers 24/7 monitoring and real-time alerts.",
    rate: 4,
    price: "39",
    image: "/assets/images/product (1).jpg",
  },
  {
    id: 4,
    title: "Organic Green Tea Pack",
    desc: "Enjoy the health benefits of organic green tea with this premium pack of 50 tea bags.",
    rate: 1,
    price: "49",
    image: "/assets/images/product (2).jpg",
  },
  {
    id: 5,
    title: "Yoga Mat with Carry Strap",
    desc: "Practice yoga comfortably with this eco-friendly, non-slip yoga mat that comes with a convenient carry strap.",
    rate: 4,
    price: "59",
    image: "/assets/images/product (3).jpg",
  },
];

function WillLoveSlider({ products }) {
  return (
    <div className="">
      <Carousel>
        <CarouselContent className="py-7 px-2 md:px-0">
          {products?.map((product) => (
            <CarouselItem
              key={product.id}
              className="md:basis-1/2 lg:basis-1/2 pl-2 md:pl-4"
            >
              <CardProductWillLove
                title={product.name}
                desc={product.details?.summaryDetails}
                rate={product.stars}
                price={product.price}
                image={product.image}
                discount={product.discount}
                slug={product.id}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default WillLoveSlider;
