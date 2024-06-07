import Image from "next/image";
import React from "react";
import { Instock, LikesIcon, Rating, SharesIcon } from "../svg/SvgImages";

export default function PriceAndAction({ product }) {
  return (
    <div className="p-5 bg-white rounded-lg h-auto flex flex-col md:flex-row gap-3">
      {/* first one */}
      <div className="flex flex-col gap-2">
        <div className="bg-black bg-opacity-5 p-1 flex justify-center items-center">
          <Image
            src={`${product.url}`}
            alt="image product for description"
            width={200}
            height={250}
          />
        </div>
        <div className="flex gap-2">
          {Object.keys(product.otherUrl).map((key, index) => (
            <div className=" bg-black bg-opacity-5 p-1">
              <Image
                src={`${product.url}`}
                alt="image product for description"
                width={70}
                height={70}
              />
            </div>
          ))}
        </div>
      </div>
      {/* second one */}
      <div className=" grow-0 md:grow-1 p-1">
        {/* Top */}
        <div className="flex gap-3 px-1 items-center">
          {/* Name */}
          <h2 className=" text-sm md:text-[20px] font-[600] md:leading-[27.24px]">
            {product.name}
          </h2>
          {/* Likes and shares */}
          <div className="flex justify-center items-center gap-2">
            {/* Likes */}
            <div className="cursor-pointer">
              <LikesIcon liked={product.liked} />
            </div>
            {/* Shares */}
            <div className="cursor-pointer">
              <SharesIcon />
            </div>
          </div>
        </div>
        {/* brand middle */}
        <div className="text-[14px] leading-[14px] font-[400] text-[#75757A] mt-2">
          Brand: <span className="text-[#00BA34]">{product.brand}</span>
        </div>
        {/* Ratings and recommendation and purchases */}
        <div className=" w-[100%] mt-2 flex justify-start items-center gap-2">
          {/* ratings */}
          <div className="text-xs text-[#00BA34] flex gap-1">
            <Rating />
            <span>{product.rating}</span>
          </div>
          <div className="bg-[#75757A] rounded-full w-2 h-2">.</div>
          {/*  recommedations */}
          <div className="text-[#75757A] font-[400] text-xs md:text-[14px] md:leading-[19.07px]">
            Recommended by 91%
          </div>
          <div className="bg-[#75757A] rounded-full w-2 h-2">.</div>
          {/*  purchases */}
          <div className="text-[#75757A] font-[400] text-xs md:text-[14px] md:leading-[19.07px]">
            {product.purchases}purchases
          </div>
        </div>
        {/* border seperation */}
        <hr className="bg-[#DADADA] mt-5" />
        {/* Price and Sales */}
        <div className="flex flex-col justify-start gap-3 mt-5 w-60">
          <div className="font-bold text-lg">₦{product.price}</div>

          <div className="flex justify-start items-center gap-3">
            {/* sale */}
            <div className="flex bg-[#00BA34] bg-opacity-[7%] rounded-lg px-1 py-1 gap-1 text-xs">
              <div className="text-textgreen">Sale</div>
              <div className="text-[#555555]">10 days</div>
            </div>
            {/* pcs */}
            <div className="flex gap-2 bg-[#F5253F] bg-opacity-[5%] rounded-lg px-2 py-1">
              <Instock />
              <div className="text-[12px]">4 pcs in the store</div>
            </div>
          </div>
        </div>
        {/* Buy button */}
        <div className="w-[100%] flex justify-center items-center p-2 mt-3">
          <button className="outline-none bg-[#00BA34] text-white w-[90%] px-2 py-3 rounded-xl leading-[19.49px] cursor-pointer">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
