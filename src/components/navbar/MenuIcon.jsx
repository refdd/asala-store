"use client";
import { Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MainSearch from "./MainSearch";
import TranslatedTypography from "../translation/TranslatedTypography";
import { Link } from "@/i18n/routing";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";

function MenuIcon({ handelMenubar }) {
  const { data: session } = useSession();
  const t = useTranslations("links");

  return (
    <div className="lg:hidden flex justify-end">
      <Sheet>
        <SheetTrigger>
          <div onClick={handelMenubar} className="text-white">
            <Menu className="text-bsDarkText text-2xl cursor-pointer" />
          </div>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="pt-5">
              <MainSearch />
            </SheetTitle>
            <ul className="flex-col overflow-y-auto w-full pt-5">
              {!session && (
                <li className="text-bsMainBrown font-semibold py-1 text-left cursor-pointer">
                  <SheetClose asChild>
                    <Link href="/auth/login">
                      <TranslatedTypography i18nKey="login" variant="subtitle1">
                        {t("login")}
                      </TranslatedTypography>
                    </Link>
                  </SheetClose>
                </li>
              )}
              <li className="text-bsMainBrown font-semibold py-1 text-left cursor-pointer">
                <SheetClose asChild>
                  <Link href="/aboutUs">
                    <TranslatedTypography i18nKey="aboutUs" variant="subtitle1">
                      {t("aboutUs")}
                    </TranslatedTypography>
                  </Link>
                </SheetClose>
              </li>
              <li className="text-bsMainBrown font-semibold py-1 text-left cursor-pointer">
                <SheetClose asChild>
                  <Link href="/listProduct">
                    <TranslatedTypography
                      i18nKey="products"
                      variant="subtitle1"
                    >
                      {t("products")}
                    </TranslatedTypography>
                  </Link>
                </SheetClose>
              </li>
              <li className="text-bsMainBrown font-semibold py-1 text-left cursor-pointer">
                <SheetClose asChild>
                  <Link href="/contactUs">
                    <TranslatedTypography
                      i18nKey="contactUs"
                      variant="subtitle1"
                    >
                      {t("contactUs")}
                    </TranslatedTypography>
                  </Link>
                </SheetClose>
              </li>
            </ul>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MenuIcon;
