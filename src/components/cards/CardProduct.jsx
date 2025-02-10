// import Image from "next/image";
// import React from "react";
// import { renderStars } from "../helper/rateingStars";
// import { MdAddShoppingCart } from "react-icons/md";
// import { Link } from "@/i18n/routing";
// import AddToCartAction from "../addToCart/AddToCartAction";

// function CardProduct({
//   desc,
//   title,
//   rate,
//   price,
//   image,
//   discount,
//   slug,
//   related_products,
// }) {
//   return (
//     <div className="group cardProductShadow rounded-2xl bg-white px-3 py-2 flex flex-col transition-all duration-300 ease-in-out hover:cardHoverAnimation">
//       {/* rate and offers */}
//       {!related_products && (
//         <div className="flex items-center justify-between pb-2">
//           <div className="flex items-center gap-2">{renderStars(rate)}</div>
//           {discount !== 0 && (
//             <div className="flex items-center">
//               <p className="text-4xl font-semibold text-bsSecondPupl -ml-2 -mt-4">
//                 %
//               </p>
//               <p className="text-2xl font-bold text-bsMainPuple leading-[56.22px]">
//                 {discount}
//               </p>
//             </div>
//           )}
//         </div>
//       )}
//       {/* image */}
//       <Link href={`/listProduct/${slug}`}>
//         <div className="relative w-full h-[261px] md:h-[310px] overflow-hidden rounded-xl">
//           <Image
//             alt={title}
//             title={title}
//             src={image}
//             fill
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
//             loading="lazy"
//             className="object-cover rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105"
//           />
//         </div>
//       </Link>
//       {/* title */}
//       <Link href={`/listProduct/${slug}`}>
//         <div className="flex flex-col">
//           <p className="text-base font-semibold text-black">{title}</p>
//           <p className="text-sm break-words truncate md:max-w-full">{desc}</p>
//         </div>
//       </Link>
//       <div className="pt-4 flex items-center justify-between">
//         {/* add to cart */}
//         <div className="">
//           <AddToCartAction productId={slug} quantity={1} />
//         </div>
//         {/* price */}
//         <Link href={`/listProduct/${slug}`}>
//           <div className="flex items-end gap-1 ">
//             <p className="text-2xl font-bold text-bsMainPuple ">{price}</p>
//             <p className="text-xl font-semibold text-bsSecondPupl ">دك</p>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default CardProduct;
const OfferIcon = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.8825 12.4412C24.8825 13.18 24.45 13.8462 23.8337 14.4537C23.465 14.8162 23.035 15.1637 22.6562 15.5162C22.3537 15.7975 22.0812 16.0737 21.9537 16.3812C21.82 16.7025 21.8112 17.1012 21.8225 17.5225C21.8362 18.0425 21.8925 18.5912 21.8962 19.1037C21.9037 19.9675 21.7425 20.7337 21.2387 21.2387C20.7337 21.7425 19.9675 21.9037 19.1037 21.8962C18.5912 21.8912 18.0425 21.8362 17.5237 21.8225C17.1025 21.8112 16.7025 21.82 16.3812 21.9537C16.0737 22.0812 15.7975 22.3537 15.5162 22.6562C15.1637 23.035 14.8162 23.465 14.4537 23.8325C13.8462 24.45 13.18 24.8825 12.4412 24.8825C11.7025 24.8825 11.0362 24.45 10.4287 23.8325C10.0662 23.465 9.71875 23.035 9.36625 22.6562C9.085 22.3537 8.8075 22.0812 8.50125 21.9537C8.18 21.82 7.78 21.8112 7.36 21.8225C6.84 21.8362 6.29125 21.8912 5.77875 21.8962C4.915 21.9037 4.1475 21.7425 3.64375 21.2387C3.13875 20.7337 2.97875 19.9675 2.98625 19.1037C2.99 18.5912 3.04625 18.0425 3.06 17.5225C3.07125 17.1012 3.0625 16.7025 2.92875 16.38C2.80125 16.0737 2.52875 15.7975 2.22625 15.5162C1.84875 15.1637 1.41875 14.8162 1.05 14.4537C0.43375 13.8462 0 13.18 0 12.4412C0 11.7025 0.43375 11.0362 1.05 10.4287C1.41875 10.0662 1.84875 9.71875 2.22625 9.36625C2.52875 9.085 2.80125 8.80875 2.92875 8.5025C3.0625 8.18 3.07125 7.78125 3.06 7.36C3.04625 6.84 2.99 6.29125 2.98625 5.77875C2.97875 4.915 3.13875 4.14875 3.64375 3.64375C4.1475 3.14 4.915 2.97875 5.77875 2.98625C6.29125 2.99125 6.84 3.04625 7.36 3.06C7.78 3.07125 8.18 3.0625 8.50125 2.92875C8.8075 2.80125 9.085 2.52875 9.36625 2.22625C9.71875 1.8475 10.0662 1.4175 10.4287 1.05C11.0362 0.4325 11.7025 0 12.4412 0C13.18 0 13.8462 0.4325 14.4537 1.05C14.8162 1.4175 15.1637 1.8475 15.5162 2.22625C15.7975 2.52875 16.0737 2.80125 16.3812 2.92875C16.7025 3.0625 17.1025 3.07125 17.5237 3.06C18.0425 3.04625 18.5912 2.99125 19.1037 2.98625C19.9675 2.97875 20.7337 3.14 21.2387 3.64375C21.7425 4.14875 21.9037 4.915 21.8962 5.77875C21.8925 6.29125 21.8362 6.84 21.8225 7.36C21.8112 7.78125 21.82 8.18 21.9537 8.50125C22.0812 8.80875 22.3537 9.085 22.6562 9.36625C23.035 9.71875 23.465 10.0662 23.8337 10.4287C24.45 11.0362 24.8825 11.7025 24.8825 12.4412ZM23.6325 12.4412C23.6325 12.2062 23.5225 11.9975 23.375 11.7937C23.17 11.5112 22.89 11.2475 22.5975 10.9862C21.8687 10.335 21.0912 9.68625 20.7987 8.98125C20.4962 8.25 20.5775 7.2325 20.6287 6.25875C20.65 5.865 20.6625 5.48125 20.61 5.14C20.5737 4.90125 20.51 4.68375 20.355 4.52875C20.1987 4.3725 19.9812 4.30875 19.7425 4.2725C19.4012 4.22 19.0175 4.2325 18.6237 4.25375C17.65 4.305 16.6325 4.38625 15.9025 4.08375C15.1962 3.79125 14.5475 3.015 13.8962 2.285C13.635 1.9925 13.3712 1.7125 13.0887 1.5075C12.885 1.36 12.6762 1.25 12.4412 1.25C12.2075 1.25 11.9975 1.36 11.7937 1.5075C11.5112 1.7125 11.2475 1.9925 10.9862 2.285C10.335 3.015 9.68625 3.79125 8.98 4.08375C8.25 4.38625 7.2325 4.305 6.25875 4.25375C5.865 4.2325 5.48125 4.22 5.14 4.2725C4.9 4.30875 4.68375 4.3725 4.5275 4.52875C4.37125 4.68375 4.30875 4.90125 4.2725 5.14C4.22 5.48125 4.2325 5.865 4.2525 6.25875C4.305 7.2325 4.38625 8.25 4.08375 8.98C3.79125 9.68625 3.015 10.335 2.285 10.9862C1.9925 11.2475 1.7125 11.5112 1.5075 11.7937C1.36 11.9975 1.25 12.2062 1.25 12.4412C1.25 12.6762 1.36 12.885 1.5075 13.0887C1.7125 13.3712 1.9925 13.635 2.285 13.8962C3.015 14.5475 3.79125 15.1962 4.08375 15.9025C4.38625 16.6325 4.305 17.65 4.2525 18.6237C4.2325 19.0175 4.22 19.4012 4.2725 19.7425C4.30875 19.9812 4.37125 20.1987 4.5275 20.3537C4.68375 20.51 4.9 20.5737 5.14 20.61C5.48125 20.6625 5.865 20.65 6.25875 20.6287C7.2325 20.5775 8.25 20.4962 8.98 20.7987C9.68625 21.0912 10.335 21.8675 10.9862 22.5975C11.2475 22.89 11.5112 23.17 11.7937 23.375C11.9975 23.5225 12.2075 23.6325 12.4412 23.6325C12.6762 23.6325 12.885 23.5225 13.0887 23.375C13.3712 23.17 13.635 22.89 13.8962 22.5975C14.5475 21.8675 15.1962 21.0912 15.9025 20.7987C16.6325 20.4962 17.65 20.5775 18.6237 20.6287C19.0175 20.65 19.4012 20.6625 19.7425 20.61C19.9812 20.5737 20.1987 20.51 20.355 20.3537C20.51 20.1987 20.5737 19.9812 20.61 19.7425C20.6625 19.4012 20.65 19.0175 20.6287 18.6237C20.5775 17.65 20.4962 16.6325 20.7987 15.9012C21.0912 15.1962 21.8687 14.5475 22.5975 13.8962C22.89 13.635 23.17 13.3712 23.375 13.0887C23.5225 12.885 23.6325 12.6762 23.6325 12.4412ZM10.4687 10.2387C9.97375 10.7337 9.17 10.7337 8.675 10.2387C8.18 9.74375 8.18 8.93875 8.675 8.44375C9.17 7.94875 9.97375 7.94875 10.4687 8.44375C10.9637 8.93875 10.9637 9.74375 10.4687 10.2387ZM16.0575 7.94125C16.3012 7.6975 16.6975 7.6975 16.9412 7.94125C17.185 8.185 17.185 8.58125 16.9412 8.825L8.825 16.9412C8.58125 17.185 8.185 17.185 7.94125 16.9412C7.6975 16.6975 7.6975 16.3012 7.94125 16.0575L16.0575 7.94125ZM14.4137 14.645C14.9087 14.15 15.7125 14.15 16.2075 14.645C16.7025 15.14 16.7025 15.945 16.2075 16.44C15.7125 16.935 14.9087 16.935 14.4137 16.44C13.9175 15.945 13.9175 15.14 14.4137 14.645Z"
        fill="#FF0000"
      />
    </svg>
  );
};
import Image from "next/image";
import React from "react";
import AddToCartAction from "../addToCart/AddToCartAction";

function CardProduct({ title, image, offer, price, slug }) {
  return (
    <div className="productCardShadow p-8 relative">
      {/* offder */}
      <div className="absolute left-1 top-7">
        <div className="flex flex-col">
          <p className="text-lg font-bold text-bsMainRed">{offer}</p>
          <OfferIcon />
        </div>
      </div>
      {/* image */}
      <div className="relative w-full h-[192px] md:h-[210px] border border-[#82D627CC] ">
        <Image
          alt={title}
          title={title}
          src={image}
          // src={"/assets/images/image 1.png"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          loading="lazy"
          className="object-contain py-3 rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="mt-5">
        <p className=" font-bold text-bsMainGreen text-center">{title}</p>
      </div>
      {/* price */}
      <div className="mt-5 flex items-center justify-between">
        <p className="flex flex-col ">
          <span className="text-xl font-bold text-[#82D627C9]">{price}</span>
          <span className="font-bold  text-bsMainGreen -mt-2">SP</span>
        </p>
        <div className="">
          <AddToCartAction productId={slug} quantity={1} />
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
