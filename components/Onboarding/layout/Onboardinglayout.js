// components/custom/layout/CustomLayout.js
import React from "react";
import OnboardingHeader from "../OnboardingHeader";

const Onboardinglayout = ({ children }) => {
  return (
    <div>
        <div className="w-[100%] border-b border-bord mt-4 mb-4"><OnboardingHeader /></div>
      {children}
    </div>
  );
};

export default Onboardinglayout;
