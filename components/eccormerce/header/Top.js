import React, { useEffect, useRef, useState } from "react";
import SearchComp from "./SearchComp";
import { Menuharmbuger } from "../svg/SvgImages";
import Link from "next/link";
import useClickOutside from "../../../hooks/useClickOutside";

export default function Top() {
  const [nav, setNav] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const accountRef = useRef();
  const navRef = useRef();

  const handleClickOutsideAccount = (type) => {
    setShowAccount(false);
  };

  const handleClickOutsideNav = (type) => {
    setNav(false);
  };

  useClickOutside(accountRef, handleClickOutsideAccount);
  useClickOutside(navRef, handleClickOutsideNav);

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
          onClick={() => setShowAccount(!showAccount)}
          className="flex md:hidden items-center justify-center gap-2 cursor-pointer"
        >
          <img src="/eccormerce/profile.svg" alt="" className="h-5" />
          <span>Account</span>
        </div>
        <div
          ref={navRef}
          className={`${
            nav ? "flex" : "hidden"
          } md:flex md:w-auto  md:justify-evenly md:relative md:p-0 md:flex-row md:rounded-none md:shadow-none md:gap-5 md:pr-2 md:right-0 md:top-0 md:bg-transparent absolute right-3 top-10 flex-col justify-center items-start gap-5 w-50 p-5 rounded shadow-lg bg-[#fff]`}
        >
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <img src="/eccormerce/Flags.svg" alt="" className="h-5" />
            <span>Nigeria</span>
          </div>
          <div
            onClick={() => setShowAccount(!showAccount)}
            className="hidden md:flex items-center justify-center gap-2 cursor-pointer"
          >
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
          <Link
            href="/cart"
            className="flex items-center justify-center gap-2 cursor-pointer"
          >
            <img src="/eccormerce/cart.svg" alt="" className="h-5" />
            <span>Cart</span>
          </Link>
        </div>
        {/* harmbuger menu side */}
        <div
          onClick={() => setNav(!nav)}
          className="md:hidden block cursor-pointer"
        >
          <Menuharmbuger />
        </div>

        {showAccount && (
          <div
            ref={accountRef}
            className="absolute right-20 md:right-52 top-14 flex flex-col justify-center items-center gap-5 w-64 shadow-xl bg-[#fff] py-3 rounded-xl border border-[#DADADA] z-[99999999]"
          >
            <div className="flex flex-col justify-center items-center w-[100%] gap-2 px-3">
              {/* Login */}
              <div className="bg-[#00BA34] text-white text-center rounded-lg py-3 w-[95%] cursor-pointer">
                Register
              </div>
              {/* Sign up */}
              <div className="border border-[#DADADA] text-black text-center rounded-lg py-3 w-[95%] cursor-pointer">
                Sign in
              </div>
            </div>
            <hr className="w-[100%] text-[#00ff00]" />
            {/*down part showing icons */}
            <div className="px-5 flex flex-col justify-center items-start w-[100%] gap-5">
              {/* Icon one */}
              <div className="flex items-center justify-center gap-2 cursor-pointer">
                <img src="/eccormerce/profile.svg" alt="" className="h-5" />
                <span>Account</span>
              </div>
              {/* Icon two */}
              <div className="flex items-center justify-center gap-2 cursor-pointer">
                <img src="/eccormerce/orders.svg" alt="" className="h-5" />
                <span>My Orders</span>
              </div>

              {/* Icon three */}
              <div className="flex items-center justify-center gap-2 cursor-pointer">
                <img src="/eccormerce/wishlist.svg" alt="" className="h-5" />
                <span>Wishlist</span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-[100%] flex justify-center md:hidden mb-1 px-3">
        <SearchComp />
      </div>
    </>
  );
}
