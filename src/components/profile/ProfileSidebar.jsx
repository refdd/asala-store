import React from "react";
import UserAvatar from "./UserAvatar";
import { Suspense } from "react";

function ProfileSidebar() {
  return (
    <div className=" ">
      <Suspense fallback={<>...</>}>
        <UserAvatar />
      </Suspense>
    </div>
  );
}

export default ProfileSidebar;
