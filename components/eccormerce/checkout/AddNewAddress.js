"use client";

import React, { useState } from "react";
import { CloseIcon } from "../svg/SvgImages";
import CustomSelect from "./customSelect/CustomSelect";
import { nigeriaData } from "./customSelect/ListData";

export default function AddNewAddress({ closeModalTwo }) {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedLGA, setSelectedLGA] = useState("");

  const handleStateChange = (state) => {
    setSelectedState(state);
    setSelectedCity("");
    setSelectedLGA("");
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
    setSelectedLGA("");
  };

  const handleLGAChange = (lga) => {
    setSelectedLGA(lga);
  };

  const states = nigeriaData.map((state) => state.state);
  const cities = selectedState
    ? nigeriaData
        .find((state) => state.state === selectedState)
        .cities.map((city) => city.name)
    : [];
  const lgas = selectedCity
    ? nigeriaData
        .find((state) => state.state === selectedState)
        .cities.find((city) => city.name === selectedCity).lgas
    : [];

  return (
    <div className="w-[800px] relative bg-white rounded-[10px] shadow pb-20">
      <div className="w-full max-h-[530px] min-h-[200px] overflow-y-auto">
        <div className="w-full h-[60px] p-5 border-b border-zinc-300 justify-between items-center flex">
          <div className="self-stretch w-full justify-between items-center gap-[5px] flex">
            <span className="text-zinc-800 text-sm font-semibold">
              ADD NEW ADDRESS
            </span>
            <CloseIcon />
          </div>
        </div>
        <div className="w-full p-5 pb-[26px] h-full">
          <form className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-5">
              <div className="relative w-full bg-inherit">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="peer w-full h-[60px] px-[21px] pt-5 pb-[21px] bg-white rounded-[10px] border border-zinc-300 placeholder-transparent ring-zinc-300 focus:ring-green-600 focus:outline-none focus:border-green-600"
                  placeholder="First Name *"
                />
                <label
                  htmlFor="firstName"
                  className="absolute cursor-text left-0 -top-3 text-zinc-500 text-sm font-medium bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-focus:bg-white peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-focus:-top-3 peer-focus:text-green-600 peer-focus:text-sm transition-all"
                >
                  First Name *
                </label>
              </div>
              <div className="relative w-full bg-inherit">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="peer w-full h-[60px] px-[21px] pt-5 pb-[21px] bg-white rounded-[10px] border border-zinc-300 placeholder-transparent ring-zinc-300 focus:ring-green-600 focus:outline-none focus:border-green-600"
                  placeholder="Last Name *"
                />
                <label
                  htmlFor="lastName"
                  className="absolute cursor-text left-0 -top-3 text-zinc-500 text-sm font-medium bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-focus:bg-white peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-focus:-top-3 peer-focus:text-green-600 peer-focus:text-sm transition-all"
                >
                  Last Name *
                </label>
              </div>
              <div className="w-full flex gap-2 items-center">
                <input
                  type="text"
                  value="234"
                  disabled
                  className="w-[60px] h-[60px] text-zinc-800 text-sm font-medium pl-3.5 pr-[13px] pt-5 pb-[21px] bg-white rounded-[10px] border border-zinc-300 justify-center items-center flex"
                />
                <div className="relative w-full bg-inherit">
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="peer w-full h-[60px] px-[21px] pt-5 pb-[21px] bg-white rounded-[10px] border border-zinc-300 placeholder-transparent ring-zinc-300 focus:ring-green-600 focus:outline-none focus:border-green-600"
                    placeholder="Enter Phone Number"
                  />
                  <label
                    htmlFor="phoneNumber"
                    className="absolute cursor-text left-0 -top-3 text-zinc-500 text-sm font-medium bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-focus:bg-white peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-focus:-top-3 peer-focus:text-green-600 peer-focus:text-sm transition-all"
                  >
                    Enter Phone Number
                  </label>
                </div>
              </div>
              <div className="w-full flex gap-2 items-center">
                <input
                  type="text"
                  value="234"
                  disabled
                  className="w-[60px] h-[60px] text-zinc-800 text-sm font-medium pl-3.5 pr-[13px] pt-5 pb-[21px] bg-white rounded-[10px] border border-zinc-300 justify-center items-center flex"
                />
                <div className="relative w-full bg-inherit">
                  <input
                    type="text"
                    id="phoneNumberTwo"
                    name="phoneNumberTwo"
                    className="peer w-full h-[60px] px-[21px] pt-5 pb-[21px] bg-white rounded-[10px] border border-zinc-300 placeholder-transparent ring-zinc-300 focus:ring-green-600 focus:outline-none focus:border-green-600"
                    placeholder="Enter Second Phone Number"
                  />
                  <label
                    htmlFor="phoneNumberTwo"
                    className="absolute cursor-text left-0 -top-3 text-zinc-500 text-sm font-medium bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-focus:bg-white peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-focus:-top-3 peer-focus:text-green-600 peer-focus:text-sm transition-all"
                  >
                    Enter Second Phone Number
                  </label>
                </div>
              </div>
            </div>
            <div className="relative w-full bg-inherit">
              <input
                type="text"
                id="deliveryAddress"
                name="deliveryAddress"
                className="peer w-full h-[60px] px-[21px] pt-5 pb-[21px] bg-white rounded-[10px] border border-zinc-300 placeholder-transparent ring-zinc-300 focus:ring-green-600 focus:outline-none focus:border-green-600"
                placeholder="Delivery Address"
              />
              <label
                htmlFor="deliveryAddress"
                className="absolute cursor-text left-0 -top-3 text-zinc-500 text-sm font-medium bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-focus:bg-white peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-focus:-top-3 peer-focus:text-green-600 peer-focus:text-sm transition-all"
              >
                Delivery Address
              </label>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <CustomSelect
                placeholder="State"
                options={states}
                value={selectedState}
                onChange={handleStateChange}
              />
              <CustomSelect
                placeholder="City"
                options={cities}
                value={selectedCity}
                onChange={handleCityChange}
                disabled={!selectedState}
              />
              <CustomSelect
                placeholder="LGA"
                options={lgas}
                value={selectedLGA}
                onChange={handleLGAChange}
                disabled={!selectedCity}
              />
            </div>
            <div className="flex items-center">
              <input
                defaultChecked=""
                id="checked-checkbox"
                type="checkbox"
                defaultValue=""
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-green-600 focus:ring-2"
              />
              <label
                htmlFor="checked-checkbox"
                className="ms-2 text-zinc-800 text-sm font-medium"
              >
                Set as Default Address
              </label>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full rounded-b-[10px] absolute left-0 bottom-0 right-0 pr-5 py-2.5 bg-white border-t border-zinc-300 justify-end mt-[42px] items-center flex">
        <div className="self-stretch justify-start items-center gap-[15px] flex">
          <button
            className="text-center text-green-600 text-sm font-medium"
            onClick={closeModalTwo}
          >
            CANCEL
          </button>
          <button className="w-[137px] h-10 px-5 py-3 bg-green-600 rounded-[10px] justify-center items-center flex">
            <span className="text-center text-white text-xs font-medium">
              SAVE
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
