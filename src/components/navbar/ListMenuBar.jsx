import { Link } from "@/i18n/routing";
import React from "react";
import TranslatedTypography from "../translation/TranslatedTypography";
import { useSession } from "next-auth/react";

function ListMenuBar({ menuBar, dataManu, handleCloseMenu }) {
  const { data: session } = useSession();

  return (
    <ul
      className={` ${
        menuBar ? " md:flex" : "hidden"
      }  lg:hidden flex-col p-6 bg-white border-y overflow-y-auto  w-full absolute z-10 top-[100%] left-0 `}
    >
      <li
        onClick={handleCloseMenu}
        className=" text-lg text-[#051036]  font-semibold  py-4   px-2 cursor-pointer"
      >
        {!session && (
          <Link href={`/auth/login`}>
            <TranslatedTypography i18nKey="whoWeAre" variant="subtitle1">
              Login
            </TranslatedTypography>
          </Link>
        )}
        <Link href={`/aboutUs`}>
          <TranslatedTypography i18nKey="whoWeAre" variant="subtitle1">
            About us
          </TranslatedTypography>
        </Link>
        <Link href={`/listProduct`}>
          <TranslatedTypography i18nKey="whoWeAre" variant="subtitle1">
            products
          </TranslatedTypography>
        </Link>
        <Link href={`/contactUs`}>
          <TranslatedTypography i18nKey="ContactUs" variant="subtitle1">
            Contact us
          </TranslatedTypography>
        </Link>
      </li>
    </ul>
  );
}

export default ListMenuBar;
