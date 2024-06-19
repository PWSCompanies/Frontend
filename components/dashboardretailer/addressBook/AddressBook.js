import React, { useState } from "react";
import { Button } from "../../CustomComponent";
import { addressBookData } from "./MockData";
import { ArrowLeftIcon, HomeIcon } from "../../dashboardretailer/svg/SvgIcons";
import AddressForm from "./AddressForm";

export default function AddressBook() {
  const initialDefaultAddress =
    addressBookData.find((address) => address.default)?.id || null;
  const [defaultAddressId, setDefaultAddressId] = useState(
    initialDefaultAddress
  );
  const [showFrom, setShowForm] = useState(false);

  const handleDefaultChange = (id) => {
    setDefaultAddressId(id);
    addressBookData.forEach((address) => (address.default = address.id === id));
  };

  return (
    <div className="bg-white rounded-xl border border-[#E3E5E5] w-[100%] pb-4 h-auto">
      <div className="py-[13px] whitespace-nowrap text-[14px] flex items-center gap-2.5 leading-[21.79px] font-semibold px-5">
        {showFrom && ( <ArrowLeftIcon className="cursor-pointer" onClick={() => setShowForm(false)} /> )} Address Book
      </div>
      <hr className="bg-[#DADADA]" />
      <div className="mt-5 px-5 flex flex-col gap-3 w-[100%] max-h-[570px] min-h-[200px] overflow-y-auto">
        {showFrom ? (
          <AddressForm />
        ) : (
          <>
            {addressBookData.length === 0 ? (
              <div className="flex flex-col justify-center items-center gap-5 py-[98px] pt-[45px]">
                <HomeIcon className="w-24 h-24" />
                <div className="flex flex-col items-center gap-2.5">
                  <div className="text-center text-black text-lg font-medium">
                  You have no saved addresses. Please add a new address.
                  </div>
                </div>
                <Button
                  onClick={() => setShowForm(true)}
                  customStyles={{
                    padding: "pl-[50.50px] pr-[49.50px] pt-4 pb-[15px]",
                    textColor: "text-white",
                  }}
                >
                  ADD NEW ADDRESS
                </Button>
              </div>
            ) : (
              addressBookData.map((info) => (
                <div key={info.id} className="max-w-[409px] min-h-[237px] bg-white rounded-[10px] border overflow-hidden border-zinc-300 flex-col justify-start items-start flex" >
                  <div className={`w-full h-[60px] px-5 pt-[21px] text-sm font-semibold pb-5 border-b border-zinc-300 justify-between items-center flex  ${ defaultAddressId === info.id ? "bg-green-600 text-white" : "bg-white text-zinc-800" }`} >
                    {defaultAddressId === info.id ? "DEFAULT ADDRESS" : "ADDRESS"}
                    <input
                      type="checkbox"
                      checked={defaultAddressId === info.id}
                      onChange={() => handleDefaultChange(info.id)}
                      className={`w-5 h-5 text-green-600 bg-gray-100 border border-green-600 rounded focus:ring-blue-500 focus:ring-2`}
                      title={`${ defaultAddressId === info.id ? "" : "Choose as default" }`} 
                      />
                  </div>

                  <div className="px-5 py-[23px] bg-white justify-start flex flex-col gap-2.5">
                    <div className="flex-col justify-start text-neutral-600 text-sm font-normal items-start gap-2.5 flex">
                      <div className="text-zinc-800 text-base font-semibold">
                        {info.name}
                      </div>
                      <div className="">{info.address}</div>
                      <div className="">{info.phone}</div>
                    </div>
                    <Button
                      onClick={() => setShowForm(true)}
                      customStyles={{
                        padding: "pl-[37px] pr-9 pt-[11px] pb-2.5 ",
                      }}
                    >
                      ADD NEW ADDRESS
                    </Button>
                  </div>
                </div>
              ))
            )}
          </>
        )}
      </div>
    </div>
  );
}
 