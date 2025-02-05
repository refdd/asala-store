import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CardCategory from "../cards/CardCategory";

// Define your category data
// const categories = [
//   { id: 1, title: "مستحضرات تجميل ", image: "/assets/images/catgory (1).png" },
//   { id: 2, title: "العكبر الطبيعي", image: "/assets/images/catgory (2).png" },
//   { id: 3, title: "العسل الطبيعي", image: "/assets/images/catgory (3).png" },
//   // Add more categories as needed
// ];

function CategorySlider({ categories }) {
  return (
    <div className="">
      <Carousel>
        <CarouselContent className="py-7 px-2 md:px-24 xl:px-32">
          {categories.map((category) => (
            <CarouselItem
              key={category.id}
              className="basis-1/2 md:basis-1/2 lg:basis-1/5 pl-2 md:pl-4"
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
