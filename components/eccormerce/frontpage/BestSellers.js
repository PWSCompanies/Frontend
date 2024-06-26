import React, { useEffect, useState } from "react";
import Showglassone from "../showcase/Showglassone";
import useMediaBreakpoint from "../../../hooks/useMediaBreakpoint";

export default function BestSellers({ bestSellers }) {
  console.log(bestSellers, "lllllll");

  // const breakpoint = useBreakpoint();
  const breakpoint = useMediaBreakpoint(531);
  console.log(breakpoint, "hhhhoooold");

  return (
    <div className="bg-[#F5F5F5] rounded-lg p-3">
      <div className="text-textgreen font-bold text-lg">BestSellers</div>
      <div className="font-light text-sm">Best selling popular items</div>
      <div className="flex flex-row md:flex-col pt-3">
        <Showglassone data={bestSellers[0]} />
        <Showglassone data={bestSellers[1]} />
        {!breakpoint && <Showglassone data={bestSellers[2]} />}
      </div>
    </div>
  );
}
