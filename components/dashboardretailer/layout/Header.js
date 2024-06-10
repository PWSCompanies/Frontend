import React, { useEffect, useRef, useState } from "react";
import SearchComp from "../../eccormerce/header/SearchComp";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="w-[100%] flex justify-evenly md:justify-center md:gap-10 items-center py-2 px-15 relative">
        <Link href="/">
          <img src="/logo.svg" alt="" />
        </Link>
        <div className="w-[35%] hidden md:flex">
          <SearchComp />
        </div>
        <div
          className={`md:flex w-auto justify-evenly flex-row gap-5 mpr-2  bg-transparent`}
        >
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <img src="/eccormerce/Flags.svg" alt="" className="h-5" />
            <span>Nigeria</span>
          </div>
          <div className="hidden md:flex items-center justify-center gap-2 cursor-pointer">
            <img src="/eccormerce/profile.svg" alt="" className="h-5" />
            <span>Account</span>
          </div>
          <Link
            href="/contactus"
            className="flex items-center justify-center gap-2 cursor-pointer"
          >
            <img src="/eccormerce/help.svg" alt="" className="h-5" />
            <span>Help</span>
          </Link>
        </div>
      </div>
      {/* <div className="w-[100%] flex justify-center md:hidden mb-1 px-3">
        <SearchComp />
      </div> */}
    </>
  );
}
