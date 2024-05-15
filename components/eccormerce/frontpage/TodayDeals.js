import React from "react";
import Showglasstwo from "../showcase/Showglasstwo";

export default function TodayDeals({ todaydeals }) {
  return (
    <div className="w-full flex overflow-x-auto lg:overflow-hidden bg-[#fff] rounded-lg ">
      <div className="p-2 flex justify-around w-[100%]">
        <Showglasstwo data={todaydeals[0]} />
        <Showglasstwo data={todaydeals[1]} />
        <Showglasstwo data={todaydeals[2]} />
        <Showglasstwo data={todaydeals[3]} />
        <Showglasstwo data={todaydeals[4]} />
      </div>
    </div>
  );
}
