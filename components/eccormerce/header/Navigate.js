import React from "react";

export default function Navigate() {
  return (
    <div className="w-full flex overflow-x-auto py-4 bg-primary text-white px-4 justify-evenly lg:overflow-hidden">
      <div className="flex items-center gap-4 lg:gap-2 md:w-[100%] md:justify-evenly md:px-20">
        <div className="flex items-center justify-center gap-2 cursor-pointer border border-[#fff] rounded-3xl py-2 px-4">
          <img src="/eccormerce/hamburger.svg" alt="" className="h-5" />
          <span className="whitespace-nowrap">All categories</span>
        </div>
        <div className="whitespace-nowrap">Computers and accesories</div>
        <div className="whitespace-nowrap">Phones and tablet</div>
        <div className="whitespace-nowrap">electronics</div>
        <div className="whitespace-nowrap">fashion</div>
        <div className="whitespace-nowrap">Home and Kitchen</div>
        <div className="whitespace-nowrap">Hair extension and wig</div>
      </div>
    </div>
  );
}

{
  /* <div className="w-[100%] flex justify-evenly items-center py-4 bg-primary text-white px-15">
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
</div> */
}
