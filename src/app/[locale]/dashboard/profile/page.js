import { auth } from "@/auth";
import HeaderPages from "@/components/headers/HeaderPages";
import ProfileLayout from "@/components/profile/ProfileLayout";
import { redirect } from "@/i18n/routing";
import { getData } from "@/utils/featchApi";
import React from "react";

async function UserProfile({ params }) {
  const { locale } = await params;
  const session = await auth();
  if (!session) {
    redirect(`/${locale}`);
  }
  const userInfo = await getData(
    "/profile/myinfo",
    locale,
    session?.user?.token
  );
  const ordersUser = await getData(
    "/website/orders/?private_number=&order_status_id=&order_state_delegate_id&payment_type_id",
    locale,
    session?.user?.token
  );

  return (
    <div>
      <HeaderPages title={"profile"} />
      <ProfileLayout ordersUser={ordersUser?.data} userData={session?.user} />
    </div>
  );
}

export default UserProfile;
