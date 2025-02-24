import React from "react";
import FormCheckout from "./FormCheckout";

function CheckoutLayout({ states }) {
  return (
    <div className="md:col-span-3">
      <FormCheckout states={states} />
    </div>
  );
}

export default CheckoutLayout;
