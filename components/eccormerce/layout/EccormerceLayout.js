import React from "react";
import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";
export default function EccormerceLayout({ children }) {
  return (
    <div className="font-sans text-sm text-textcol">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
