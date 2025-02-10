"use client";
import React from "react";
import CardProduct from "../cards/CardProduct";
import FristMianProduct from "../cards/FristMianProduct";
import { useLocale } from "next-intl";
import { Button } from "../ui/button";
const productsFromImage = [
  {
    id: 1324,
    title: "مربى التوت",
    price: "5000",
    offer: 30,
    image: "/assets/images/image 1.png",
  },
  {
    id: 3242,
    title: "مربى الثين",
    price: "5000",
    offer: 30,
    image: "/assets/images/image 2.png",
  },
  {
    id: 234241,
    title: "مربى الفريز",
    price: "5000",
    offer: 30,
    image: "/assets/images/image 2.png",
  },
  {
    id: 46564,
    title: "قنع مجفف",
    price: "5000",
    offer: 30,
    image: "/assets/images/image 4.png",
  },
  {
    id: 555454,
    title: "خوسا محفورة ومجففة",
    price: "5000",
    offer: 30,
    image: "/assets/images/image 1.png",
  },
  {
    id: 623425,
    title: "باذنجان محفور ومجفف",
    price: "5000",
    offer: 30,
    image: "/assets/images/image 1.png",
  },
  {
    id: 14234,
    title: "مربى التوت",
    price: "5000",
    offer: 30,
    image: "/assets/images/image 1.png",
  },
];
function GridProducts({ related_products }) {
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div className="hidden md:block pt-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 ">
        <FristMianProduct
          image={"/assets/images/11 1.png"}
          offer={30}
          cardColor={"#FFEBEB"}
          roundedPosition={isRTL ? "rounded-tr-[50px]" : "rounded-tl-[50px]"}
        />
        {productsFromImage.slice(0, 3).map((product) => (
          <>
            <CardProduct
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              slug={product.id}
              related_products={related_products}
              offer={product.offer}
            />
          </>
        ))}
        <div className="col-span-4 flex items-center gap-2 ">
          <div className="h-[1px] flex-1 bg-[#82D627CC]"></div>
          <span className="w-3 h-3 rounded-full bg-[#82D627CC]"></span>
          <span className="w-3 h -3 rounded-full bg-[#82D627CC]"></span>
        </div>
        <FristMianProduct
          image={"/assets/images/12.png"}
          cardColor={"#82D6274D"}
          roundedPosition={isRTL ? "rounded-br-[50px]" : "rounded-bl-[50px]"}
        />

        {productsFromImage.slice(3, 6).map((product) => (
          <CardProduct
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            slug={product.id}
            related_products={related_products}
            offer={product.offer}
          />
        ))}
      </div>
      <div className="mt-16 flex items-center justify-center">
        <Button className="bg-bsMainBrown h-12 rounded-[20px] px-14 font-bold">
          {isRTL ? " المزيد" : "View More"}
        </Button>
      </div>
    </div>
  );
}

export default GridProducts;
