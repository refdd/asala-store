import React from "react";
import UserIcons from "./UserIcons";
import LinksNav from "./LinksNav";

function NavLinks({ userData }) {
  return (
    <div className="flex items-center gap-3  justify-end">
      <LinksNav userData={userData} />
      <UserIcons userData={userData} />
    </div>
  );
}

export default NavLinks;
