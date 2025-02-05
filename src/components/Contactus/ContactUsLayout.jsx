import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function ContactUsLayout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
      <ContactForm />
      <ContactInfo />
    </div>
  );
}

export default ContactUsLayout;
