// import React from "react";
// import CardListProduct from "../cards/CardListProduct";
// import { AlertCircle } from "lucide-react";

// function ListProductContainer({ products }) {
//   if (!products || products.length === 0) {
//     return (
//       <div className="flex flex-col items-center justify-center h-64 mt-8">
//         <AlertCircle className="w-12 h-12 text-gray-500 mb-4" />{" "}
//         {/* Lucide icon */}
//         <p className="text-gray-700 text-lg text-center">
//           لا توجد منتجات متاحة حاليا. الرجاء التحقق لاحقا.
//         </p>
//       </div>
//     );
//   }
//   return (
//     <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 pt-8">
//       {products.map((product, index) => (
//         <CardListProduct
//           key={index}
//           title={product.name}
//           desc={product.details?.summaryDetails}
//           rate={product.stars}
//           price={product.price}
//           image={product.image}
//           slug={product.id} // Pass slug to the card
//         />
//       ))}
//     </div>
//   );
// }

// export default ListProductContainer;
import React from "react";
import CardListProduct from "../cards/CardListProduct";
import { AlertCircle } from "lucide-react";

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

function ListProductContainer({}) {
  // if (!products || products.length === 0) {
  //   return (
  //     <div className="flex flex-col items-center justify-center h-64 mt-8">
  //       <AlertCircle className="w-12 h-12 text-gray-500 mb-4" />{" "}
  //       {/* Lucide icon */}
  //       <p className="text-gray-700 text-lg text-center">
  //         لا توجد منتجات متاحة حاليا. الرجاء التحقق لاحقا.
  //       </p>
  //     </div>
  //   );
  // }
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 pt-8">
      {products.map((product, index) => (
        <CardListProduct
          key={index}
          title={product.name}
          desc={product.details?.summaryDetails}
          rate={product.stars}
          price={product.price}
          image={product.image}
          slug={product.id} // Pass slug to the card
        />
      ))}
    </div>
  );
}

export default ListProductContainer;
