"use client";
import React from "react";
import CardUserOrder from "../cards/CardUserOrder";
import { useSelector } from "react-redux";
import { ScrollArea } from "../ui/scroll-area";

function UserOrderView({ price, title, image }) {
  const { cartinfo, cartItems } = useSelector((state) => state.cartItems);

  return (
    <div className="md:col-span-2">
      <h4 className="text-2xl text-bsMainBrown font-semibold"> Your Order</h4>
      {/* prodcut */}
      <ScrollArea className="grid grid-cols-1  gap-4 md:h-[400px] ">
        {cartItems?.items?.map((item) => (
          <CardUserOrder
            key={item.id}
            title="Raglan Sleeve T-shirt"
            image="/assets/images/product (1).jpg"
            size="XS"
            color="green"
            quantity={2}
            price={28.0}
          />
        ))}
      </ScrollArea>
      {/* product overview */}
      <div className="flex flex-col ">
        <div className="flex items-center justify-between py-4 border-b">
          <p>{cartinfo?.cart_count} pieces </p>
          <p className="text-lg font-semibold">cart count</p>
        </div>
        <div className="flex items-center justify-between py-4 border-b">
          <p>{cartinfo?.sum_quantity}</p>
          <p className="text-lg font-semibold"> tatal quantity</p>
        </div>
        {/* <div className="flex items-center justify-between py-4 border-b">
          <p>$ 10.00</p>
          <p className="text-lg font-semibold">Shipping</p>
        </div> */}
        <div className="flex items-center justify-between py-4">
          <p className="text-lg font-semibold">{cartinfo?.total_price}</p>
          <p className="text-xl font-bold">Total</p>
        </div>
      </div>
    </div>
  );
}

export default UserOrderView;
