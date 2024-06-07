import React from "react";
import PriceAndAction from "../components/eccormerce/productdescription/PriceAndAction";
import InfoAndSeller from "../components/eccormerce/productdescription/InfoAndSeller";
import MoreInfo from "../components/eccormerce/productdescription/MoreInfo";

export default function description() {
  const product = {
    id: 1,
    name: "Jumiso All Day Vitamin Brightening & Balancing Serum 30ml",
    description: "lorem ipsum dolor suite itter",
    detail: {
      product_describe: "",
      benefits: "",
      how_to_use: "",
      ingredients: "",
    },
    specification: "",
    brand: "Jumiso",
    recommended: "",
    purchases: 597,
    sellerInfo: {
      store: "Samples",
    },
    available: true,
    price: 15000,
    inStock: 10,
    rating: 7,
    url: "/eccormerce/sampleThree.png",
    otherUrl: {
      0: "/eccormerce/sampleThree.png",
      1: "/eccormerce/sampleThree.png",
      2: "/eccormerce/sampleThree.png",
      3: "/eccormerce/sampleThree.png",
    },
    liked: false,
  };

  return (
    <div className="bg-[#F5F5F5] md:px-24 py-5">
      <div className="">routes</div>
      {/* First layout */}
      <div className="grid grid-cols-1 md:grid-cols-6 px-5">
        <div className="col-span-4">
          <PriceAndAction product={product} />
          {/* Seller info on mobile */}
          <div className="md:hidden block">
            <InfoAndSeller seller={product.sellerInfo} />
          </div>
          <MoreInfo />
        </div>
        <div className="hidden md:block col-span-2 px-5">
          <InfoAndSeller seller={product.sellerInfo} />
        </div>
      </div>
    </div>
  );
}
