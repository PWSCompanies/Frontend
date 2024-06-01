"use client";

import React, { useState } from "react";
import { CloseIcon } from "../svg/SvgImages";
import { nigeriaData } from "./ListData";
import {
  CheckboxInputField,
  CustomSelect,
  InputField,
} from "./CustomComponent";

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
              <InputField
                type="text"
                id="firstName"
                name="firstName"
                label="First Name *"
                placeholder="First Name *"
              />
              <InputField
                type="text"
                id="lastName"
                name="lastName"
                label="Last Name *"
                placeholder="Last Name *"
              />

              <div className="w-full flex gap-2 items-center">
                <div className="w-[90px]">
                  <InputField value="234" disabled />
                </div>

                <InputField
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Enter Phone Number"
                  placeholder="Enter Phone Number"
                />
              </div>
              <div className="w-full flex gap-2 items-center">
                <div className="w-[90px]">
                  <InputField value="234" disabled />
                </div>

                <InputField
                  id="phoneNumberTwo"
                  name="phoneNumberTwo"
                  label="Enter Second Phone Number"
                  placeholder="Enter Second Phone Number"
                />
              </div>
            </div>
            <InputField
              type="text"
              id="deliveryAddress"
              name="deliveryAddress"
              label="Delivery Address"
              placeholder="FDelivery Address"
            />
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
              <CheckboxInputField
                id="checked-checkbox"
                label="Set as Default Address"
              />
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
