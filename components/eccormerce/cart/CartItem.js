import React from "react";
import Image from "next/image";
import { FlameIcon, PlusIcon, MinusIcon, DeleteIcon } from "../svg/SvgImages";
import { formatNumberWithCommas } from "../formatNumber";

const CartItem = ({ product, onIncrement, onDecrement, onDelete }) => (
  <div className="cart-item flex items-center justify-between min-h-[153px] px-5 py-[23px] bg-white border-b border-zinc-300">
    <div className="flex gap-2">
      <div className="relative w-[108px] h-[98px] bg-black/opacity-5">
        <Image
          src={product.imageSrc}
          width={100}
          height={100}
          className="w-full h-full"
          alt={product.name}
        />
      </div>
      <div className="flex flex-col justify-between gap-1">
        <div>
          <div className="text-base font-medium text-zinc-800">
            {product.name}
          </div>
          <div className="text-sm text-neutral-600">
            Sold by <span className="text-green-600">{product.seller}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            aria-label="Decrease quantity"
            className="w-[30px] h-[30px] p-[7px] bg-[#f4f4f5] rounded-sm flex justify-center items-center"
            onClick={() => onDecrement(product.id)}
            disabled={product.quantity === 1}
          >
            <MinusIcon />
          </button>
          <div className="w-8 h-8 flex justify-center items-center text-base font-medium text-zinc-800">
            {product.quantity}
          </div>
          <button
            aria-label="Increase quantity"
            className="w-[30px] h-[30px] p-[7px] bg-green-600 rounded-sm flex justify-center items-center"
            onClick={() => onIncrement(product.id)}
          >
            <PlusIcon />
          </button>
          <button
            aria-label="Delete item"
            className="ml-3"
            onClick={() => onDelete(product.id)}
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-end gap-3 w-[30%]">
      <span className="text-base font-semibold text-zinc-800">
        ₦{formatNumberWithCommas(product.price)}
      </span>
      <div className="flex gap-3">
        <div className="flex items-center w-[114px] h-[26px] px-2.5 py-[5px] bg-rose-600/5 rounded-full">
          <FlameIcon />
          <div className="text-xs font-normal text-zinc-800">
            {product.stock} pcs in store
          </div>
        </div>
        <div className="flex items-center w-[114px] h-[26px] px-2.5 py-[5px] bg-green-600/5 rounded-full">
          <span className="text-xs font-normal text-green-600">Sale</span>
          <span className="text-xs font-normal text-neutral-600">
            {product.sale} days
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default React.memo(CartItem);
