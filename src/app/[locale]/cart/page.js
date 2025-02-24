import { auth } from "@/auth";
import OrdersTable from "@/components/cartSections/OrdersTable";
import OrderSummary from "@/components/cartSections/OrderSummary";
import HeaderPages from "@/components/headers/HeaderPages";
import { redirect } from "next/navigation";
import React from "react";

async function CartPage({ params }) {
  const { locale } = await params;
  const session = await auth();
  if (!session) {
    redirect(`/${locale}`);
  }
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
