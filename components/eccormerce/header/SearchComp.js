import Image from "next/image";
import React from "react";

export default function SearchComp() {
  return (
    <div className="flex gap-3 w-[100%]">
      <div className="rounded border border-bord flex items-center pl-2 w-[100%]">
        <Image
          src="/eccormerce/search.svg"
          alt="search image"
          // className="h-5"
          width={20}
          height={20}
        />
        <input
          type="text"
          className="bg-transparent outline-none border-none w-[100%] focus-within:outline-none "
          placeholder="search for products, brands & categories"
        />
      </div>

      <button className="rounded-lg bg-primary text-white px-5 py-3 hidden md:block">
        Search
      </button>
    </div>
  );
}
