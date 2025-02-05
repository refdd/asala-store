"use client";
import React, { useState } from "react";
import ProfileSidebar from "./ProfileSidebar";
import ProfileLinks from "./ProfileLinks";
import DashboardLayout from "./DashboardLayout";
import { House, Settings } from "lucide-react";
import SettingsLayout from "./SettingsLayout";
import { useTranslations } from "next-intl";

function ProfileLayout({ ordersUser }) {
  const t = useTranslations("profileLayout"); // Fetch translations

  // Define the array of links
  const links = [
    { icon: <House />, label: t("dashboard"), value: "dashboard" },
    { icon: <Settings />, label: t("settings"), value: "settings" },
  ];

  // State to manage the active link
  const [activeLink, setActiveLink] = useState(links[0].value);

  // Function to handle link clicks
  const handleLinkClick = (value) => {
    setActiveLink(value);
    // You can also send the selected value to a parent component or perform other actions here
  };

  return (
    <div className="container mx-auto px-4 pt-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 ">
        <div className="bg-[#f7f7f7] md:px-8 px-5 md:py-10 py-6 md:rounded-[20px] rounded-xl ">
          <ProfileSidebar />
          <ProfileLinks
            links={links}
            activeLink={activeLink}
            handleLinkClick={handleLinkClick}
          />
        </div>
        {/* dashboard */}
        {activeLink === "dashboard" && (
          <DashboardLayout ordersUser={ordersUser} />
        )}
        {activeLink === "settings" && <SettingsLayout />}
      </div>
    </div>
  );
}

export default ProfileLayout;
