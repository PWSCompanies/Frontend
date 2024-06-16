import React from "react";
import InfoAndSeller from "../components/eccormerce/productdescription/InfoAndSeller";
import MoreInfo from "../components/eccormerce/productdescription/MoreInfo";
import PriceAndAction from "../components/eccormerce/productdescription/PriceAndAction";

export default function description() {
  const product = {
    id: 1,
    name: "Jumiso All Day Vitamin Brightening & Balancing Serum 30ml",
    description: "lorem ipsum dolor suite itter",
    detail: {
      product_describe:
        "JUMISO vitamin serum is a non-water-based and high-concentration serum for brightening. For all skin types, keep your skin radiant with the daily vitamin serum. It helps you keep a bright skin tone and have healthy and balanced skin. It contains various vitamin complexes such as A, B, D, E, and K, as well as vitamin C, and many ingredients that nourish skin, helping with skin brightening, soothing, and elasticity care.",
      benefits: {
        1: "With 0% water content and 86.14% Vitamin Tree extract.",
        2: "Suits all skin types.",
        3: "Keeps your skin radiant and healthy.",
        4: "Nourishes the skin with natural and powerful ingredients.",
        5: "Helps the brightening, and elasticity care of the skin.",
        6: "Soothes acne areas to even out the skin.",
      },
      how_to_use:
        "After cleansing, apply a small amount onto the desired areas. Firmly massage into the skin to aid absorption.",
      ingredients:
        "Hippophae Rhamnoides Fruit Extract, Methylpropanediol, Glycerin, Niacinamide, Dipropylene Glycol, Sodium Hyaluronate, PEG-40 Hydrogenated Castor Oil, Centella Asiatica Extract, Polygonum Cuspidatum Root Extract, Scutellaria Baicalensis Root Extract, Camellia Sinensis Leaf Extract, Glycyrrhiza Glabra (Licorice) Root Extract, Chamomilla Recutita (Matricaria) Flower Extract, Rosmarinus Officinalis (Rosemary) Leaf Extract, Panthenol, Betaine, Ascorbic Acid, Hydroxyacetophenone, Pentylene Glycol, Caprylyl Glycol, Butylene Glycol, Chlorphenesin, Carbomer, Arginine, Disodium EDTA, Pelargonium Graveolens Flower Oil, Cymbopogon Martini Oil, Cananga Odorata Flower Oil, Citrus Aurantium Bergamia (Bergamot) Peel Oil, Rosa Damascena Flower Oil.",
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
          <MoreInfo data={product.detail} />
        </div>
        <div className="hidden md:block col-span-2 px-5">
          <InfoAndSeller seller={product.sellerInfo} />
        </div>
      </div>
    </div>
  );
}
