import React, { useState } from "react";
import Specification from "./Specification";
import ProductDetail from "./ProductDetail";

export default function MoreInfo() {
  const [selected, setSelected] = useState("productDetail");

  const showChoose = () => {
    const renderComponent = () => {
      switch (selected) {
        case "specification":
          return <Specification />;
        case "productDetail":
          return <ProductDetail />;
        default:
          break;
      }
    };

    return renderComponent();
  };

  const changeView = (type) => {
    setSelected(type);
  };

  return (
    <div className="bg-white shadow-lg flex flex-col border border-[#DADADA] rounded-lg w-[100%] h-auto  mt-5">
      <div className="p-3 whitespace-nowrap text-[16px] leading-[21.79px] font-[500] flex justify-start gap-12 pl-9">
        <div
          onClick={() => changeView("productDetail")}
          className={` text-sm font-semibold cursor-pointer ${
            selected === "productDetail" ? "text-[#00BA34]" : "text-[#555555]"
          }`}
        >
          Product Details
        </div>
        <div
          onClick={() => changeView("specification")}
          className={`text-sm font-semibold cursor-pointer ${
            selected === "specification" ? "text-[#00BA34]" : "text-[#555555]"
          }`}
        >
          Specifications
        </div>
      </div>
      <div className="relative">
        <hr className="bg-[#DADADA]" />
        <div
          className={`absolute top-0 left-0 h-[2px] w-40 ${
            selected === "productDetail" && "bg-[#00BA34]"
          }`}
          style={{ left: selected === "productDetail" ? 0 : "5%" }}
        ></div>
        <div
          className={`absolute top-0 left-40 h-[2px] w-40 ${
            selected === "specification" && "bg-[#00BA34]"
          }`}
          style={{ right: selected === "specification" ? 0 : "40%" }}
        ></div>
      </div>
      {/* Main info content */}
      <div className="">{showChoose()}</div>
    </div>
  );
}
