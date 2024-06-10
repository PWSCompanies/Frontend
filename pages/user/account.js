import React from "react";
import { useSelector } from "react-redux";

export default function account() {
  const user = useSelector((state) => state.user.user);

  return (
    <div className="bg-white rounded-xl border border-[#E3E5E5] py-4 w-[100%] h-auto">
      <div className="p-1 whitespace-nowrap text-[14px] leading-[21.79px] font-[500] px-5">
        ACCOUNT OVERVIEW
      </div>
      <hr className="bg-[#DADADA]" />
      <div className="mt-5 px-5 flex flex-col gap-3 w-[100%]">
        {/* Contain name and last */}
        <div className="flex justify-between items-center gap-3 w-[100%]">
          {/* first */}
          <div className="flex flex-col gap-2 items-start w-[100%] md:w-[50%]">
            {/* description */}
            <div className="">First Name</div>
            {/* display value */}
            <div className="rounded-lg border border-[#DADADA] w-[100%] p-3">
              Nelson
            </div>
          </div>
          {/* Second */}
          <div className="flex flex-col gap-2 items-start w-[100%] md:w-[50%]">
            {/* description */}
            <div className="">Last Name</div>
            {/* display value */}
            <div className="rounded-lg border border-[#DADADA] w-[100%] p-3">
              Micheal
            </div>
          </div>
        </div>
        {/* Contain email and phone */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 w-[100%]">
          {/* first */}
          <div className="flex flex-col gap-2 items-start w-[100%] md:w-[50%]">
            {/* description */}
            <div className="">Email Address</div>
            {/* display value */}
            <div className="rounded-lg border border-[#DADADA] w-[100%] p-3">
              neilsonmike14@gmail.com
            </div>
          </div>
          {/* Second */}
          <div className="flex flex-col gap-2 items-start w-[100%] md:w-[50%]">
            {/* description */}
            <div className="">Phone Number</div>
            {/* display value */}
            <div className="flex gap-2 w-[100%]">
              <div className="rounded-lg border border-[#DADADA]  p-3">
                +234
              </div>
              <div className=" grow-1 rounded-lg border border-[#DADADA] w-[100%] p-3">
                8033458896
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
