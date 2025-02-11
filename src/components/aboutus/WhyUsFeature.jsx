import React from "react";
import CardWhyUsCard from "../cards/CardWhyUsCard";
import { BadgeCheck, Headset, RotateCcw, TreePalm } from "lucide-react";

const whyUsData = [
  {
    icon: (
      <RotateCcw className="text-3xl text-white group-hover:text-bsMainBrown" />
    ),
    title: "100% Fresh",
    description: "Purchasing from select family farmers who farm organically.",
  },
  {
    icon: (
      <TreePalm className="text-3xl text-white group-hover:text-bsMainBrown" />
    ),
    title: "100% Fresh",
    description: "Purchasing from select family farmers who farm organically.",
  },
  {
    icon: (
      <Headset className="text-3xl text-white group-hover:text-bsMainBrown" />
    ),
    title: "Support 24/7",
    description: "We provide round-the-clock support for our customers.",
  },
  {
    icon: (
      <BadgeCheck className="text-3xl text-white group-hover:text-bsMainBrown" />
    ),
    title: "Secured Payment",
    description: "Your payments are secure with our advanced encryption.",
  },
];

function WhyUsFeature() {
  return (
    <div className="py-10 px-10 relative">
      {/* shape */}
      <div
        style={{ backgroundImage: "url('/assets/images/col-arrow.png')" }}
        className=" absolute top-0 left-0 bg-left-top bg-no-repeat w-full h-full z-10 "
      ></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 z-20">
        {whyUsData.map((data, index) => (
          <CardWhyUsCard
            key={index}
            icon={data.icon}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
}

export default WhyUsFeature;
