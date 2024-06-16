"use client";

import React, { useState } from "react";
import { nigeriaData } from "./NigeriaData";
import {
  Button,
  CheckboxInputField,
  CustomSelect,
  FloatInputField,
  InputField,
} from "../../../CustomComponent";
import AddressForm from "../../../dashboardretailer/addressBook/AddressForm";

export default function AddNewAddress({ closeAddNewModal }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    phoneNumberTwo: "",
    deliveryAddress: "",
    state: "",
    city: "",
    lga: "",
    setDefault: false,
  });

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedLGA, setSelectedLGA] = useState("");

  const handleStateChange = (state) => {
    setSelectedState(state);
    setSelectedCity("");
    setSelectedLGA("");
    setFormData({ ...formData, state, city: "", lga: "" });
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
    setSelectedLGA("");
    setFormData({ ...formData, city, lga: "" });
  };

  const handleLGAChange = (lga) => {
    setSelectedLGA(lga);
    setFormData({ ...formData, lga });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, setDefault: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation and handle form submission logic here
    console.log("Form submitted:", formData);
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
    <div className="p-4 pt-5">
      <div className="w-full max-h-[570px] min-h-[200px] overflow-y-auto pt-3 sm:pt-0">
        <form className="pb-20" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <FloatInputField type="text" id="firstName" name="firstName" label="First Name *" placeholder="First Name *" value={formData.firstName} onChange={handleChange} required />
                    <FloatInputField type="text" id="lastName" name="lastName" label="Last Name *" placeholder="Last Name *" value={formData.lastName} onChange={handleChange} required />
                    <div className="w-full flex gap-2 items-center">
                        <InputField value="+234" disabled customStyles={{customClasses: "w-[57px]"}}/>
                        <FloatInputField id="phoneNumber" name="phoneNumber" label="Enter Phone Number" placeholder="Enter Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
                    </div>
                    <div className="w-full flex gap-2 items-center">
                        <InputField value="+234" disabled customStyles={{customClasses: "w-[57px]"}}/>
                        <FloatInputField id="phoneNumberTwo" name="phoneNumberTwo" label="Enter Second Phone Number" placeholder="Enter Second Phone Number" value={formData.phoneNumberTwo} onChange={handleChange} />
                    </div>
                </div>
                <FloatInputField type="text" id="deliveryAddress" name="deliveryAddress" label="Delivery Address" placeholder="Delivery Address" value={formData.deliveryAddress} onChange={handleChange} />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  <CustomSelect placeholder="State" options={states} value={selectedState} onChange={handleStateChange} />
                  <CustomSelect placeholder="City" options={cities} value={selectedCity} onChange={handleCityChange} disabled={!selectedState} />
                  <CustomSelect placeholder="LGA" options={lgas} value={selectedLGA} onChange={handleLGAChange} disabled={!selectedCity} />
                </div>
                <div className="flex items-center pl-2 sm:pl-0">
                  <CheckboxInputField id="checked-checkbox" label="Set as Default Address" checked={formData.setDefault} onChange={handleCheckboxChange} />
                </div>
            </div>
            <div className="w-full rounded-b-[10px] absolute left-0 bottom-0 right-0 pr-5 py-2.5 bg-white border-t border-zinc-300 justify-end mt-[42px] items-center flex">
              <div className="self-stretch justify-start items-center gap-[15px] flex">
                <Button type="button" onClick={closeAddNewModal}
                  customStyles={{
                    padding: "p-0",
                    border: "border-none",
                    bgColor: "bg-white",
                    textColor: "text-green-600",
                    rounded: "rounded-[0px]",
                  }}
                >
                  CANCEL
                </Button>
                <Button type="submit" className="w-[90px] bg-green-600 text-white h-10" >
                  SAVE
                </Button>
              </div>
            </div>
        </form>
      </div>
    </div>
  );
}
