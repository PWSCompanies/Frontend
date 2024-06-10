import Link from "next/link";
import React from "react";
import { Button } from "../cart/CustomComponent";
import { EmptyDataIcon } from "../svg/SvgImages";
import Image from "next/image";

export const OrderContent = ({ orders, showOrderDetails }) => {
  return (
    <div>
      {orders.length === 0 ? (
        <div className="flex-col justify-center items-center gap-5 flex pt-[103px]">
          <EmptyDataIcon />
          <div className="flex-col justify-start items-center gap-2.5 flex">
            <div className="text-center text-black text-lg font-medium">
              You have placed no orders yet!
            </div>
            <div className="text-center text-neutral-600 text-sm font-normal">
              All your orders will be saved here for you to access their state
              anytime.
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
        orders.map((order) => (
          <div
            key={order.id}
            className="w-[100%] min-h-[170px] mb-2.5 p-2.5 relative bg-white rounded-[10px] border border-zinc-30 justify-between items-start flex"
          >
            <div className="flex w-[100%] flex-col sm:flex-row gap-4">
              <div className="w-[150px] h-[150px] bg-black/5 rounded-[10px] overflow-hidden">
                <Image
                  src={order.imageSrc}
                  width={5000}
                  height={5000}
                  className="w-[100%] h-[100%]"
                  alt={order.orderNumber}
                />
              </div>

              <div className="flex-col justify-start items-start gap-2.5 flex">
                <div className="flex-col justify-start items-start gap-2.5 flex">
                  <p className="text-zinc-800 max-w-[232px] text-base font-medium truncate text-ellipsis overflow-hidden">
                    {order.name}
                  </p>
                  <span className="text-neutral-600 text-sm font-normal">
                    Order {order.orderNumber}
                  </span>
                  <div className="justify-start items-center gap-2.5 flex">
                    <span className="text-neutral-600 text-sm font-normal">
                      Delivered On:
                    </span>
                    <span className="text-neutral-950 text-base font-medium">
                      {order.date}
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
                    {order.status}
                  </Button>
                  <Button
                    onClick={showOrderDetails}
                    customStyles={{
                      padding: "p-0",
                      bgColor: "bg-white",
                      textColor: "text-green-600 uppercase",
                      customClasses: "block sm:hidden",
                    }}
                  >
                    see details
                  </Button>
                </div>
              </div>
            </div>

            <Button
              onClick={showOrderDetails}
              customStyles={{
                padding: "p-0",
                bgColor: "bg-white",
                textColor: "text-green-600 uppercase",
                customClasses: "hidden sm:block w-[150px]",
              }}
            >
              see details
            </Button>
          </div>
        ))
      )}
    </div>
  );
};
