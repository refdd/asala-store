import AboutUsSection from "@/components/aboutus/AboutUsSection";
import ContactUsLayout from "@/components/Contactus/ContactUsLayout";
import HeaderPages from "@/components/headers/HeaderPages";
import React from "react";

function ContactUs() {
  return (
    <div>
      <HeaderPages title={"contact_us"} />
      <div className="bg-[#D9D9D940] py-4">
        <div className="container mx-auto px-4 mt-14">
          <ContactUsLayout />
        </div>
      </div>
      <AboutUsSection />
    </div>
  );
}

export default ContactUs;
