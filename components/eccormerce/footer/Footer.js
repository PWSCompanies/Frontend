import React from "react";
import Otherlinks from "./Otherlinks";
import PaymentShow from "./PaymentShow";

export default function Footer() {
  return (
    <div className="text-black flex flex-col justify-center items-center sticky top-[100vh]">
      <div className="bg-primary h-[100px] w-[100%]"></div>
      <div className="flex flex-col items-start gap-5 w-[100%] py-5">
        <Otherlinks />
        <PaymentShow />
        <div className="relative w-[100%]">
          <hr className="absolute bg-black w-[100%] top-[-8px]" />
          <span className="px-10">Copyright</span>
        </div>
      </div>
    </div>
  );
}
