import Image from "next/image";
import React from "react";
import { Instock, Rating } from "../svg/SvgImages";
import { useRouter } from "next/router";

function Showglasstwo({ data }) {
  const router = useRouter();

  return (
    <div
      className="rounded flex flex-col cursor-pointer"
      onClick={() => router.push("/description")}
    >
      {/* Product image */}
      {/* <img src={`${data.url}`} alt="image for product" className="h-44" /> */}
      <div className="bg-[#fff] rounded p-2">
        <Image
          src={`${data?.url}`}
          alt="image for product"
          width={200}
          height={150}
        />
      </div>
      {/* End of product image */}
      {/* Product description */}
      <small className="font-normal w-[50%] overflow-hidden overflow-ellipsis whitespace-nowrap truncate">
        {data?.description}
      </small>
      {/* End of product's de */}
      {/*Product Price */}
      <div className="font-bold text-lg">₦{data?.price}</div>
      {/* End of price */}
      {/*Rating and sale date*/}
      <div className="flex justify-start items-center gap-2 text-xs">
        <div className="flex">
          {/* <img src="" alt="" /> */}
          <div className="text-xs flex gap-1">
            <Rating />
            <span>{data?.rating}/16</span>
          </div>
        </div>
        <div className="flex bg-[#00BA34] bg-opacity-30 rounded-lg px-1 py-1 gap-1 text-xs">
          <div className="text-textgreen">Sale</div>
          <div className="text-[#555555]">10 days</div>
        </div>
      </div>
      {/* End of Rating and sale date*/}
      {/* Availabe */}
      {/* <img src="" alt="" /> */}
      <div className="flex gap-2">
        <Instock />
        <div className="text-xs">4 pcs in the store</div>
      </div>
      {/* Set up available */}
    </div>
  );
}

export default Showglasstwo;
