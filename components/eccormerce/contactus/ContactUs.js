"use client"

import React, { useState } from "react";
import {
  EnvelopeIcon,
  OfficeIcon,
  TelIcon,
  WhatsAppIcon,
} from "../svg/SvgImages";
import { Button, InputField, TextAreaField } from "../cart/CustomComponent";

const contactDetails = [
  {
    icon: <EnvelopeIcon />,
    title: "Chat us",
    description: "Our friendly team is here to help",
    info: "Info@nupat.com.ng",
  },
  {
    icon: <OfficeIcon />,
    title: "Office Address",
    description: "Ilori close, off Apata street, Okeira, Lagos State.",
    info: "",
  },
  {
    icon: <TelIcon />,
    title: "Phone",
    description: "Mon to Fri 8am-5pm",
    info: "+234 803 195 8586",
  },
  {
    icon: <WhatsAppIcon />,
    title: "Whatsapp",
    description: "Mon to Fri 8am-5pm",
    info: "+234 803 195 8586",
  },
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation and handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col lg:flex-row w-[100%] min-h-[750px]">
      <div className="w-[100%] md:w-[75%] contact-us bg-green-600 pl-8 lg:pl-[120px] pr-8 lg:pr-[75px] pt-[64px] pb-[120px] p-5 relative h-full">
        <div className="w-full h-[564px] flex-col justify-start items-start gap-10 flex">
          <div className="flex-col justify-start items-start gap-2.5 flex">
            <span className="text-white text-[32px] font-semibold leading-[31px]">
              Contact us
            </span>
            <p className="w-full text-white text-base font-medium">
              We always look forward to hearing from you.Our helpful staff is
              always ready to assist you.
            </p>
          </div>
          <div className="flex-col justify-start items-start gap-[30px] flex">
            {contactDetails.map((detail, index) => (
              <div
                key={index}
                className="justify-start items-start gap-2.5 flex"
              >
                {detail.icon}
                <div className="flex-col justify-start items-start gap-[5px] flex">
                  <div className="text-white text-xl font-semibold">
                    {detail.title}
                  </div>
                  <div className="text-white text-base font-medium">
                    {detail.description}
                  </div>
                  {detail.info && (
                    <div className="w-[219px] text-white text-base font-medium">
                      {detail.info}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[100%] h-full p-4 lg:p-10 py-10">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 sm:gap-y-0 gap-x-5">
            <InputField type="email" name="email" label="Email Address" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
            <InputField type="text" name="subject" label="How can we help you?" placeholder="How can we help you?" value={formData.subject} onChange={handleChange} required />
          </div>
          <div className="w-[100%]">
            <TextAreaField name="message" label="Message" placeholder="Message" value={formData.message} onChange={handleChange} className="col-span-2" required />
          </div>
          <div className="w-[100%] flex items-end justify-end">
            <Button type="submit"
              customStyles={{
                padding: "pl-9 pr-[35px] pt-[15px] pb-4",
                bgColor: "bg-green-600",
              }}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
