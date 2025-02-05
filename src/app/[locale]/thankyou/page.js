import HeaderPages from "@/components/headers/HeaderPages";
import ThankYouLayout from "@/components/thankyou/ThankYouLayout";
import React from "react";

function ThankYouPage() {
  return (
    <div>
      <HeaderPages title={"thank_you"} />
      <ThankYouLayout />
    </div>
  );
}

export default ThankYouPage;
