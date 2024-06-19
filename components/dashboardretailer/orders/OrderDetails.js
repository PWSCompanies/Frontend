import React from "react";
import { Button } from "../../CustomComponent";
import Image from "next/image";
import { formatNumberWithCommas } from "../../formatNumber"

export default function OrderDetails({ selectedOrder }) {

  const calculateTotal = (price, quantity) => {
    return (price * quantity).toFixed(2);
  };

  return (
    <div className="">
      <div className="w-[100%] px-5 pt-4 bg-green-600/5 flex-col justify-end items-start gap-4 flex">
        <div className="self-stretch h-[126px] flex-col justify-start items-start gap-[5px] flex">
          <span className="text-black text-base font-semibold ">
            Order nº {selectedOrder.orderNumber}
          </span>
          <span className="text-neutral-600 text-sm font-normal ">1 Items x {selectedOrder.quantity}</span>
          <span className="text-neutral-600 text-sm font-normal ">
            Placed on 01-04-2024
          </span>
          <span className="text-neutral-600 text-sm font-normal ">
            Total: ₦ {formatNumberWithCommas(calculateTotal(selectedOrder.price, selectedOrder.quantity))}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-5">
        <div className="text-black text-base font-semibold">
          ITEMS IN YOUR ORDER
        </div>
        <div className="w-[100%] min-h-[170px] mb-2.5 p-2.5 relative bg-white rounded-[10px] border border-zinc-30 justify-between items-start flex">
          <div className="flex w-[100%] flex-col sm:flex-row gap-4">
            <div className="w-[164px] h-[164px]">
              <Image src={selectedOrder.imageSrc} width={164} height={164} className="w-full h-full" alt={selectedOrder.name} />
            </div>
            <div className="flex-col justify-start items-start gap-2.5 flex">
              <div className="flex-col justify-start items-start gap-2.5 flex">
                <p className="text-zinc-800 max-w-[232px] text-base font-medium truncate">
                  {selectedOrder.name}
                </p>
                <span className="text-neutral-600 text-sm font-normal">
                  QTY: {selectedOrder.quantity}
                </span>
                <span className="text-zinc-800 text-base font-semibold">
                  ₦{formatNumberWithCommas(selectedOrder.price)}
                </span>
                <span className="text-neutral-600 text-sm font-normal">
                  Delivered On: <b>{selectedOrder.date}</b>
                </span>
              </div>
              <div className="flex gap-2 items-center flex-wrap sm:flex-nowrap">
                <Button
                  disabled={true}
                  customStyles={{
                    padding: "px-3 lg:px-5 py-1.5 lg:py-2.5",
                    bgColor: "bg-green-600/10",
                    border: "border-none",
                    textColor: "text-green-600 uppercase",
                    customClasses: "max-w-max",
                  }}
                >
                  {selectedOrder.status}
                </Button>
                <div className="relative lg:absolute right-0 lg:right-2 top-0 lg:top-2">
                  <Button
                  customStyles={{
                    padding: "px-3 lg:px-5 py-1.5 lg:py-2.5",
                    customClasses: "max-w-max whitespace-nowrap",
                  }}
                >
                  BUY AGAIN
                </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 flex gap-5">
        <div className="w-[100%] flex-col md:flex-row justify-start items-start gap-5 flex">
          <div className="w-[100%] flex-col justify-start items-start flex">
            <div className="w-[100%] px-5 py-[19px] bg-white text-zinc-800 text-base font-semibold rounded-tl-[15px] rounded-tr-[15px] border border-zinc-300 justify-start items-center flex">
              PAYMENT INFORMATION
            </div>
            <div className="w-[100%] min-h-[285px] px-5 py-5 bg-white rounded-bl-[15px] rounded-br-[15px] border border-zinc-300 justify-start items-center flex">
              <div className="flex-col justify-start items-start gap-2.5 flex">
                <span className="text-zinc-800 text-sm font-semibold">
                  Payment Method
                </span>
                <span className="text-neutral-600 text-base font-normal">
                  Pay with Cards, Bank Transfer or USSD
                </span>
                <span className="text-zinc-800 text-sm font-semibold">
                  Payment Details
                </span>
                <span className="text-neutral-600 text-base font-normal">
                  Items total: ₦ 17,460
                </span>
                <span className="text-neutral-600 text-base font-normal">
                  Delivery Fees: ₦1,110
                </span>
                <span className="text-green-600 text-base font-normal">
                  Total: ₦ {formatNumberWithCommas(calculateTotal(selectedOrder.price, selectedOrder.quantity))}
                </span>
              </div>
            </div>
          </div>
          <div className="w-[100%] min-h-[250px] flex-col justify-start items-start flex">
            <div className="w-[100%] px-5 py-[19px] bg-white text-zinc-800 text-base font-semibold rounded-tl-[15px] rounded-tr-[15px] border border-zinc-300 justify-start items-center flex">
              DELIVERY INFORMATION
            </div>
            <div className="w-[100%] px-5 py-5 bg-white rounded-bl-[15px] rounded-br-[15px] border border-zinc-300 justify-start items-center flex">
              <div className="flex-col justify-start items-start gap-2.5 flex">
                <span className="text-zinc-800 text-sm font-semibold">
                  Delivery Method
                </span>
                <span className="text-neutral-600 text-base font-normal">
                  Door Delivery
                </span>
                <span className="text-zinc-800 text-sm font-semibold">
                  Shipping Address
                </span>
                <span className="text-neutral-600 text-base font-normal">
                  Nelson Michael
                </span>
                <span className="text-neutral-600 text-base font-normal">
                  IITA
                </span>
                <span className="text-neutral-600 text-base font-normal">
                  IBADAN-OJOO, Oyo
                </span>
                <div>
                  <span className="text-neutral-600 text-base font-normal">
                    Door Delivery. Fulfilled by PWS official store.
                  </span>
                  <p className="text-neutral-600 text-base font-normal">
                    Delivery between
                    <span className="text-green-600">05 April</span> and
                    <span className="text-green-600">08 April</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
