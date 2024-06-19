import Image from "next/image";
import React from "react";
import { Button } from "../../CustomComponent";

export default function Content({ order, setSelectedOrder }) {

  return (
    <div className="border p-2.5 pr-5 mb-2 rounded-[10px] flex justify-between">
      <div className="flex w-full flex-col sm:flex-row gap-4">
        <div className="w-[150px] md:w-[70px] lg:w-[150px] h-[150px] md:h-[70px] lg:h-[150px] bg-black/5 rounded-[10px] overflow-hidden">
          <Image src={order.imageSrc} width={5000} height={5000} className="w-[150px] md:w-[70px] lg:w-[150px] h-[150px] md:h-[70px] object-cover" alt={order.name} />
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="text-zinc-800 text-base font-medium truncate max-w-[230px]">
            {order.name}
          </div>
          <div className="text-neutral-600 text-sm font-normal">
            Order {order.orderNumber}
          </div>
          <div className="text-neutral-600 text-sm font-normal">
            Delivered On: <b>{order.date}</b>
          </div>
          <div className="flex items-center flex-wrap-reverse gap-2.5">
          <Button
            disabled={true}
            customStyles={{
              padding: "px-3 sm:px-5 py-1.5 sm:py-2.5",
              bgColor: "bg-green-600/10",
              border: "border-none",
              textColor: "text-green-600 uppercase",
              customClasses: "max-w-max",
            }}
          >
            {order.status}
          </Button>
            <div className="text-green-600 text-sm block lg:hidden whitespace-nowrap cursor-pointer max-h-[19px] font-semibold uppercase" onClick={() => setSelectedOrder(order)}>see details</div>
          </div>
        </div>
      </div>
      <div className="text-green-600 text-sm hidden lg:block whitespace-nowrap cursor-pointer max-h-[19px] font-semibold uppercase" onClick={() => setSelectedOrder(order)}>see details</div>
    </div>
  );
}
