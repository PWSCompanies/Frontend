import React, { useState } from "react";
import { Button } from "../../CustomComponent";
import { saveItemsData } from "./MockData";
import Image from "next/image";
import { formatNumberWithCommas } from "../../formatNumber";
import EmptySavedItemIcon from "./assets/EmptySavedItemIcon.png"

export default function SavedItems() {
  const [items, setItems] = useState(saveItemsData);

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div className="bg-white rounded-xl border border-[#E3E5E5] w-[100%] pb-4 h-auto">
      <div className="py-[13px] whitespace-nowrap text-[14px] flex items-center gap-2.5 leading-[21.79px] font-semibold px-5">
        Saved Items
      </div>
      <hr className="bg-[#DADADA]" />
      <div className="flex flex-col gap-3 w-[100%] max-h-[570px] min-h-[200px] overflow-y-auto">
        {items.length === 0 ? (
        <div className="px-5 py-[98px]">
          <div className="flex flex-col justify-center items-center gap-5 mx-auto max-w-[575px]">
          <Image src={EmptySavedItemIcon} width={150} height={150} alt="" />
          <div className="flex flex-col items-center gap-2.5">
            <div className="text-center text-black text-lg font-medium">
            You haven't added any items to your saved list yet!
            </div>
            <div className="text-center text-neutral-600 text-sm font-normal">
            Discovered an item you fancy? Click on the heart-shaped icon beside the item to include it in your wishlist! You'll find all your saved items displayed here.
            </div>
          </div>
          </div>
        </div>
        ) : (
          <div className="flex flex-col gap-2.5">
            {items.map((item) => (
              <div key={item.id} className="last:border-none flex items-start relative justify-between min-h-[153px] px-5 py-[23px] bg-white border-b border-zinc-300">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="w-[108px] h-[108px]">
                    <Image src={item.imageSrc} width={108} height={108} className="w-full h-full" alt={item.name} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm sm:text-base max-w-[300px] font-medium text-zinc-800">
                      {item.name}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-zinc-800">
                      ₦{formatNumberWithCommas(item.price)}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-zinc-800">
                      In stock: {item.stock}
                    </span>
                    <Button
                      customStyles={{
                        customClasses: "max-w-max h-[40px]",
                      }}
                    >
                      ADD TO CART
                    </Button>
                  </div>
                </div>
                <Button
                  onClick={() => handleDelete(item.id)}
                  customStyles={{
                    bgColor: "bg-red-600",
                    customClasses: "max-w-max h-[40px]",
                  }}
                  >
                  REMOVE
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
 