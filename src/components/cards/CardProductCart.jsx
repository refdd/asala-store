import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function CardProductCart({
  title,
  image,
  price,
  allQuantity,
  onQuantityChange,
  onRemove,
  product_id,
}) {
  const [quantity, setQuantity] = useState(allQuantity);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    onQuantityChange(quantity + 1, product_id);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      onQuantityChange(quantity - 1, product_id);
    }
  };

  const handleRemove = () => {
    onRemove();
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row  md:items-center gap-3">
        <div className="relative w-20 h-20 flex ">
          <Image
            alt={title}
            title={title}
            src={image}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            loading="lazy"
            className="object-cover rounded-full"
          />
        </div>
        {/* title */}
        <div className="flex-1">
          <h3 className="font-semibold">{title}</h3>
          <div className="text-sm text-gray-500">
            {price} x {allQuantity}
          </div>
        </div>
        {/* actions */}
        <div className="">
          <div className="flex justify-between items-center gap-2">
            <div className="flex items-center border rounded">
              <button
                onClick={handleIncrement}
                className="p-1 hover:bg-gray-100 transition-colors"
              >
                <Plus />
              </button>
              <span className="px-3 py-1 min-w-[40px] text-center">
                {quantity}
              </span>
              <button
                onClick={handleDecrement}
                className="p-1 hover:bg-gray-100 transition-colors"
              >
                <Minus />
              </button>
            </div>
            <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
              <X />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProductCart;
