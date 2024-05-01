import React from "react";
import ShowcaseOne from "../showcase/ShowcaseOne";

export default function NewAndPopular({ newandpopular }) {
  return (
    <div className="bg-[#F5F5F5] rounded-lg p-3">
      <div className="text-textgreen font-bold text-lg">New & Popular</div>
      <div className="font-light text-sm">Best selling popular items</div>
      <div className="flex pt-3">
        <ShowcaseOne data={newandpopular[0]} />
        <ShowcaseOne data={newandpopular[1]} />
      </div>
    </div>
  );
}
