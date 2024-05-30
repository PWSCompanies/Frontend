import Image from "next/image";
import React, { useEffect } from "react";
import { productData } from "./MockData";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  deleteItem,
  updateProductData,
  selectCartItems,
  selectCartSubtotal,
} from "../../../store/cart/cartSlice";
import {
  CartIcon1,
  DeleteIcon,
  FlameIcon,
  PlusIcon,
  MinusIcon,
} from "../svg/SvgImages";

// Utility function to format number with commas
const formatNumberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default function CartComponent() {
  const cartItems = useSelector(selectCartItems);
  const subtotal = useSelector(selectCartSubtotal);

  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the update action with the initial product data only once
    dispatch(updateProductData(productData));
  }, [dispatch]); // Only dispatch is a dependency

  const handleDeleteItem = (productId) => {
    dispatch(deleteItem(productId));
  };

  return (
    <div className="w-[100%] px-[120px] py-[30px] bg-neutral-100">
      <div className="custom-container flex justify-between gap-4">
        <div className="w-[71%] bg-white rounded-[10px] shadow border overflow-hidden">
          <div className="w-[100%] pl-5 py-[19px] bg-white border-b border-zinc-300 justify-start items-center flex">
            <span className="text-zinc-800 text-base font-semibold">
              Cart ({cartItems.length})
            </span>
          </div>
          <div className="w-[100%]">
            {cartItems.length === 0 ? (
              <div className="p-4 text-center flex flex-col items-center justify-center font-medium">
                <CartIcon1 className="w-16 h-16 mb-3" />
                <p className="font-semibold text-2xl">YOUR CART IS EMPTY.</p>
                <br /> Before proceed to checkout you must add some products to
                your shopping cart. <br />
                You will find a lot of interesting products on our "Shop" page.
              </div>
            ) : (
              <>
                {cartItems.map((product) => (
                  <div
                    key={product.id}
                    className="w-[100%] flex items-center justify-between min-h-[153px] px-5 py-[23px] bg-white border-b border-zinc-300"
                  >
                    <div className="flex gap-2">
                      <div className="w-[108px] h-[98px] relative bg-black/opacity-5">
                        <Image
                          src={product.imageSrc}
                          width={100}
                          height={100}
                          className="w-[100%] h-[100%]"
                          alt=""
                        />
                      </div>
                      <div className="flex-col justify-between items-start gap-[5px] flex">
                        <div className="">
                          <div className="text-zinc-800 text-base font-medium">
                            {product.name}
                          </div>
                          <div>
                            <span className="text-neutral-600 text-sm font-normal">
                              Sold by
                            </span>
                            <span className="text-green-600 text-sm font-normal">
                              {product.seller}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2 items-center">
                          <button
                            className={`w-[30px] h-[30px] p-[7px] bg-[#f4f4f5] rounded-sm justify-center items-center flex`}
                            onClick={() =>
                              dispatch(decrementQuantity(product.id))
                            }
                            disabled={product.quantity === 1}
                          >
                            <MinusIcon />
                          </button>
                          <div className="w-8 h-8 text-zinc-800 text-base font-medium flex items-center justify-center">
                            {product.quantity}
                          </div>
                          <button
                            className={`w-[30px] h-[30px] p-[7px] bg-green-600 rounded-sm justify-center items-center flex`}
                            onClick={() =>
                              dispatch(incrementQuantity(product.id))
                            }
                          >
                            <PlusIcon />
                          </button>
                          <button
                            className="ml-3"
                            onClick={() => handleDeleteItem(product.id)}
                          >
                            <DeleteIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col w-[30%] gap-3 items-end justify-end">
                      <span className="text-zinc-800 text-base font-semibold">
                        ₦{formatNumberWithCommas(product.price)}
                      </span>
                      <div className="flex items-end justify-end w-[100%] gap-3">
                        <div className="w-[114px] h-[26px] px-2.5 py-[5px] bg-rose-600/5 rounded-full flex-col justify-start items-start gap-2.5 flex">
                          <div className="w-[94px] justify-between items-center flex">
                            <FlameIcon />
                            <div className="text-center text-zinc-800 text-xs font-normal">
                              {product.stock} pcs in store
                            </div>
                          </div>
                        </div>
                        <div className="max-w-[114px] h-[26px] px-2.5 py-[5px] bg-green-600/5 rounded-full flex-col justify-start items-start gap-2.5 flex">
                          <div className="max-w-[69px] justify-between items-center flex">
                            <div className="flex items-center justify-center gap-1 whitespace-nowrap">
                              <span className="text-green-600 text-xs font-normal">
                                Sale
                              </span>
                              <span className="text-neutral-600 text-xs font-normal">
                                {product.sale} days
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>

        <div className="w-[29%] h-[304px] bg-white rounded-[10px] overflow-hidden shadow">
          <div className="pl-5 w-[100%] py-[19px] bg-white border-b border-zinc-300 justify-start items-center flex">
            <span className="text-zinc-800 text-base font-semibold">
              Order Summary
            </span>
          </div>
          <div className="border-b border-zinc-300 p-4 text-right text-zinc-800 text-sm font-normal py-5 flex justify-between items-center gap-1">
            <p>Delivery fee</p>
            <p>
              Add your Delivery address <br />
              at checkout to see delivery <br />
              chargers
            </p>
          </div>
          <div className="border-b border-zinc-300 p-4 text-right font-medium flex justify-between items-center gap-1">
            <p className="text-zinc-800 text-sm font-semibold">Subtotal</p>
            <p className="text-zinc-800 text-base font-semibold">
              ₦{formatNumberWithCommas(subtotal)}
            </p>
          </div>
          <div className="w-full h-[85px] px-5 pt-[18px] pb-[17px] bg-white border-b border-zinc-300 justify-center items-center flex">
            <button
              className={`grow shrink text-center text-white text-sm font-semibold basis-0 self-stretch pt-[17px] pb-4 bg-green-600 rounded-[10px] justify-center items-center flex 
            
            ${cartItems.length === 0 ? "bg-[#b6ecb6]" : ""}`}
              disabled={cartItems.length === 0}
            >
              CHECK OUT (₦{formatNumberWithCommas(subtotal)})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
