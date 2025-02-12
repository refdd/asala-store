"use client";
import React from "react";
import { Button } from "../ui/button";
import { Link } from "@/i18n/routing";
import { useSelector } from "react-redux";

function OrderSummary({}) {
  const { cartinfo } = useSelector((state) => state.cartItems);
  return (
    <div className="k bg-[#f7f7f7] p-6 rounded-2xl h-fit">
      <h4 className="text-lg font-semibold">Order Summary</h4>
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
        <Link href={`/checkout`}>
          <Button
            variant="outline"
            className="w-full bg-bsMainBrown text-white hover:bg-bsSecondPupl hover:text-white h-10"
          >
            Proceed to Checkout
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default OrderSummary;
