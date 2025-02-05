import AboutUsSection from "@/components/aboutus/AboutUsSection";
import HeaderPages from "@/components/headers/HeaderPages";
import ListProductHeader from "@/components/headers/ListProductHeader";
import MainHeader from "@/components/headers/MainHeader";
import ListProductContainer from "@/components/listProduct/ListProductContainer";
import ProductFilter from "@/components/listProduct/ProductFilter";
import { getData } from "@/utils/featchApi";
import React, { Suspense } from "react";
import Loading from "./loading";

async function ListProduct({ params, searchParams }) {
  const { locale } = await params;
  const { category } = await searchParams;
  const listProduct = await getData(
    `/website/getProducts?id&name&category_id=${category || ""}&sku=`,
    locale
  );
  const categories = await getData(`/website/getCategories?id&name`, locale);

  return (
    <main className={""}>
      <HeaderPages title={"product_list"} />
      <ListProductHeader />
      <div className="container mx-auto px-4">
        <ProductFilter categories={categories?.data} />
        <Suspense fallback={<Loading />}>
          <ListProductContainer products={listProduct?.data?.items} />
        </Suspense>
        <AboutUsSection />
      </div>
    </main>
  );
}

export default ListProduct;
