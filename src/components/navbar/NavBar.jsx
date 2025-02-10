"use client";
import React, { useEffect, useState } from "react";
import LogoNav from "./LogoNav";
import NavLinks from "./NavLinks";
import MenuIcon from "./MenuIcon";
import ListMenuBar from "./ListMenuBar";
import dynamic from "next/dynamic";
import { useDispatch } from "react-redux";
import { executeCartItems } from "@/redux/cartSlice";
import { useLocale } from "next-intl";
import CartNavIcon from "./CartNavIcon";
import ProfilNavIcon from "./ProfilNavIcon";
import LanguageSwitcher from "../translation/LanguageSwitcher";
const MainSearch = dynamic(() => import("./MainSearch"), {
  ssr: false,
});
function NavBar({ userData }) {
  const [menuBar, setMenuBar] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const locale = useLocale();

  const dispatch = useDispatch();
  const handelMenubar = () => {
    setMenuBar(!menuBar);
  };
  const handleCloseMenu = () => {
    setMenuBar(false);
  };
  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      changeBackground();
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    dispatch(executeCartItems({ lang: locale, token: userData?.token }));
  }, []);
  return (
    <div
      dir={locale === "ar" ? "ltr" : "rtl"}
      className={`${
        navbar ? "fixed bg-bsMainBrown py-1" : "fixed "
      }  top-0 z-50 w-full py-1  `}
    >
      <div className=" 2xl:container md:px-10 mx-auto px-4 relative">
        <div className="grid grid-cols-2 lg:grid-cols-8 gap-3 items-center ">
          <LogoNav navbar={navbar} />
          <div className="col-span-4 hidden md:block">
            <MainSearch navbar={navbar} />
          </div>
          <div className=" md:hidden flex items-center justify-end gap-4">
            <CartNavIcon />
            <ProfilNavIcon userData={userData} />
            <LanguageSwitcher />
            <MenuIcon handelMenubar={handelMenubar} menuBar={menuBar} />
          </div>
          <div className=" lg:col-span-3 hidden lg:block">
            <NavLinks userData={userData} />
          </div>
        </div>

        {/* <ListMenuBar
          menuBar={menuBar}
          // dataManu={dataManu}
          handleCloseMenu={handleCloseMenu}
        /> */}
      </div>
      {!navbar && (
        <div className="absolute w-[240px]  h-full top-0 -left-14 bg-[#FFFFFFBF] rounded-r-[30px] z-10" />
      )}
    </div>
  );
}

export default NavBar;
