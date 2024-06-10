import React from "react";
import { Button } from "../cart/CustomComponent";

export default function AddressBookPage() {
  return (
    <div className="border w-[100%] min-h-[690px] pb-[223px] bg-white rounded-[10px] border-zinc-300">
      <div className="w-[100%] min-h-[60px] px-5 pt-[22px] pb-4 bg-white border border-zinc-300 justify-start items-center flex">
        <span className="text-zinc-800 text-base font-semibold">
          Address Book
        </span>
      </div>
      <div className="p-5">
        <div className="bg-white w-[409px] overflow-hidden rounded-[10px] border border-zinc-300 flex-col justify-start items-start gap-2.5 flex">
          <div className="w-[100%] flex-col justify-start items-start flex">
            <div className="w-[100%] h-[60px] px-5 pt-[21px] pb-5 bg-white border-b border-zinc-300 justify-start items-center flex">
              <div className="text-zinc-800 text-sm font-semibold">
                DEFAULT ADDRESS
              </div>
            </div>
            <div className="px-5 py-[23px] bg-white justify-start items-center flex">
              <div className="self-stretch flex-col justify-center items-start gap-[11px] flex">
                <div className="flex-col justify-start items-start gap-2.5 flex">
                  <div className="text-zinc-800 text-base font-semibold">
                    Nelson Michael
                  </div>
                  <div className="text-neutral-600 text-sm font-normal">
                    IITA IBADAN-OJOO, Oyo
                  </div>
                  <div className="text-neutral-600 text-sm font-normal">
                    +234 8061332918
                  </div>
                </div>
                <Button
                  customStyles={{
                    padding: "px-3 sm:px-5 py-1.5 sm:py-2.5",
                    customClasses: "min-w-[205px]",
                  }}
                >
                  ADD NEW ADDRESS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
