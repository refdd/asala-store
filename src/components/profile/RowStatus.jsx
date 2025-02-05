"use client"; // Add this if it's a client component
import React from "react";
import CardStatus from "../cards/CardStatus";
import { Hourglass, ClipboardList, GitPullRequestClosed } from "lucide-react";
import { useTranslations } from "next-intl";

function RowStatus() {
  const t = useTranslations("rowStatus"); // Fetch translations

  const statusData = [
    { title: t("awaitingPickup"), value: 4, icon: Hourglass },
    { title: t("cancelledOrders"), value: 12, icon: GitPullRequestClosed },
    { title: t("totalOrders"), value: 200, icon: ClipboardList },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {statusData.map((data, index) => (
        <CardStatus
          key={index}
          title={data.title}
          value={data.value}
          icon={data.icon}
        />
      ))}
    </div>
  );
}

export default RowStatus;
