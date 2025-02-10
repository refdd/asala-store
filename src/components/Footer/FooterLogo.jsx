import React from "react";
import DwonloadApp from "./DwonloadApp";
import Image from "next/image";

function FooterLogo() {
  return (
    <div className="md:col-span-2 block md:hidden">
      <div className="relative w-full h-[202px] bg-white rounded-md">
        <Image
          src={"/assets/images/foooterlogn.svg"}
          fill
          loading="lazy"
          alt="footer loge "
          className=""
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
        />
      </div>
      <DwonloadApp />
      <div className="flex items-center justify-end h-full"></div>
    </div>
  );
}

export default FooterLogo;
