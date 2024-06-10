import React from "react";
import Nav from "../nav/Nav";

export default function Layoutconsumer({ children }) {
  return (
    <div className="bg-[#F5F5F5] md:px-28 md:h-auto h-[100%] p-5 grid grid-cols-1 md:grid-cols-7 relative ">
      {/* navigation */}
      <div className=" order-2 md:order-1 md:mt-0 mt-12 col-span-0 md:col-span-2 md:row-span-full flex justify-center items-center w-[100%] md:w-full md:flex-none overflow-x-auto md:overflow-hidden">
        <Nav />
      </div>
      {/* content */}
      <div className="order-1 md:order-2 col-span-0 md:col-span-5 md:row-span-full">
        {children}
      </div>
    </div>
  );
}
