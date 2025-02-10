import React from "react";
import { Link } from "@/i18n/routing";
import HeaderFrom from "../headers/HeaderFrom";
import SignupFrom from "./SignupFrom";
import AlreadyHaveAccount from "./AlreadyHaveAccount";

function SignupLayout() {
  return (
    <div className=" container mx-auto px-4 py-36 ">
      <div className="flex items-center justify-center ">
        <div className="w-full cardProductShadow rounded-lg py-4 px-3 md:px-4 bg-[#D9D9D940] text-black  md:w-[44%] z-20 relative">
          <HeaderFrom />
          <SignupFrom />
          <AlreadyHaveAccount />
        </div>
      </div>
    </div>
  );
}

export default SignupLayout;
