import React from "react";
import ShowcaseTwo from "../showcase/ShowcaseTwo.js";

export default function TodayDeals({ todaydeals }) {
  return (
    <div className="w-full flex overflow-x-auto lg:overflow-hidden bg-[#fff] rounded-lg ">
      <div className="p-2 flex justify-around w-[100%]">
        <ShowcaseTwo data={todaydeals[0]} />
        <ShowcaseTwo data={todaydeals[1]} />
        <ShowcaseTwo data={todaydeals[2]} />
        <ShowcaseTwo data={todaydeals[3]} />
        <ShowcaseTwo data={todaydeals[4]} />
      </div>
    </div>
  );
}
