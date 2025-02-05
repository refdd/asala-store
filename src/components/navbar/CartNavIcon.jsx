"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ShoppingCart } from "lucide-react";
import TranslatedTypography from "../translation/TranslatedTypography";
import { Link } from "@/i18n/routing";
import { useSelector } from "react-redux";
import Image from "next/image";
function CartNavIcon() {
  const { cartItems } = useSelector((state) => state.cartItems);

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <div className="relative">
            <ShoppingCart className={"w-6 h-6 text-white cursor-pointer"} />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
              <p className="text-xs text-white text-center">
                {cartItems?.items?.length}
              </p>
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">
                <TranslatedTypography i18nKey="item in cart" variant="h6">
                  item in cart
                </TranslatedTypography>
              </h4>

              <h4 className="font-medium leading-none">
                <TranslatedTypography
                  i18nKey="item in cart"
                  variant="subtitle1"
                >
                  <p className="text-sm text-muted-foreground">
                    you can see all items here
                  </p>
                </TranslatedTypography>
              </h4>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-1 items-center gap-4">
                {cartItems?.items?.map((item) => (
                  <div className="flex gap-2 py-3 border-b" key={item.id}>
                    {/* */}
                    <div className="relative w-10 h-10 ">
                      <Image
                        alt={item?.product?.name}
                        title={item?.product?.name}
                        src={item?.product?.image}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                        loading="lazy"
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div className="flex-1 space-y-1 leading-none">
                      <p className="font-medium">{item?.product?.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {item?.quantity} x {item?.product?.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Link href={`/cart`}>
              <Button variant="outline" className="w-full">
                {" "}
                View cart{" "}
              </Button>
            </Link>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default CartNavIcon;
