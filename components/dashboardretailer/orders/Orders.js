import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../../CustomComponent";
import { ArrowLeftIcon, OrderBagSvg } from "../../dashboardretailer/svg/SvgIcons";
import { orderData } from "./MockData";
import OrderDetails from "./OrderDetails";
import Content from "./Content";

const tabs = [
  { id: 1, label: "ONGOING/DELIVERED", contentKey: "ONGOING_DELIVERED" },
  { id: 2, label: "ONGOING/DELIVERED", contentKey: "CANCELED_RETURNED" },
];

export default function Orders() {
  const [activeTab, setActiveTab] = useState(1);
  const [selectedOrder, setSelectedOrder] = useState(null);

  return (
    <div className="bg-white rounded-xl border border-[#E3E5E5] w-full h-auto pb-4">
      <div className="py-[13px] whitespace-nowrap text-[14px] leading-[21.79px] font-[500] px-5">
        {selectedOrder ? (<span className="flex items-center max-w-max gap-2 cursor-pointer" onClick={() => setSelectedOrder(null)}><ArrowLeftIcon />Order Details</span>) : ("My Orders")}
      </div>
      <hr className="bg-[#DADADA]" />
      <div className="w-[100%] max-h-[570px] min-h-[200px] overflow-y-auto">
        {selectedOrder ? (
          <OrderDetails selectedOrder={selectedOrder} />
        ) : (
          <>
            <div className="flex border-b overflow-auto whitespace-nowrap">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  customStyles={{
                    padding: "py-[13px] px-[35px]",
                    rounded: "0px",
                    textSize: "text-[14px] font-semibold",
                    textColor:
                      activeTab === tab.id ? "text-green-600" : "text-gray-500",
                    bgColor: "bg-transparent",
                    border:
                      activeTab === tab.id
                        ? "border-b-2 border-green-600"
                        : "border-none",
                    customClasses: "",
                  }}
                >
                  {tab.label} ({orderData[tab.contentKey].length})
                </Button>
              ))}
            </div>
            <div className={`p-5 pb-0 flex flex-col gap-3 w-full`}>
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`${activeTab === tab.id ? "block" : "hidden"}`}
                >
                  {orderData[tab.contentKey].length === 0 ? (
                    <div className="flex flex-col justify-center items-center gap-5 py-[98px]">
                      <OrderBagSvg />
                      <div className="flex flex-col items-center gap-2.5">
                        <div className="text-center text-black text-lg font-medium">
                          You have placed no orders yet!
                        </div>
                        <div className="text-center text-neutral-600 text-sm font-normal">
                          All your orders will be saved here for you to access
                          their state anytime.
                        </div>
                      </div>
                      <Link href="/" passHref>
                        <Button
                          customStyles={{
                            padding: "pl-[50.50px] pr-[49.50px] pt-4 pb-[15px]",
                            textColor: "text-white",
                          }}
                        >
                          Continue Shopping
                        </Button>
                      </Link>
                    </div>
                  ) : (
                    orderData[tab.contentKey].map((order) => (
                      <Content key={order.id} order={order} setSelectedOrder={setSelectedOrder} />
                    ))
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
