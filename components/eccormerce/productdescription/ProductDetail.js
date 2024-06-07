import React from "react";

export default function ProductDetail({ data }) {
  return (
    <div className="mt-3 p-5">
      {/* Benefits */}
      <div className="flex flex-col gap-3">
        {Object.keys(data.benefits).map((key, index) => (
          <div className="flex gap-2" key={index}>
            <div className="">.</div>
            <div className="">{data.benefits[key]}</div>
          </div>
        ))}
      </div>
      {/* Product description */}
      <div className="mt-5">{data.product_describe}</div>
      {/* How to use */}
      <div className="mt-5">
        <div className="">
          <span className="text-black">How to use:</span>
          {data.how_to_use}
        </div>
      </div>
      {/* Ingredients */}
      <div className="mt-5">
        <div className="">
          <span className="text-black">Ingredients</span>
          {data.ingredients}
        </div>
      </div>
    </div>
  );
}
