import React, { useState, useEffect } from "react";
import BestSellers from "./frontpage/BestSellers";
import NewAndPopular from "./frontpage/NewAndPopular";
import TopBeautyDeals from "./frontpage/TopBeautyDeals";
import TodayDeals from "./frontpage/TodayDeals";
import { sampleData } from "../../utils/products";

export default function HomePage() {
  const [firstThreeBestSellers, setFirstThreeBestSellers] = useState([]);
  const [secondThreeBestSellers, setSecondThreeBestSellers] = useState([]);
  const [firstNewPolpular, setFirstNewPopular] = useState([]);
  const [secondNewPopular, setSecondNewPopular] = useState([]);
  const [loadingSeller, setLoadingSeller] = useState(true);
  const [loadingNewpopular, setLoadingNewPopular] = useState(true);

  // const firstThreeBestSellers = bestSellers.slice(0, 3);
  // const secondThreeBestSellers = bestSellers.slice(3, 6);

  //dummy implementation of an api call
  const getBestsellers = async () => {
    console.log(sampleData, "checking out first");

    const first = sampleData.slice(0, 3);
    const second = sampleData.slice(3, 6);
    setFirstThreeBestSellers(first);
    setSecondThreeBestSellers(second);
    setLoadingSeller(false);
  };

  //dummy implementation of an api call
  const getNewAndPopular = async () => {
    // console.log(sampleData, "checking out first");

    const first = sampleData.slice(0, 3);
    const second = sampleData.slice(3, 6);
    setFirstNewPopular(first);
    setSecondNewPopular(second);
    setLoadingNewPopular(false);
  };

  if (loadingSeller) {
    getBestsellers();
    // console.log("getBestsellers function called");
  }

  if (loadingNewpopular) {
    getNewAndPopular();
    // console.log("getBestsellers function called");
  }

  useEffect(() => {
    // getBestsellers();
    console.log("getBestsellers function called two");

    // Cleanup function
    return () => {
      console.log("useEffect cleanup function called");
    };
  }, []);

  return (
    <div className="w-[100%]">
      {/* first top */}
      <div className="p-10 flex justify-center w-[100%] gap-2">
        <BestSellers bestSellers={firstThreeBestSellers} />
        <BestSellers bestSellers={secondThreeBestSellers} />
        {/* inside for New and popular */}
        <div className="flex flex-col gap-2">
          <NewAndPopular newandpopular={firstNewPolpular} />
          <NewAndPopular newandpopular={secondNewPopular} />
        </div>
      </div>

      {/* Bottom part */}
      <div className="bg-[#F5F5F5] p-5 flex flex-col gap-3">
        {/*Today Deals */}
        <div className="w-[100%]">
          <div className="flex w-[100%] justify-between">
            <span>Today Deals</span>
            <span>See all</span>
          </div>
          <TodayDeals />
        </div>
        {/*Top Beauty Deals */}
        <div className="w-[100%]">
          <div className="flex w-[100%] justify-between">
            <span>Top Beauty Deals</span>
            <span>See all</span>
          </div>
          <TopBeautyDeals />
        </div>
      </div>
    </div>
  );
}
