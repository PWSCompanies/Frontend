import React from "react";
import Image from "next/image";
import { FlameIcon, PlusIcon, MinusIcon, DeleteIcon } from "../svg/SvgImages";
import { formatNumberWithCommas } from "../../formatNumber";

const CartItem = ({ product, onIncrement, onDecrement, onDelete }) => (
  <div className="last:rounded-b-[10px] flex items-start md:items-center relative justify-between min-h-[153px] px-5 py-[23px] bg-white border-b border-zinc-300">
    <div className="flex flex-col sm:flex-row gap-2">
      <div className="w-[108px] h-[108px]">
        <Image src={product.imageSrc} width={108} height={108} className="w-full h-full" alt={product.name} />
      </div>
      <div className="flex flex-col justify-between gap-1">
        <div className="">
          <div className="text-sm sm:text-base font-medium text-zinc-800">
            {product.name}
          </div>
          <div className="text-sm text-neutral-600">
            Sold by <span className="text-green-600">{product.seller}</span>
          </div>
        </div>
        <div className="flex flex-col items-start sm:items-end justify-start sm:justify-end gap-0 sm:gap-2.5 relative sm:absolute top-0 sm:top-[50px] right-0 sm:right-5">
          <span className="text-sm sm:text-base font-semibold text-zinc-800">
            ₦{formatNumberWithCommas(product.price)}
          </span>
          <div className="flex gap-2.5 mt-2 sm:mt-0">
            <div className="flex items-center justify-center w-[114px] h-[26px] gap-1 px-2.5 py-[5px] bg-rose-600/5 rounded-full">
              <FlameIcon />
              <span className="text-xs font-normal text-zinc-800">
                {product.stock} pcs in store
              </span>
            </div>
            <div className="flex items-center justify-center gap-1 w-[89px] h-[26px] px-2.5 py-[5px] bg-green-600/5 rounded-full">
              <span className="text-xs font-normal text-green-600">Sale</span>
              <span className="text-xs font-normal text-neutral-600">
                {product.sale} days
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2 sm:mt-0">
          <button aria-label="Decrease quantity" className="w-[30px] h-[30px] p-[7px] bg-[#f4f4f5] rounded-sm flex justify-center items-center" onClick={() => onDecrement(product.id)} disabled={product.quantity === 1} >
            <MinusIcon />
          </button>
          <div className="w-8 h-8 flex justify-center items-center text-base font-medium text-zinc-800">
            {product.quantity}
          </div>
          <button aria-label="Increase quantity" className="w-[30px] h-[30px] p-[7px] bg-green-600 rounded-sm flex justify-center items-center" onClick={() => onIncrement(product.id)} >
            <PlusIcon />
          </button>
          <button aria-label="Delete item" className="ml-3" onClick={() => onDelete(product.id)} >
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default React.memo(CartItem);
