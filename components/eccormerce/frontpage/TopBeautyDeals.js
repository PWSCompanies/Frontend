import React from "react";
import ShowCaseTwo from "../showcase/showCaseTwo";

export default function TopBeautyDeals({ topbeauty }) {
  return (
    <div className="bg-[#fff] p-2 flex justify-evenly rounded-lg ">
      <ShowCaseTwo data={topbeauty[0]} />
      <ShowCaseTwo data={topbeauty[5]} />
      <ShowCaseTwo data={topbeauty[2]} />
      <ShowCaseTwo data={topbeauty[3]} />
      <ShowCaseTwo data={topbeauty[4]} />
    </div>
  );
}
