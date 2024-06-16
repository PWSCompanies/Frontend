import React from "react";
import Nav from "../nav/Nav";
import Header from "./Header";

export default function Layoutretail({ children }) {
  return (
    <div className="w-[100%] h-[100%]">
      <Header />
      <div className="bg-[#F5F5F5] md:px-28 py-5 grid grid-cols-1 md:grid-cols-7 gap-3 relative">
        {/* navigation */}
        <div className="absolute bottom-0 md:relative col-span-2 row-span-full px-10">
          <Nav />
        </div>

        <div className="col-span-5 row-span-full">{children}</div>
      </div>
    </div>
  );
}
