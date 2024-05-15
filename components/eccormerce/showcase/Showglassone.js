import Image from "next/image";
import React from "react";

export default function Showglassone({ data }) {
  console.log(data, "dataaaaa oooo");
  return (
    <div className="rounded flex flex-col gap-4">
      {/* <img src={`./${data.url}`} alt="image for product" className="h-44" /> */}
      <div className="bg-[#fff] rounded p-2">
        <Image
          src={`${data.url}`}
          alt="image for product"
          width={200}
          height={150}
        />
      </div>

      <div className="font-semibold">₦{data.price}</div>
    </div>
  );
}
