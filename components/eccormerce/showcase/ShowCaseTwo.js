import Image from "next/image";
import React from "react";

export default function ShowCaseTwo({ data }) {
  return (
    <div className="rounded flex flex-col truncate">
      {/* Product image */}
      {/* <img src={`${data.url}`} alt="image for product" className="h-44" /> */}
      <div className="bg-[#fff] rounded p-2">
        <Image
          src={`${data.url}`}
          alt="image for product"
          width={200}
          height={150}
        />
      </div>
      {/* End of product image */}
      {/* Product description */}
      <small className="font-light">{data.description}</small>
      {/* End of product's de */}
      {/*Product Price */}
      <div className="font-semibold">₦{data.price}</div>
      {/* End of price */}
      {/*Rating and sale date*/}
      <div className="flex justify-between text-xs">
        <div className="flex">
          <img src="" alt="" />
          <div className="">{data.rating}</div>
        </div>
        <div className="flex">
          <div className="">Sale</div>
          <div className="">10 days</div>
        </div>
      </div>
      {/* End of Rating and sale date*/}
      {/* Availabe */}
      <div className="flex">
        <img src="" alt="" />
        <div className="">4 pcs in the store</div>
      </div>
      {/* Set up available */}
    </div>
  );
}
