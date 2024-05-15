import React from "react";
import ShowcaseTwo from "../showcase/ShowcaseTwo.js";

export default function TopBeautyDeals({ topbeauty }) {
  return (
    <div className="w-full flex overflow-x-auto lg:overflow-hidden bg-[#fff] rounded-lg">
      <div className="bg-[#fff] p-2 flex justify-around  w-[100%]">
        <ShowcaseTwo data={topbeauty[0]} />
        <ShowcaseTwo data={topbeauty[5]} />
        <ShowcaseTwo data={topbeauty[2]} />
        <ShowcaseTwo data={topbeauty[3]} />
        <ShowcaseTwo data={topbeauty[4]} />
      </div>
    </div>
  );
}
