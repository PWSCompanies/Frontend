import React from "react";
import ShowCaseTwo from "../showcase/showCaseTwo";

export default function TodayDeals({ todaydeals }) {
  return (
    <div className="w-full flex overflow-x-auto lg:overflow-hidden bg-[#fff] rounded-lg ">
      <div className="p-2 flex justify-around w-[100%]">
        <ShowCaseTwo data={todaydeals[0]} />
        <ShowCaseTwo data={todaydeals[1]} />
        <ShowCaseTwo data={todaydeals[2]} />
        <ShowCaseTwo data={todaydeals[3]} />
        <ShowCaseTwo data={todaydeals[4]} />
      </div>
    </div>
  );
}
