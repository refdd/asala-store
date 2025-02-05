"use client";
import React, { useCallback } from "react";
import HeaderTableOrder from "../headers/HeaderTableOrder";
import CardOrderTable from "../cards/CardOrderTable";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useLocale } from "use-intl";
import { executeCartItems } from "@/redux/cartSlice";
import { debounce } from "@/utils/debounce";

function OrdersTable() {
  const { cartItems } = useSelector((state) => state.cartItems);
  const { data: session } = useSession();
  const locale = useLocale();
  const dispatch = useDispatch();

  // Debounced function to handle quantity changes
  const debouncedHandleQuantityChange = useCallback(
    debounce(async (newQuantity, product_id) => {
      try {
        await axios.post(
          `http://162.240.24.203/~primestore/api/website/add-to-cart`,
          {
            product_id: product_id,
            quantity: newQuantity,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              lang: locale,
              Authorization: `Bearer ${session?.user?.token}`,
            },
          }
        );
        // Refresh cart items after successful update
        dispatch(
          executeCartItems({ lang: locale, token: session?.user?.token })
        );
      } catch (error) {
        console.error("Error updating quantity:", error);
      }
    }, 500), // 500ms delay
    [locale, session, dispatch]
  );

  const handleQuantityChange = (newQuantity, product_id) => {
    debouncedHandleQuantityChange(newQuantity, product_id);
  };

  const handleRemove = (cartId) => {
    console.log("Remove", cartId);
    axios
      .post(
        "http://162.240.24.203/~primestore/api/website/remove-cart",
        { cart_id: cartId },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            lang: locale,
            Authorization: `Bearer ${session?.user?.token}`,
          },
        }
      )
      .then((res) => {
        dispatch(
          executeCartItems({ lang: locale, token: session?.user?.token })
        );
      })
      .catch((err) => {
        console.log("Error in removing cart item", err);
      });
  };

  return (
    <div className="md:col-span-2">
      <HeaderTableOrder />
      {/* Table */}
      <div className="grid grid-cols-1 gap-4">
        {cartItems?.items?.map((item) => (
          <CardOrderTable
            key={item.id}
            title={item.product.name}
            image={item.product.image}
            price={item.product.price}
            allQuantity={item.quantity}
            product_id={item.product?.id}
            onQuantityChange={handleQuantityChange}
            onRemove={handleRemove}
            cartId={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default OrdersTable;
