import React, { useState } from "react";
import SiteTitle from "./SiteTitle";
import Sidebar from "./Sidebar";

const SiteHeader = () => {
  return (
    <header
      className={`flex justify-between items-center pt-4 transition-colors duration-500 bg-black lg:hidden`}
    >
      <Sidebar />
      <SiteTitle />
    </header>
  );
};

export default SiteHeader;
