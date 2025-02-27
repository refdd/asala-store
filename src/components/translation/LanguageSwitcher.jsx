"use client";
import React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link, usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { Globe } from "lucide-react";

export default function LanguageSwitcher({ navbar }) {
  const locale = useLocale();
  const pathname = usePathname(); // Get the current path name

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="!bg-transparent p-0 md:!text-xs lg:!text-base   !text-white font-bold hover:text-white hover:!bg-transparent ">
            <div className="flex items-center gap-1.5">
              <Globe
                className={`w-5 h-5 text-white ${navbar && "text-white"}`}
              />
              <span>{locale == "ar" ? " AR" : " EN"}</span>
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-auto  p-  ">
              <li className="">
                <Link
                  href={pathname}
                  locale="ar"
                  className={cn(navigationMenuTriggerStyle()) + " !w-[70px]"}
                >
                  AR
                </Link>
              </li>
              <li className="">
                <Link
                  href={pathname}
                  locale="en"
                  className={cn(navigationMenuTriggerStyle()) + " !w-[70px]"}
                >
                  EN
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
