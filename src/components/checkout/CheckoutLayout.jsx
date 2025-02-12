import React from "react";
import FormCheckout from "./FormCheckout";

function CheckoutLayout() {
  return (
    <div className="md:col-span-3">
      <h4 className="text-2xl text-bsMainBrown font-semibold"> Information</h4>
      <FormCheckout />
    </div>
  );
}

export default CheckoutLayout;
