import HeaderPages from "@/components/headers/HeaderPages";
import MainHeader from "@/components/headers/MainHeader";
import MainHeaderPages from "@/components/headers/MainHeaderPages";
import GallerySingleProduct from "@/components/singleProduct/GallerySingleProduct";
import OurServers from "@/components/singleProduct/OurServers";
import RelatedProducts from "@/components/singleProduct/RelatedProducts";
import SingleProductImage from "@/components/singleProduct/SingleProductImage";
import SingleProductOverView from "@/components/singleProduct/SingleProductOverView";
import TapsSingelProduct from "@/components/singleProduct/TapsSingelProduct";
import Willlovetoo from "@/components/singleProduct/Willlovetoo";
import { getData, getItem } from "@/utils/featchApi";
import React from "react";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pages = await getItem(`/website/getProduct?id=${slug}`);
  return {
    // metadataBase: new URL(mainUrl),
    alternates: {
      canonical: `/listProduct/${pages?.row?.slug}`,
    },
    title: pages?.data?.name,
    description: pages?.row?.data?.name,
  };
}
const images = [
  "/assets/images/product11.jpg",
  "/assets/images/product12.png",
  "/assets/images/product13.jpg",
  "/assets/images/product14.jpg",
];
async function ProductDetails({ params }) {
  const { locale } = await params;
  const { slug } = await params;
  const product = await getItem(`/website/getProduct?id=${slug}`, locale);
  const listProduct = await getData(
    `/website/getProducts?id&name&category_id&sku=`,
    locale
  );
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "list Product ", href: "/listProduct" },
    { label: product?.data?.name, href: `/listProduct/${slug}` },
    // Last item doesn't need a href
  ];
  console.log(product?.data?.product_images);

  return (
    <main className={""}>
      <MainHeaderPages
        title={"product_details"}
        breadcrumbItems={breadcrumbItems}
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-10 pt-6">
          {/* <SingleProductImage
            title={product?.data?.title}
            image={product?.data?.image}
          /> */}
          <GallerySingleProduct images={product?.data?.product_images} />
          <div className="md:col-span-4">
            <SingleProductOverView
              title={product?.data?.name}
              description={product?.data?.details?.detail}
              category={product?.data?.category_name}
              stock={product?.data?.quantity}
              code={product?.data?.sku}
              rating={product?.data?.stars}
              status={product?.data?.is_activated}
              price={product?.data?.price}
              discountedPrice={product?.data?.discountedPrice}
              locale={locale}
              productId={product?.data?.id}
            />
            {/* <Willlovetoo locale={locale} /> */}
          </div>
        </div>
        <TapsSingelProduct locale={locale} singleProduct={product?.data} />
        <OurServers />
        <RelatedProducts products={listProduct?.data?.items} />
      </div>
    </main>
  );
}

export default ProductDetails;
