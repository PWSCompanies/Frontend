import React from "react";
import Showglasstwo from "../showcase/Showglasstwo";

export default function TopBeautyDeals({ topbeauty }) {
  return (
    <div className="w-full flex overflow-x-auto lg:overflow-hidden bg-[#fff] rounded-lg">
      <div className="bg-[#fff] p-2 flex justify-around  w-[100%]">
        <Showglasstwo data={topbeauty[0]} />
        <Showglasstwo data={topbeauty[5]} />
        <Showglasstwo data={topbeauty[2]} />
        <Showglasstwo data={topbeauty[3]} />
        <Showglasstwo data={topbeauty[4]} />
      </div>
    </div>
  );
}
