"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import CardProductCart from "../cards/CardProductCart";
import { useDispatch, useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { useLocale } from "use-intl";
import { useCallback } from "react";
import { debounce } from "@/utils/debounce";
import axios from "axios";
import { executeCartItems } from "@/redux/cartSlice";

export function CartDrawer() {
  const { cartItems, cartinfo } = useSelector((state) => state.cartItems);
  const { data: session } = useSession();
  const locale = useLocale();
  const dispatch = useDispatch();

  // Debounced function to handle quantity changes
  const debouncedHandleQuantityChange = useCallback(
    debounce(async (newQuantity, product_id) => {
      try {
        await axios.post(
          `https://asalafoods.perfect-teamwork.com/api/website/add-to-cart`,
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

  const handleRemove = () => {};
  return (
    <Sheet>
      <SheetTrigger asChild>
        <ShoppingCart className="w-9 h-9 text-bsMainBrown cursor-pointer" />
      </SheetTrigger>
      <SheetContent side={"left"} className="md:max-w-lg">
        <SheetHeader className={"border-b pb-5"}>
          <SheetTitle>عربة التسوق</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {cartItems?.items?.map((item) => (
            <CardProductCart
              key={item.id}
              title={item.product.name}
              image={item.product.image}
              price={item.product.price}
              allQuantity={item.quantity}
              product_id={item.product?.id}
              onQuantityChange={handleQuantityChange}
              onRemove={handleRemove}
            />
          ))}
        </div>
        <SheetFooter>
          <div className="">
            <div className="text-lg font-bold">
              الإجمالي: {cartinfo?.total_price}
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
