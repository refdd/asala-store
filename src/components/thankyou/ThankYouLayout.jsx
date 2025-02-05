import React from "react";
import { Button } from "@/components/ui/button"; // Import the Button component from shadcn/ui
import { Link } from "@/i18n/routing";

function ThankYouLayout() {
  return (
    <div className="flex flex-col items-center justify-center  py-32 bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h1>
        <p className="text-gray-700 mb-6">
          Your order has been successfully placed. We appreciate your business!
        </p>
        <Link href={`/`}>
          <Button className="bg-bsMainPuple hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
            Back to Shipping
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ThankYouLayout;
