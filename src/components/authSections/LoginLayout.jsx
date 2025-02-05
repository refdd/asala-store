import React from "react";
import LoginFrom from "./LoginFrom";
import HeaderFrom from "../headers/HeaderFrom";
import { Link } from "@/i18n/routing";

function LoginLayout() {
  return (
    <div className=" container mx-auto px-4 py-36 ">
      <div className="flex items-center justify-center ">
        <div className="w-full cardProductShadow rounded-lg py-4 px-3 md:px-4 bg-[#D9D9D940] text-black  md:w-[44%] z-20 relative">
          <HeaderFrom />
          <LoginFrom />
          <p className=" pt-4">
            ليس لديك حساب؟{" "}
            <Link href="/auth/signup" className="">
              <span className="text-bsMainPuple">انشاء حساب</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginLayout;
