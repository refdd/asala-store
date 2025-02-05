import React from "react";

function HeaderTableOrder() {
  return (
    <div className=" bg-[#f7f7f7] bora-4 pt-4 pb-4">
      <div className="flex">
        <div className="w-1/2">
          <div className="text-button text-center">Products</div>
        </div>
        <div className="w-1/12">
          <div className="text-button text-center">Price</div>
        </div>
        <div className="w-1/6">
          <div className="text-button text-center">Quantity</div>
        </div>
        <div className="w-1/6">
          <div className="text-button text-center">Total Price</div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTableOrder;
