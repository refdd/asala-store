"use client";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ProductDetails from "./ProductDetails";
import { useEffect, useState } from "react";
import axios from "axios"; // Import axios
import { baseUrl } from "@/utils/featchApi";
import { useLocale, useTranslations } from "next-intl";

export default function ShowProductDatalis({ slug }) {
  const [productId, setProductId] = useState(null);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const locale = useLocale();
  const t = useTranslations("product");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/website/getProduct?id=${productId}`,
          {
            headers: {
              lang: locale, // Assuming you need to set the language header
            },
          }
        );
        setProduct(response.data); // Axios wraps the response in a `data` object
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId, locale]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          onClick={() => setProductId(slug)}
          className="px-7 py-3 rounded-xl bg-[#E4A4FB80] border border-white text-white"
        >
          {t("quickView")}
        </button>
      </SheetTrigger>
      <SheetContent side={"right"} className="w-[90%] md:max-w-4xl">
        <SheetHeader className={""}>
          <SheetTitle>{t("quickView")}</SheetTitle>
        </SheetHeader>
        {loading ? (
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-20 h-20 animate-spin rounded-full border-t-2 border-b-2 border-bsMainPuple"></div>
          </div>
        ) : (
          <ProductDetails product={product} slug={productId} />
        )}
      </SheetContent>
    </Sheet>
  );
}
