// import React from "react";
// import { renderStars } from "../helper/rateingStars";
// import Image from "next/image";
// import { MdAddShoppingCart } from "react-icons/md";
// import { Link } from "@/i18n/routing";
// import dynamic from "next/dynamic";
// import AddToCartAction from "../addToCart/AddToCartAction";
// const ShowProductDatalis = dynamic(() =>
//   import("../listProduct/ShowProductDatalis")
// );

// function CardListProduct({ rate, title, image, price, slug }) {
//   return (
//     <div className="cardProductShadow rounded-2xl bg-white px-3 py-2 flex flex-col">
//       {/* rate and offers */}
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-2">{renderStars(rate)}</div>
//       </div>
//       {/* image */}
//       <div className="relative w-full h-[340px] md:h-[310px] mt-4 group">
//         <Image
//           alt={title}
//           title={title}
//           src={image}
//           fill
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
//           loading="lazy"
//           className="object-cover rounded-xl"
//         />
//         {/* Quick View Button */}
//         <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center z-30">
//           <ShowProductDatalis slug={slug} />
//         </div>
//       </div>
//       {/* title */}
//       <Link href={`/listProduct/${slug}`}>
//         <div className="flex flex-col">
//           <p className="text-base font-bold text-black">{title}</p>
//           {/* <p className="text-sm break-words truncate md:max-w-full">{desc}</p> */}
//         </div>
//       </Link>

//       <div className="pt-4 flex items-center justify-between">
//         {/* price */}
//         <Link href={`/listProduct/${slug}`}>
//           <div className="flex items-end ">
//             <p className="text-2xl font-bold text-bsMainPuple ">{price}</p>
//             <p className="text-xl font-semibold text-bsSecondPupl ">دك</p>
//           </div>
//         </Link>
//         {/* add to cart */}
//         <div className="">
//           <AddToCartAction productId={slug} quantity={1} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CardListProduct;

import Image from "next/image";
import React from "react";
import { IoMdStar } from "react-icons/io";
import { Button } from "../ui/button";

function CardListProduct({ title, price, image }) {
  return (
    <div
      style={{ boxShadow: "0 8px 38px rgba(12,12,12,6%)" }}
      className="bg-white  border-bsMainBrown relative group  transition-all"
    >
      <div className="">
        <div className="relative w-full h-[290px] md:h-[310px]">
          <Image
            alt={title}
            title={title}
            src={image}
            // src={"/assets/images/product11.jpg"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            loading="lazy"
            className="object-contain py-5 scale-95 rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-100"
          />
        </div>
      </div>
      {/* title */}
      <div className="pt-3 pb-11 px-7 flex flex-col  items-center justify-center">
        <p className="text-lg font-bold text-black md:hover:text-bsMainBrown">
          Organic Juice
        </p>
        <p className="text-lg font-semibold text-bsMainBrown">{price}$</p>
        <div className="flex items-center ">
          <IoMdStar className="text-lg text-[#efb343]" />
          <IoMdStar className="text-lg text-[#efb343]" />
          <IoMdStar className="text-lg text-[#efb343]" />
          <IoMdStar className="text-lg text-[#efb343]" />
          <IoMdStar className="text-lg text-[#efb343]" />
        </div>
      </div>
      <div
        className="
      absolute w-[93%] h-[93%] md:w-[93%] md:h-[93%] border-2 md:top-3.5 md:left-3.5 top-4 left-4  border-bsMainBrown  transition-all
      group-hover:w-full group-hover:h-full group-hover:border-[4px] group-hover:top-0 group-hover:left-0 group-hover:right-0 group-hover:bottom-0
      "
      ></div>
      <div className="absolute  group-hover:top-[98%] top-[103%] invisible  group-hover:visible transition-all left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center  ">
        <Button
          className={
            "h-[44px] rounded-[44px] px-10 font-semibold hover:bg-bsMainGreen bg-bsMainBrown"
          }
        >
          Select options
        </Button>
      </div>
    </div>
  );
}

export default CardListProduct;
