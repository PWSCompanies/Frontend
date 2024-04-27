import React from "react";
import SearchComp from "./SearchComp";

export default function Top() {
  return (
    <div className="w-[100%] flex justify-evenly items-center py-2 px-15">
      <div className="">
        <img src="/logo.svg" alt="" />
      </div>
      <SearchComp />
      <div className="flex items-center justify-center gap-2 cursor-pointer">
        <img src="/eccormerce/Flags.svg" alt="" className="h-5" />
        <span>Nigeria</span>
      </div>
      <div className="flex items-center justify-center gap-2 cursor-pointer">
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
  );
}
