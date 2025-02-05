import React from "react";
import RowStatus from "./RowStatus";
import { TableResendOrder } from "../tables/TableResendOrder";

function DashboardLayout({ ordersUser }) {
  return (
    <div className="col-span-2">
      <RowStatus />
      <TableResendOrder ordersUser={ordersUser} />
    </div>
  );
}

export default DashboardLayout;
