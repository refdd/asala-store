"use client";
import { addToCart } from "@/app/actions/addToCart";
import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { useToast } from "@/hooks/use-toast";
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
import { useLocale } from "next-intl";
import { executeCartItems } from "@/redux/cartSlice";
import { redirect, useRouter } from "@/i18n/routing";

function AddToCartAction({ productId, quantity }) {
  const { toast } = useToast();
  const dispatch = useDispatch();
  const router = useRouter();
  const { data: session } = useSession();
  const locale = useLocale();

  const handleAddToCart = async () => {
    if (!session) {
      // Redirect to the login page if not authenticated
      router.push("/auth/login");
    }
    const formData = new FormData();
    formData.append("productId", productId);
    formData.append("quantity", quantity);

    const result = await addToCart(formData);

    if (result.success) {
      toast({
        title: "Success",
        description: "Product added to cart successfully.",
      });
      dispatch(executeCartItems({ lang: locale, token: session?.user?.token }));
    } else {
      console.error("Failed to add product to cart:", result.message);
    }
  };

  return (
    <button onClick={handleAddToCart}>
      <MdAddShoppingCart className="text-3xl text-[#82D627C9] cursor-pointer" />
    </button>
  );
}

export default AddToCartAction;
