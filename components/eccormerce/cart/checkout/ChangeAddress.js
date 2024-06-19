import React from "react";
import { PencilIcon, PlusIcon } from "../../svg/SvgImages";
import { Button } from "../../../CustomComponent";

export default function ChangeAddress({ closeModal, openAddNewModal, openEditAddModal }) {
  return (
    <div className="relative rounded-[10px] shadow pb-20">
      <div className="w-full max-h-[400px] min-h-[200px] overflow-y-auto">
        <div className="w-full p-5 pb-[26px] h-full">
          <div className="flex-col w-full justify-start items-start gap-2.5 flex">
            <label className="cursor-pointer w-full flex flex-col gap-2.5">
              <span className="text-left text-zinc-800 text-sm font-semibold">
                ADDRESS BOOK (1)
              </span>
              <input checked type="radio" className="peer sr-only" name="pricing" />
              <div className="rounded-[10px] w-full p-4 sm:p-6 border flex justify-between bg-green-600/5 ring-2 ring-transparent shadow peer-checked:ring-green-600">
                <div className="flex-col justify-start items-start gap-2 sm:gap-2.5 flex">
                  <span className="text-center text-black text-base font-semibold">
                    Nelson Michael
                  </span>
                  <div className="flex-col justify-start items-start gap-2 sm:gap-2.5 flex">
                    <span className="text-center text-neutral-600 text-xs font-normal">
                      IITA | IBADAN-OJOO - Oyo
                    </span>
                    <span className="text-center text-neutral-600 text-xs font-normal">
                      +234 8061332918
                    </span>
                  </div>
                </div>
                <button
                  className="w-[52px] h-[19px] justify-between items-center flex"
                  onClick={openEditAddModal}
                >
                  <span className="text-center text-green-600 text-sm font-semibold">
                    EDIT
                  </span>
                  <PencilIcon className="w-4 h-4" />
                </button>
              </div>
            </label>

            <Button
              className="w-[133px] h-9 bg-green-600 text-white justify-start items-center gap-[5px] flex"
              onClick={openAddNewModal}
            >
              <PlusIcon className="w-4 h-4" />
              <span className="text-center text-white text-xs font-medium">
                Add Address
              </span>
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full rounded-b-[10px] absolute left-0 bottom-0 right-0 pr-5 py-2.5 bg-white border-t border-zinc-300 justify-end mt-[42px] items-center flex">
        <div className="self-stretch justify-start items-center gap-[15px] flex">
          <Button
            onClick={closeModal}
            customStyles={{
              padding: "p-0",
              bgColor: "bg-white",
              border: "border-none",
              textColor: "text-green-600",
              rounded: "rounded-[0px]",
            }}
          >
            CANCEL
          </Button>
          <Button className="w-[137px]">SELECT ADDRESS</Button>
        </div>
      </div>
    </div>
  );
}
