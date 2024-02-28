import React, { useState } from "react";
import SiteTitle from "./SiteTitle";
import Sidebar from "./Sidebar";

//make title appear in sidebar on a large screen but in the header on a small screen
// wrap each component of the title in a div to conditionally render it based on where it is

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
