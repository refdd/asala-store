import Image from "next/image";
import React from "react";

function SingleProductImage({ title, image }) {
  return (
    <div className="md:col-span-2 md:h-full">
      <div className="sticky top-2">
        <div className="relative w-full md:w-[400px] h-[500px]">
          <Image
            alt={"product image"}
            title={"Product Image"}
            src={image}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            loading="lazy"
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default SingleProductImage;
