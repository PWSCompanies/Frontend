import React from "react";

export default function Navigate() {
  return (
    <div className="w-[100%] flex justify-evenly items-center py-4 bg-primary text-white px-15">
      <div className="flex items-center justify-center gap-2 cursor-pointer border border-[#fff] rounded-3xl p-2 ">
        <img src="/eccormerce/hamburger.svg" alt="" className="h-5" />
        <span>All categories</span>
      </div>
      <div className="">Computers and accesories</div>
      <div className="">Phones and tablet</div>
      <div className="">electronics</div>
      <div className="">fashion</div>
      <div className="">Home and Kitchen</div>
      <div className="">Hair extension and wig</div>
    </div>
  );
}
