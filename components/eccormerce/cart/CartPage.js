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
import { CartIcon1 } from "../svg/SvgImages";
import { formatNumberWithCommas } from "../formatNumber";
import CartItem from "./CartItem";
import { useRouter } from "next/router";
import { Button } from "./CustomComponent";

export default function CartPage() {
  const cartItems = useSelector(selectCartItems);
  const subtotal = useSelector(selectCartSubtotal);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(updateProductData(productData));
  }, [dispatch]);

  const handleIncrement = (id) => dispatch(incrementQuantity(id));
  const handleDecrement = (id) => dispatch(decrementQuantity(id));
  const handleDelete = (id) => dispatch(deleteItem(id));
  const handleCheckout = () => router.push("/checkout");

  return (
    <div className="w-[100%] px-4 md:px-[50px] lg:px-[120px] py-[30px] bg-neutral-100">
      <div className="mx-auto max-w-[1200px] flex-col lg:flex-row flex justify-between gap-4">
        <div className="w-[100%] lg:w-[71%] bg-white rounded-[10px] shadow border">
          <div className="w-[100%] pl-5 py-[19px] bg-white border-b rounded-t-[10px] border-zinc-300 justify-start items-center flex">
            <span className="text-zinc-800 text-base font-semibold">
              Cart ({cartItems.length})
            </span>
          </div>
          <div className="w-[100%]">
            {cartItems.length === 0 ? (
              <div className="empty-cart p-4 text-center flex flex-col items-center justify-center font-medium">
                <CartIcon1 className="w-16 h-16 mb-3" />
                <p className="text-2xl font-semibold">YOUR CART IS EMPTY.</p>
                <p>
                  Before proceeding to checkout you must add some products to
                  your shopping cart. You will find a lot of interesting
                  products on our "Shop" page.
                </p>
              </div>
            ) : (
              cartItems.map((product) => (
                <CartItem
                  key={product.id}
                  product={product}
                  onIncrement={handleIncrement}
                  onDecrement={handleDecrement}
                  onDelete={handleDelete}
                />
              ))
            )}
          </div>
        </div>

        <div className="w-[100%] lg:w-[29%] h-[304px] bg-white rounded-[10px] shadow">
          <div className="pl-5 w-[100%] py-[19px] bg-white border-b rounded-t-[10px] border-zinc-300 justify-start items-center flex">
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
          <div className="w-full h-[85px] px-5 pt-[18px] pb-[17px] bg-white rounded-b-[10px] border-b border-zinc-300 justify-center items-center flex">
            <Button
              disabled={cartItems.length === 0}
              onClick={handleCheckout}
              customStyles={{
                customClasses: "w-full h-[50px]",
              }}
            >
              CHECK OUT (₦{formatNumberWithCommas(subtotal)})
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
