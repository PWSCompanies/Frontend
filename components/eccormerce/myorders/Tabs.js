// components/Tabs.js
import React, { useState } from "react";
import { orderData } from "./MockData";
import { OrderContent } from "./OrderContent";

export const Tabs = ({ tabs, showOrderDetails }) => {
  const [activeTab, setActiveTab] = useState(0);

  const getTabTitleWithCount = (tab, data) => {
    const count = data.length;
    return `${tab} (${count})`;
  };

  const tabKeys = Object.keys(orderData);

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 h-[60px] -mb-px font-medium text-sm focus:outline-none ${
              activeTab === index
                ? "border-b-[4px] border-green-600 text-green-600"
                : "border-b-[4px] border-transparent text-gray-600 hover:text-gray-800"
            }`}
          >
            {getTabTitleWithCount(tab, orderData[tabKeys[index]])}
          </button>
        ))}
      </div>
      <div className="p-5">
        <OrderContent orders={orderData[tabKeys[activeTab]]} showOrderDetails={showOrderDetails} />
      </div>
    </div>
  );
};
