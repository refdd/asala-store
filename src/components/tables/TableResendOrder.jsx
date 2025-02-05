import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Phone } from "lucide-react";
import { useTranslations } from "next-intl";

const getStatusColor = (status) => {
  switch (status) {
    case "Pending":
      return "text-yellow-600 bg-yellow-100";
    case "Delivery":
      return "text-blue-600 bg-blue-100";
    case "Completed":
      return "text-green-600 bg-green-100";
    case "Canceled":
      return "text-red-600 bg-red-100";
    default:
      return "";
  }
};

export function TableResendOrder({ ordersUser }) {
  const t = useTranslations("orders");

  const transformedOrders =
    ordersUser?.items?.map((order) => ({
      order: order.private_number,
      mobile: order.customer_mobile_whatsapp,
      products: {
        name: order.customer_name,
        category: "N/A",
        image: "/assets/images/default-product.jpg",
      },
      pricing: `$${order.total_price}`,
      status: order.name_order_status,
    })) || [];

  if (transformedOrders.length === 0) {
    return (
      <div className="mt-10">
        <h3 className="text-xl font-bold pb-5">{t("recentOrders")}</h3>
        <div className="text-center py-10 text-gray-500">{t("noOrders")}</div>
      </div>
    );
  }

  return (
    <div className="mt-10">
      <h3 className="text-xl font-bold pb-5">{t("recentOrders")}</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">{t("order")}</TableHead>
            <TableHead>{t("products")}</TableHead>
            <TableHead>{t("pricing")}</TableHead>
            <TableHead className="text-right">{t("status")}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transformedOrders.map((order, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{order.order}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div>
                    <div className="font-medium">{order.products.name}</div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">
                        {order.mobile}
                      </span>
                      <Phone className="w-4 h-4 text-bsMainPuple" />
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{order.pricing}</TableCell>
              <TableCell className="text-right">
                <span
                  className={`px-2 py-1 rounded-full text-sm ${getStatusColor(
                    order.status
                  )}`}
                >
                  {t(order.status.toLowerCase())}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
