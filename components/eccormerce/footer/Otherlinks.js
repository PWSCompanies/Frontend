import React from "react";

export default function Otherlinks() {
  return (
    <div className="flex md:flex-row flex-col md:justify-between md:items-start w-[100%] p-5 md:px-10">
      {/* left side */}
      <div className="flex grow justify-start gap-10">
        {/* About pws */}
        <div className="text-textcol flex flex-col gap-4">
          <div className="font-semibold">About Pws</div>
          <div className="">About Us</div>
          <div className="">Contact Us</div>
          <div className="">Privacy Policy</div>
          <div className="">Terms & Conditions</div>
          <div className="">Top articles on PWS</div>
          <div className="">Top searches on PWS</div>
        </div>
        {/* Partners */}
        <div className="text-textcol flex flex-col gap-4">
          <div className="font-semibold">Partners</div>
          <div className="">Become a Retailer</div>
          <div className="">Terms of service</div>
        </div>

        {/* About pws */}
        <div className="text-textcol flex flex-col gap-4">
          <div className="font-semibold text-black">Useful links</div>
          <div className="">Service Center</div>
          <div className="">How to shop on PWS?</div>
          <div className="">How to return a product on PWS?</div>
          <div className="">Corporate and bulk purchases</div>
          <div className="">Report a Product</div>
          <div className="">Dispute Resolution Policy</div>
          <div className="">Returns & Refund Timeline</div>
          <div className="">Return Policy</div>
        </div>
      </div>

      {/* Right side */}
      <div className="">
        <small className="font-semibold">Join us on</small>
        <div className="flex gap-3">
          <img src="/eccormerce/facebook.svg" alt="" className="h-5" />
          <img src="/eccormerce/instagram.svg" alt="" className="h-5" />
          <img src="/eccormerce/discord.svg" alt="" className="h-5" />
          <img src="/eccormerce/twitter.svg" alt="" className="h-5" />
        </div>
      </div>
    </div>
  );
}
