import React from "react";
import ShowcaseOne from "../showcase/ShowcaseOne";

export default function BestSellers({ bestSellers }) {
  console.log(bestSellers, "lllllll");
  return (
    <div className="bg-[#F5F5F5] rounded-lg p-3">
      <div className="text-textgreen font-bold text-lg">BestSellers</div>
      <div className="font-light text-sm">Best selling popular items</div>
      <div className="flex flex-col pt-3">
        <ShowcaseOne data={bestSellers[0]} />
        <ShowcaseOne data={bestSellers[1]} />
        <ShowcaseOne data={bestSellers[2]} />
      </div>
    </div>
  );
}
