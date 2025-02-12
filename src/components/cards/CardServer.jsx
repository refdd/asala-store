import React from "react";

function CardServer({ icon: Icon, title, desc }) {
  return (
    <div className="item pb-8">
      <Icon className="text-3xl text-bsMainBrown" />
      <div className="text-2xl font-semibold mt-4">{title}</div>
      <div className="text-black font-medium mt-2">{desc}</div>
    </div>
  );
}

export default CardServer;
