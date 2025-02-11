import AboutUsSection from "@/components/aboutus/AboutUsSection";
import HeaderPages from "@/components/headers/HeaderPages";
import ListProductHeader from "@/components/headers/ListProductHeader";
import MainHeader from "@/components/headers/MainHeader";
import ListProductContainer from "@/components/listProduct/ListProductContainer";
import ProductFilter from "@/components/listProduct/ProductFilter";
import { getData } from "@/utils/featchApi";
import React, { Suspense } from "react";
import Loading from "./loading";
import MainHeaderPages from "@/components/headers/MainHeaderPages";
import HeaderListProduct from "@/components/headers/HeaderListProduct";

async function ListProduct({ params, searchParams }) {
  const { locale } = await params;
  const { category } = await searchParams;
  const listProduct = await getData(
    `/website/getProducts?id&name&category_id=${category || ""}&sku=`,
    locale
  );
  const categories = await getData(`/website/getCategories?id&name`, locale);
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "list Product ", href: "/listProduct" },
    // Last item doesn't need a href
  ];
  return (
    <main className={""}>
      {/* <HeaderPages title={"product_list"} /> */}
      <MainHeaderPages title={"Who_we_are"} breadcrumbItems={breadcrumbItems} />
      {/* <ListProductHeader /> */}

      <div className="container mx-auto px-4 pt-10">
        {/* <ProductFilter categories={categories?.data} /> */}
        <HeaderListProduct />
        <Suspense fallback={<Loading />}>
          <ListProductContainer products={listProduct?.data?.items} />
        </Suspense>
        <AboutUsSection />
      </div>
    </main>
  );
}

export default ListProduct;
