import React from "react";
import ShowCaseTwo from "../showcase/showCaseTwo";

export default function TodayDeals({ todaydeals }) {
  return (
    <div className="bg-[#fff] p-2 flex justify-evenly rounded-lg ">
      <ShowCaseTwo data={todaydeals[0]} />
      <ShowCaseTwo data={todaydeals[1]} />
      <ShowCaseTwo data={todaydeals[2]} />
      <ShowCaseTwo data={todaydeals[3]} />
      <ShowCaseTwo data={todaydeals[4]} />
    </div>
  );
}
