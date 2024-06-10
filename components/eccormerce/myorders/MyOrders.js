"use client"

import React, { useState } from "react";
import { Tabs } from "./Tabs";
import { ArrowLeftIcon } from "../svg/SvgImages";
import Details from "./Details";

export default function MyOrders() {
  const tabs = ["ONGOING/DELIVERED", "CANCELED/RETURNED"];
  const [orderDetails, setOrderDetails] = useState(false)

  const showOrderDetails = () => {
    setOrderDetails(true)
  }

  const closeOrderDetails = () => {
    setOrderDetails(false)
  }

  return (
    <div className="border w-[100%] min-h-[690px] pb-[223px] bg-white rounded-[10px] border-zinc-300">
      <div className="w-[100%] min-h-[60px] px-5 pt-[22px] pb-4 bg-white border border-zinc-300 justify-start items-center flex">
        <span className="text-zinc-800 text-base font-semibold">{orderDetails ? <span className="flex items-center gap-2 cursor-pointer" onClick={closeOrderDetails}><ArrowLeftIcon />Order Details</span> : "My Orders"}</span>
      </div>
      <div>
        {orderDetails ? <Details /> : <Tabs showOrderDetails={showOrderDetails} tabs={tabs} />}
      </div>
    </div>
  );
}
