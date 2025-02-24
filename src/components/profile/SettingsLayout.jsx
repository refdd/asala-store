import React from "react";
import FormChangeUserInfo from "./FormChangeUserInfo";

function SettingsLayout({ userData }) {
  return (
    <div className="col-span-2">
      <div className="  w-full p-7 border border-[#e9e9e9] rounded-xl ">
        <FormChangeUserInfo userData={userData} />
      </div>
    </div>
  );
}

export default SettingsLayout;
