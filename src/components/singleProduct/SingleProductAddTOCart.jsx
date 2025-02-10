"use client";
import React from "react";
import { Button } from "../ui/button";
import { useToast } from "@/hooks/use-toast";
import { useDispatch } from "react-redux";
import { useRouter } from "@/i18n/routing";
import { useSession } from "next-auth/react";
import { useLocale } from "next-intl";
import { executeCartItems } from "@/redux/cartSlice";
import { addToCart } from "@/app/actions/addToCart";

function SingleProductAddTOCart({ t, productId, quantity }) {
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
    console.log(result);

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
    <div className="choose-quantity flex items-center max-xl:flex-wrap lg:justify-between gap-5 mt-4">
      <Button
        onClick={handleAddToCart}
        className="bg-bsMainPuple w-full md:w-[300px] hover:bg-bsPurple text-white font-semibold py-2 px-4 rounded"
      >
        <span>{t("addToCart")}</span>
      </Button>
    </div>
  );
}

export default SingleProductAddTOCart;
