"use client";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import React from "react";

function LogoNav({ navbar }) {
  return (
    <div className="relative w-full z-10">
      <div
        className={`${
          navbar ? "block" : "top-[-18px] md:absolute left-0 "
        }   w-full `}
      >
        <Link href={`/`}>
          <div
            className={`relative  ${
              navbar
                ? "w-full h-[50px] md:h-[55px]  md:w-[125px]"
                : "w-full h-[50px] md:h-[90px]  md:w-[125px]"
            }  `}
          >
            <Image
              alt="logo_light"
              src={"/assets/images/logo.svg"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
              priority={true}
              // placeholder="blur"
              // blurDataURL={logo}
              className=""
            />
          </div>
        </Link>
        {/* <LanguageSwitcher /> */}
      </div>
    </div>
  );
}

export default LogoNav;
