import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CardCategory from "../cards/CardCategory";

// Define categories data based on the image
const categories = [
  {
    id: 1,
    name: "زيت الزيتون",
    image: "/assets/images/category (1).png",
  },
  {
    id: 2,
    name: "الزيتون",
    image: "/assets/images/category (2).png",
  },
  {
    id: 3,
    name: "المربيات",
    image: "/assets/images/category (3).png",
  },
  {
    id: 4,
    name: "الصلصات",
    image: "/assets/images/category (4).png",
  },
  {
    id: 5,
    name: "المخللات",
    image: "/assets/images/category (5).png",
  },
  {
    id: 6,
    name: "السيروب",
    image: "/assets/images/category (6).png",
  },
  {
    id: 7,
    name: "زيت الزيتون",
    image: "/assets/images/category (1).png",
  },
  {
    id: 8,
    name: "الزيتون",
    image: "/assets/images/category (2).png",
  },
  {
    id: 9,
    name: "المربيات",
    image: "/assets/images/category (3).png",
  },
  {
    id: 49,
    name: "الصلصات",
    image: "/assets/images/category (4).png",
  },
  {
    id: 65,
    name: "المخللات",
    image: "/assets/images/category (5).png",
  },
  {
    id: 56,
    name: "السيروب",
    image: "/assets/images/category (6).png",
  },
];

function CategorySlider() {
  return (
    <div>
      <Carousel>
        <CarouselContent className="py-9">
          {categories.map((category) => (
            <CarouselItem
              key={category.id}
              className="basis-1/2 md:basis-1/2 lg:basis-1/6 pl-2 md:pl-4"
            >
              <CardCategory
                title={category.name}
                image={category.image}
                idCategory={category.id}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default CategorySlider;
