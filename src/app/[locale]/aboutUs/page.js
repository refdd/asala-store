import AboutUsHader from "@/components/aboutus/AboutUsHader";
import AboutUsSection from "@/components/aboutus/AboutUsSection";
import HeaderPages from "@/components/headers/HeaderPages";
import OurServers from "@/components/singleProduct/OurServers";
import SubscribeNow from "@/components/subscribe/SubscribeNow";
import React from "react";

function AboutUs() {
  return (
    <div>
      <HeaderPages title={"Who_we_are"} />
      <div className="container mx-auto px-4 mt-14">
        <AboutUsHader />
        <div className="mt-20">
          <AboutUsSection />
        </div>
        <div className="mt-20">
          <OurServers />
        </div>
        <div className="mt-20">
          <SubscribeNow />
        </div>
      </div>{" "}
    </div>
  );
}

export default AboutUs;
