"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useLocale, useTranslations } from "next-intl";
import { useSession } from "next-auth/react";
import { useRouter } from "@/i18n/routing";
import { useDispatch } from "react-redux";
import { useToast } from "@/hooks/use-toast";
import { addToCart } from "@/app/actions/addToCart";
import { executeCartItems } from "@/redux/cartSlice";

function CardToDayOffer({
  title,
  image,
  mainCard,
  productId,
  quantity,
  indexCard,
  anhterCards,
}) {
  const t = useTranslations("buttonOrder");
  const { toast } = useToast();
  const dispatch = useDispatch();
  const router = useRouter();
  const { data: session } = useSession();
  const locale = useLocale();

  const handleAddToCart = async () => {
    if (!session) {
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
    <div
      className={`${
        mainCard ? "row-span-2 h-full" : "row-span-1"
      } cursor-pointer`}
    >
      <div
        className={`relative w-full h-[300px] ${
          mainCard ? "md:h-full" : "md:h-[290px]"
        } ${indexCard == 0 && "md:rounded-tr-[50px]"}  overflow-hidden
          ${mainCard && "md:rounded-bl-[50px]"} 
        `}
      >
        <Image
          alt={title}
          title={title}
          src={image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          loading="lazy"
          className="object-cover"
        />
        <div className="absolute top-1/2 left-[80%] -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center">
          <Button
            onClick={handleAddToCart}
            className="px-10 h-10 hover:bg-bsMainGreen rounded-[20px] bg-[#82D627CC] border border-white text-white"
          >
            {t("orderNow")}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CardToDayOffer;
