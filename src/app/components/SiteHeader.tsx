import React from "react";
import SiteTitle from "./SiteTitle";
import Sidebar from "./Sidebar";

//bg-gradient-radial from-[#045492]

const SiteHeader = () => {
  return (
    <header className="flex justify-between items-center pt-4 backdrop-blur-lg bg-[#060201]">
      <Sidebar />
      <SiteTitle />
    </header>
  );
};

export default SiteHeader;
