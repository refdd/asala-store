import React from "react";
import CartNavIcon from "./CartNavIcon";
import ProfilNavIcon from "./ProfilNavIcon";
import LanguageSwitcher from "../translation/LanguageSwitcher";

function UserIcons({ userData }) {
  return (
    <div className="flex items-center gap-3 ">
      <CartNavIcon />
      <ProfilNavIcon userData={userData} />
      <LanguageSwitcher />
    </div>
  );
}

export default UserIcons;
