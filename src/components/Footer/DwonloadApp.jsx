import Image from "next/image";
import React from "react";

function DwonloadApp() {
  return (
    <div className="pt-5 md:pt-28 flex  items-center md:justify-end gap-2 md:w-full">
      <div className="relative w-full  h-[40px]">
        <Image
          alt={"google app image"}
          title={"google app image"}
          src={"/assets/images/apple-store 1.png"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          loading="lazy"
          className="object-contain"
        />
      </div>
      <div className="relative w-full  h-[40px]">
        <Image
          alt={"google app image"}
          title={"google app image"}
          src={"/assets/images/google-play 1.png"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          loading="lazy"
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default DwonloadApp;
