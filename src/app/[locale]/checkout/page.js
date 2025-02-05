import CheckoutLayout from "@/components/checkout/CheckoutLayout";
import UserOrderView from "@/components/checkout/UserOrderView";
import HeaderPages from "@/components/headers/HeaderPages";
import React from "react";

function Checkout() {
  return (
    <div>
      <HeaderPages title={"checkout"} />
      <div className="container mx-auto px-4 mt-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <UserOrderView />
          <CheckoutLayout />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
