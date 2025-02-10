// import styles from './page.module.css';
import RowBanners from "@/components/banners/RowBanners";
import RowCategory from "@/components/category/RowCategory";
import MainHeader from "@/components/headers/MainHeader";
import MostRequested from "@/components/MostRequested/MostRequested";
import RowMostView from "@/components/MostView/RowMostView";
import TodayOffer from "@/components/offers/TodayOffer";
import RowProducts from "@/components/RowProducts/RowProducts";
import SubscribeNow from "@/components/subscribe/SubscribeNow";
import { getData } from "@/utils/featchApi";
// import {g}
export default async function Home({ params }) {
  const { locale } = await params;
  // const t = await getTranslations("HomePage");
  // const session = await auth();
  const homeData = await getData("/website/home", locale);
  const {
    sliders,
    categories,
    products,
    todayoffer,
    mostRequestedProducts,
    image_offer,
  } = homeData?.data;
  return (
    <main className={""}>
      <MainHeader locale={locale} sliders={sliders} />
      <RowMostView />
      <RowCategory categories={categories} />
      <TodayOffer todayoffer={todayoffer} />
      {/* <RowProducts products={products} /> */}
      <MostRequested mostRequestedProducts={mostRequestedProducts} />
      {/* <RowBanners image_offer={image_offer} /> */}
      {/* <SubscribeNow /> */}
      {/* <ExampleClientComponent /> */}
    </main>
  );
}
