"use client";

import React, { useState } from "react";
import { CheckMarkIcon1, PaystackLogo } from "../svg/SvgImages";
import {
  selectCartItems,
  selectCartSubtotal,
} from "../../../store/cart/cartSlice";
import { useSelector } from "react-redux";
import { formatNumberWithCommas } from "../formatNumber";
import ChangeAddress from "./ChangeAddress";
import AddNewAddress from "./AddNewAddress";
import { CustomModal } from "./CustomComponent";

export default function CheckoutPage() {
  const cartItems = useSelector(selectCartItems);
  const subtotal = useSelector(selectCartSubtotal);
  const deliveryFee = 2699; // Example static delivery fee
  const total = subtotal + deliveryFee;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalTwoOpen, setIsModalTwoOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openModalTwo = () => setIsModalTwoOpen(true);
  const closeModalTwo = () => setIsModalTwoOpen(false);

  return (
    <div className="w-[100%] px-[120px] py-[30px] bg-neutral-100">
      <div className="mx-auto max-w-[1200px] flex justify-between gap-4">
        <div className="w-[71%] flex flex-col gap-[20px]">
          <div className="w-full min-h-[307px] bg-white rounded-[10px] shadow overflow-hidden">
            <div className="w-full h-[60px] p-2.5 border-b border-zinc-300 justify-between items-center flex">
              <div className="self-stretch justify-start items-center gap-[5px] flex">
                <CheckMarkIcon1 />
                <span className="text-zinc-800 text-sm font-semibold">
                  1. CUSTOMER ADDRESS
                </span>
              </div>
              <button
                className="w-[89px] self-stretch pl-5 pr-[19px] pt-3 pb-[13px] bg-green-600/10 rounded-[10px] justify-center items-center flex"
                onClick={openModal}
              >
                <span className="text-center text-green-600 text-xs font-semibold">
                  CHANGE
                </span>
              </button>
            </div>
            <div className="w-full p-5 pb-[26px] h-full">
              <div className="self-stretch w-full flex-col justify-start items-start gap-2.5 flex">
                <div className="flex-col justify-start items-start gap-2.5 flex">
                  <span className="text-center text-zinc-800 text-base font-semibold">
                    Nelson Michael
                  </span>
                  <span className="text-center text-neutral-600 text-sm font-normal">
                    IITA | Oyo - IBADAN-OJOO | +234 8061332918
                  </span>
                </div>
                <div className="flex-col w-full justify-start items-start gap-2.5 flex">
                  <span className="text-zinc-800 text-sm font-medium">
                    Delivery Instruction
                  </span>
                  <textarea className="w-full h-[116px] resize-none relative bg-white rounded-[10px] border border-zinc-300" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full min-h-[161px] bg-white rounded-[10px] shadow overflow-hidden">
            <div className="w-full h-[60px] p-2.5 border-b border-zinc-300 justify-between items-center flex">
              <div className="self-stretch justify-start items-center gap-[5px] flex">
                <CheckMarkIcon1 />
                <span className="text-zinc-800 text-sm font-semibold">
                  2. DELIVERY OPTIONS
                </span>
              </div>
            </div>
            <div className="w-full p-5 pb-[26px] h-full">
              <div className="self-stretch justify-between items-center gap-[10px] flex">
                <div className="flex-col justify-start items-start gap-2.5 flex">
                  <span className="text-center text-zinc-800 text-base font-semibold">
                    Door Delivery
                  </span>
                  <span className="text-center text-neutral-600 text-sm font-normal">
                    Delivery between 01 April and 03 April.
                  </span>
                </div>
                <div className="">
                  <span className="text-zinc-800 text-base font-semibold">
                    ₦2,699
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full min-h-[222px] bg-white rounded-[10px] shadow overflow-hidden">
            <div className="w-full h-[60px] p-2.5 border-b border-zinc-300 justify-between items-center flex">
              <div className="self-stretch justify-start items-center gap-[5px] flex">
                <CheckMarkIcon1 />
                <span className="text-zinc-800 text-sm font-semibold">
                  3. PAYMENT OPTIONS
                </span>
              </div>
            </div>
            <div className="w-full p-5 flex gap-2 pb-[26px] h-full">
              <div className="w-[209px] overflow-hidden h-[99px] relative bg-green-600/5 rounded-[20px] border border-green-600">
                <label
                  htmlFor="paystack"
                  className="w-full h-full cursor-pointer border flex items-center justify-center text-sm font-medium text-gray-900"
                >
                  <PaystackLogo />
                </label>
                <input
                  checked
                  id="paystack"
                  type="radio"
                  defaultValue=""
                  name="paystack"
                  className="w-4 h-4 p-1 absolute top-2 right-4 border text-green-600 border-green-600/5 focus:ring-transparent focus:ring-2"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[29%] h-[297px] bg-white rounded-[10px] overflow-hidden shadow">
          <div className="pl-5 w-[100%] py-[19px] bg-white border-b border-zinc-300 justify-start items-center flex">
            <span className="text-zinc-800 text-base font-semibold">
              Order Summary
            </span>
          </div>
          <div className="border-b border-zinc-300 h-[50px] p-4 text-right text-zinc-800 text-sm font-normal py-5 flex justify-between items-center gap-1">
            <span>Item's total ({cartItems.length})</span>
            <span className="text-zinc-800 text-base font-semibold">
              ₦{formatNumberWithCommas(subtotal)}
            </span>
          </div>
          <div className="border-b border-zinc-300 h-[50px] p-4 text-right text-zinc-800 text-sm font-normal py-5 flex justify-between items-center gap-1">
            <span>Delivery fee</span>
            <span className="text-zinc-800 text-base font-semibold">
              ₦{formatNumberWithCommas(deliveryFee)}
            </span>
          </div>
          <div className="border-b border-zinc-300 h-[50px] p-4 text-right font-medium flex justify-between items-center gap-1">
            <span className="text-zinc-800 text-sm font-semibold">Total</span>
            <span className="text-zinc-800 text-base font-semibold">
              ₦{formatNumberWithCommas(total)}
            </span>
          </div>
          <div className="w-full h-[85px] px-5 pt-[18px] pb-[17px] bg-white border-b border-zinc-300 justify-center items-center flex">
            <button
              className={`grow shrink text-center text-white text-sm font-semibold basis-0 self-stretch pt-[17px] pb-4 bg-green-600 rounded-[10px] justify-center items-center flex`}
            >
              CONFIRM ORDER
            </button>
          </div>
        </div>
      </div>
      <CustomModal isOpen={isModalOpen} showCloseIcon={false}>
        {isModalTwoOpen ? (
          <AddNewAddress closeModalTwo={closeModalTwo} />
        ) : (
          <ChangeAddress closeModal={closeModal} openModalTwo={openModalTwo} />
        )}
      </CustomModal>
    </div>
  );
}
