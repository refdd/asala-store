"use client";
import React, { useEffect, useState, useRef } from "react";
import { Search } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import axios from "axios";
import { baseUrl } from "@/utils/featchApi";
import { debounce } from "@/utils/debounce";

function MainSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const t = useTranslations("mainSearch");
  const [products, setProducts] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Track dropdown visibility
  const searchRef = useRef(null); // Ref for the search container

  // Debounced function to fetch products
  const fetchProducts = debounce((searchTerm) => {
    axios
      .get(`${baseUrl}/website/getProducts?id&name=${searchTerm}`)
      .then((res) => {
        setProducts(res.data.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, 300); // 300ms delay

  useEffect(() => {
    if (searchTerm) {
      fetchProducts(searchTerm); // Call the debounced function
      setIsDropdownOpen(true); // Open dropdown when typing
    } else {
      setProducts([]); // Clear products if search term is empty
      setIsDropdownOpen(false); // Close dropdown when search term is empty
    }
  }, [searchTerm]); // Trigger when searchTerm changes

  // Close dropdown when clicking outside the component
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Close dropdown
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Run only once on mount

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative" ref={searchRef}>
      <input
        type="text"
        placeholder={t("placeholder")} // Translated placeholder
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="h-[44px] px-[22px] w-full rounded-[15px] opacity-50 border text-bsMainPuple border-bsMainPuple placeholder:text-bsMainPuple placeholder:font-semibold focus:outline-none focus:border-blue-500 pl-12"
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Link href={"/listProduct"}>
          <Search className="h-8 w-8 text-bsMainPuple" />
        </Link>
      </div>
      {isDropdownOpen &&
        searchTerm && ( // Only show dropdown if open and searchTerm is not empty
          <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <div
                  key={index}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                  <Link href={`/listProduct/${product.id}`}>
                    <div className="flex items-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-10 h-10 mr-2"
                      />
                      <div>
                        <div className="font-semibold">{product.name}</div>
                        <div className="text-sm text-gray-500">
                          {product.details.summaryDetails}
                        </div>
                        <div className="text-sm text-gray-500">
                          ${product.selling_price}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="p-2 text-gray-500">{t("noResults")}</div> // Translated "No results found"
            )}
          </div>
        )}
    </div>
  );
}

export default MainSearch;
