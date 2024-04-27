import React from "react";

export default function PaymentShow() {
  return (
    <div className="px-10">
      <div className="font-semibold text-md">
        Payment methods & delivery partners
      </div>
      <div className="flex gap-3 items-center text-black pt-1">
        <img src="/eccormerce/mastercard.svg" alt="" className="h-4" />
        <img src="/eccormerce/visa.svg" alt="" className="h-4" />
        <img src="/eccormerce/verve.svg" alt="" className="h-4" />
        <img src="/eccormerce/interswitch.svg" alt="" className="h-4" />
        <img src="/eccormerce/dhl.svg" alt="" className="h-4" />
      </div>
    </div>
  );
}
