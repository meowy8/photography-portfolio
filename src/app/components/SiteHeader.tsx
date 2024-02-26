"use client";
import React, { useState } from "react";
import SiteTitle from "./SiteTitle";
import Sidebar from "./Sidebar";

//bg-gradient-radial from-[#045492]

const SiteHeader = () => {
  const [headerGradient, setHeaderGradient] = useState<string>(
    "bg-[#060201] bg-gradient-to-r from-[#060201]"
  );

  // maybe get rid of this
  const toggleHeaderGradient = () => {
    // if (headerGradient === "bg-[#060201] bg-gradient-to-r from-[#060201]") {
    //   setHeaderGradient("bg-[#C2C04C] bg-gradient-to-r from-[#060201]");
    // } else if (
    //   headerGradient === "bg-[#C2C04C] bg-gradient-to-r from-[#060201]"
    // ) {
    //   setHeaderGradient("bg-[#060201] bg-gradient-to-r from-[#060201]");
    // }
  };

  return (
    <header
      className={`flex justify-between items-center pt-4 ${headerGradient} transition-colors duration-500`}
    >
      <Sidebar />
      <SiteTitle toggleHeaderGradient={toggleHeaderGradient} />
    </header>
  );
};

export default SiteHeader;
