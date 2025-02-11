import React from "react";
import WhyUsFeature from "./WhyUsFeature";
import WhyUsContent from "./WhyUsContent";

function WhyChooseus() {
  return (
    <div className="py-20 container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <WhyUsFeature />
        <WhyUsContent />
      </div>
    </div>
  );
}

export default WhyChooseus;
