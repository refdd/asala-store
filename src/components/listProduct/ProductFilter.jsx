"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";

function ProductFilter({ categories }) {
  const router = useRouter(); // Initialize the router
  const [activeCategory, setActiveCategory] = useState("all products");
  const t = useTranslations("productFilter"); // Fetch translations

  // Function to handle category click
  const handleCategoryClick = (category) => {
    setActiveCategory(category.name || "all products");

    // Update the URL with the category ID as a query parameter
    if (category.id) {
      router.push(`?category=${category.id}`, { scroll: false }); // Add query parameter to the URL
    } else {
      router.push("/listProduct"); // Reset to the base URL if "all products" is selected
    }
  };

  return (
    <div className="py-4 md:w-[60%] mx-auto ">
      <ul className="flex items-center gap-4 flex-wrap">
        {/* Add "all products" option */}
        <li key="all" className="flex items-center gap-2">
          <div
            className={`px-4 py-2 rounded-lg whitespace-nowrap ${
              activeCategory === "all products"
                ? "bg-bsMainPuple text-white"
                : "bg-gray-100 hover:bg-gray-200"
            } cursor-pointer`}
            onClick={() => handleCategoryClick({ name: "all products" })}
          >
            {t("allProducts")} {/* Use translated text */}
          </div>
        </li>

        {/* Map through the categories prop */}
        {categories.map((category) => (
          <li
            key={category.id}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap ${
              activeCategory === category.name
                ? "bg-bsMainPuple text-white"
                : "bg-gray-100 hover:bg-gray-200"
            } cursor-pointer`}
            onClick={() => handleCategoryClick(category)}
          >
            <div>{category.name}</div>
            <div className="relative w-10 h-10 ">
              <Image
                alt={"category image"}
                title={"category image"}
                src={category?.image}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                loading="lazy"
                className="object-cover rounded-full"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductFilter;
