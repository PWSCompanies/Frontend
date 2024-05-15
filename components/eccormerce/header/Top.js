import React, { useState } from "react";
import SearchComp from "./SearchComp";
import { Menuharmbuger } from "../svg/SvgImages";

export default function Top() {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className="w-[100%] flex justify-evenly md:justify-center md:gap-10 items-center py-2 px-15 relative">
        <div className="">
          <img src="/logo.svg" alt="" />
        </div>
        <div className="w-[35%] hidden md:flex">
          <SearchComp />
        </div>
        <div className="flex md:hidden items-center justify-center gap-2 cursor-pointer">
          <img src="/eccormerce/profile.svg" alt="" className="h-5" />
          <span>Account</span>
        </div>
        <div
          className={`${
            nav ? "flex" : "hidden"
          } md:flex md:w-auto  md:justify-evenly md:relative md:p-0 md:flex-row md:rounded-none md:shadow-none md:gap-5 md:pr-2 md:right-0 md:top-0 md:bg-transparent absolute right-3 top-10 flex-col justify-center items-start gap-5 w-50 p-5 rounded shadow-lg bg-[#fff]`}
        >
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <img src="/eccormerce/Flags.svg" alt="" className="h-5" />
            <span>Nigeria</span>
          </div>
          <div className="hidden md:flex items-center justify-center gap-2 cursor-pointer">
            <img src="/eccormerce/profile.svg" alt="" className="h-5" />
            <span>Account</span>
          </div>
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <img src="/eccormerce/help.svg" alt="" className="h-5" />
            <span>Help</span>
          </div>
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <img src="/eccormerce/cart.svg" alt="" className="h-5" />
            <span>Cart</span>
          </div>
        </div>
        {/* harmbuger menu side */}
        <div
          onClick={() => setNav(!nav)}
          className="md:hidden block cursor-pointer"
        >
          <Menuharmbuger />
        </div>
      </div>
      <div className="w-[100%] flex justify-center md:hidden mb-1 px-3">
        <SearchComp />
      </div>
    </>
  );
}
