import Image from "next/image";
import React from "react";
import { Button } from "../cart/CustomComponent";
import sampleImg from "../assets/sample1.png";

export default function Details() {
  return (
    <div className="">
      <div className="w-[100%] px-5 pt-4 bg-green-600/5 flex-col justify-end items-start gap-4 flex">
        <div className="self-stretch h-[126px] flex-col justify-start items-start gap-[5px] flex">
          <span className="text-black text-base font-semibold ">
            Order nº 1712417482
          </span>
          <span className="text-neutral-600 text-sm font-normal ">1 Items</span>
          <span className="text-neutral-600 text-sm font-normal ">
            Placed on 01-04-2024
          </span>
          <span className="text-neutral-600 text-sm font-normal ">
            Total: ₦ 18,570
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-5">
        <div className="text-black text-base font-semibold">
          ITEMS IN YOUR ORDER
        </div>
        <div className="w-[100%] min-h-[170px] mb-2.5 p-2.5 relative bg-white rounded-[10px] border border-zinc-30 justify-between items-start flex">
          <div className="flex w-[100%] flex-col sm:flex-row gap-4">
            <div className="w-[164px] min-h-[164px] overflow-hidden relative bg-black/5 rounded-[10px]">
              <Image
                src={sampleImg}
                width={164}
                height={164}
                className="w-[100%] h-[100%]"
                alt=""
              />
            </div>
            <div className="flex-col justify-start items-start gap-2.5 flex">
              <div className="flex-col justify-start items-start gap-2.5 flex">
                <p className="text-zinc-800 max-w-[232px] text-base font-medium truncate text-ellipsis overflow-hidden">
                  Jumiso All Day Vitamin Brighte..
                </p>
                <span className="text-neutral-600 text-sm font-normal">
                  QTY: 1
                </span>
                <span className="text-zinc-800 text-base font-semibold">
                  ₦12,699
                </span>
                <div className="justify-start items-center gap-2.5 flex">
                  <span className="text-neutral-600 text-sm font-normal">
                    Delivered On:
                  </span>
                  <span className="text-neutral-950 text-base font-medium">
                    2024/03/17
                  </span>
                </div>
              </div>
              <div className="flex gap-2 items-center flex-wrap sm:flex-nowrap">
                <Button
                  disabled={true}
                  customStyles={{
                    padding: "px-3 sm:px-5 py-1.5 sm:py-2.5",
                    bgColor: "bg-green-600/10",
                    textColor: "text-green-600 uppercase",
                  }}
                >
                  DELIVERED
                </Button>
                <Button
                  customStyles={{
                    padding: "px-3 sm:px-5 py-1.5 sm:py-2.5",
                    customClasses: "block sm:hidden"
                  }}
                >
                  BUY AGAIN
                </Button>
              </div>
            </div>
          </div>

          <Button
            customStyles={{
              padding: "px-3 sm:px-5 py-1.5 sm:py-2.5",
              customClasses: "hidden sm:block min-w-[117px]"
            }}
          >
            BUY AGAIN
          </Button>
        </div>
      </div>
      <div className="px-5 flex gap-5">
        <div className="w-[100%] min-h-[340px] flex-col md:flex-row justify-start items-start gap-5 flex">
          <div className="w-[100%] flex-col justify-start items-start flex">
            <div className="w-[100%] px-5 py-[19px] bg-white rounded-tl-[15px] rounded-tr-[15px] border border-zinc-300 justify-start items-center flex">
              <div className="text-zinc-800 text-base font-semibold">
                PAYMENT INFORMATION
              </div>
            </div>
            <div className="w-[100%] px-5 pt-5 pb-[74px] bg-white rounded-bl-[15px] rounded-br-[15px] border border-zinc-300 justify-start items-center flex">
              <div className="self-stretch flex-col justify-start items-start gap-5 flex">
                <div className="flex-col justify-start items-start gap-2.5 flex">
                  <span className="text-zinc-800 text-sm font-semibold">
                    Payment Method
                  </span>
                  <span className="text-neutral-600 text-base font-normal">
                    Pay with Cards, Bank Transfer or USSD
                  </span>
                </div>
                <div className="flex-col justify-start items-start gap-2.5 flex">
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
                    Total: ₦ 18,570
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] flex-col justify-start items-start flex">
            <div className="w-[100%] px-5 py-[19px] bg-white rounded-tl-[15px] rounded-tr-[15px] border border-zinc-300 justify-start items-center flex">
              <div className="text-zinc-800 text-base font-semibold">
                DELIVERY INFORMATION
              </div>
            </div>
            <div className="w-[100%] px-5 py-5 bg-white rounded-bl-[15px] rounded-br-[15px] border border-zinc-300 justify-start items-center flex">
              <div className="self-stretch flex-col justify-start items-start gap-5 flex">
                <div className="flex-col justify-start items-start gap-2.5 flex">
                  <span className="text-zinc-800 text-sm font-semibold">
                    Delivery Method
                  </span>
                  <span className="text-neutral-600 text-base font-normal">
                    Door Delivery
                  </span>
                </div>
                <div className="flex-col justify-start items-start gap-2.5 flex">
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
                  <div className="w-[100%]">
                    <span className="text-neutral-600 text-base font-normal">
                      Door Delivery. Fulfilled by PWS official store.
                    </span>
                    <p className="text-neutral-600 text-base font-normal">
                      Delivery between{" "}
                      <span className="text-green-600">05 April</span> and{" "}
                      <span className="text-green-600">08 April</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
