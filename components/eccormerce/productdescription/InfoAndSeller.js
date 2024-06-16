import React from "react";

export default function InfoAndSeller() {
  return (
    <div className="flex flex-col gap-4 pt-7 md:pt-0 w-[100%] md:w-auto">
      {/* info on logistics */}
      <div className="bg-white shadow-lg flex flex-col border border-[#DADADA] rounded-lg w-[100%] h-[100%] md:pb-20">
        <div className="p-3 whitespace-nowrap text-[16px] leading-[21.79px] font-[500]">
          Delivery & Returns
        </div>
        <hr className="bg-[#DADADA]" />

        <div className="flex flex-col gap-7 p-3 mt-4">
          {/* car */}
          <div className="flex gap-1 items-start">
            {/* Icon */}
            <div className="">Icon</div>
            {/* Info */}
            <div className="">
              {/* head */}
              <div className="font-[600] text-[14px]">Delivery</div>
              {/* sub head */}
              <div className="font-[400] text-[12px] text-[#000]">
                Delivery Fees ₦ 620
              </div>
              {/* details */}
              <div className="text-[#555555] text-[12px] font-[300] leading-[16.34px]">
                Ready for delivery between 20 March & 22 March when you order
                within next 3hrs 15mins
              </div>
            </div>
          </div>
          {/* Return Policy */}
          <div className="flex gap-1 items-start">
            {/* Icon */}
            <div className="">Icon</div>
            {/* Info */}
            <div className="">
              {/* head */}
              <div className="font-[600] text-[14px]">Return Policy</div>
              {/* details */}
              <div className="text-[#555555] text-[12px] font-[300] leading-[16.34px]">
                Free return within 7 days for ALL eligible items
              </div>
            </div>
          </div>
          {/* Warranty */}
          <div className="flex gap-1 items-start">
            {/* Icon */}
            <div className="">Icon</div>
            {/* Info */}
            <div className="">
              {/* head */}
              <div className="font-[600] text-[14px]">Warranty</div>
              {/* details */}
              <div className="text-[#555555] text-[12px] font-[300] leading-[16.34px]">
                Warranty information unavailable for this item.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sellers info */}
      <div className="bg-white shadow-lg flex flex-col border border-[#DADADA] rounded-lg w-[100%] h-[100%] pb-20">
        <div className="p-3 whitespace-nowrap text-[16px] leading-[21.79px] font-[500] flex justify-between items-center">
          <div className="">Seller Information</div>
          <div className="bg-[#00BA34] bg-opacity-[10%] rounded-lg text-[#00BA34] p-3 font-semibold text-sm">
            View seller store
          </div>
        </div>
        <hr className="bg-[#DADADA]" />

        <div className="mt-4 flex justify-start gap-3 items-center px-6">
          {/* Sellers name starter */}
          <div className="">Icons</div>
          {/* info on seller */}
          <div className="">
            {/* Seller stores name */}
            <div className="text-[16px]">Allure Beauty Store</div>
            <div className="text-[14px]">30% Seller Score</div>
          </div>
        </div>
      </div>
    </div>
  );
}
