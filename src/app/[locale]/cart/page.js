import OrdersTable from "@/components/cartSections/OrdersTable";
import OrderSummary from "@/components/cartSections/OrderSummary";
import HeaderPages from "@/components/headers/HeaderPages";
import React from "react";

function CartPage() {
  return (
    <div>
      <HeaderPages title={"shopping_cart"} />
      <div className="container mx-auto px-4 mt-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <OrderSummary />
          <OrdersTable />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
