import AboutUsHader from "@/components/aboutus/AboutUsHader";
import AboutUsSection from "@/components/aboutus/AboutUsSection";
import OurNumbers from "@/components/aboutus/OurNumbers";
import WhyChooseus from "@/components/aboutus/WhyChooseus";
import HeaderPages from "@/components/headers/HeaderPages";
import MainHeaderPages from "@/components/headers/MainHeaderPages";
import OurServers from "@/components/singleProduct/OurServers";
import SubscribeNow from "@/components/subscribe/SubscribeNow";
import React from "react";
const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "About us ", href: "/aboutUs" },
  // Last item doesn't need a href
];
function AboutUs() {
  return (
    <div>
      {/* <HeaderPages title={"Who_we_are"} /> */}
      <MainHeaderPages title={"Who_we_are"} breadcrumbItems={breadcrumbItems} />
      <div className="container mx-auto px-4 mt-14">
        <WhyChooseus />{" "}
      </div>
      <OurNumbers />
      {/* <AboutUsHader /> */}
      <div className="mt-20">
        <AboutUsSection />
      </div>
      {/* <div className="mt-20">
        <OurServers />
      </div> */}
      {/* <div className="mt-20">
        <SubscribeNow />
      </div> */}
    </div>
  );
}

export default AboutUs;
