"use client";
import React, { useEffect, useState } from "react";
import PhotoFrame from "../components/PhotoFrame";
import PhotoModal from "../components/PhotoModal";

const DigitalPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-black">
      <div
        className={`flex min-h-screen flex-col justify-center items-center md:flex-row flex-wrap transition-opacity duration-1000 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <PhotoFrame src="/images/DSCF7407.jpg" alt="mirror" />
        <PhotoFrame src="/images/DSCF7722.jpg" alt="garden" />
        <PhotoFrame src="/images/DSCF7857.jpg" alt="roots" />
        <PhotoFrame
          src="/images/BAC9C4E6-84E8-4C29-AF38-E36F12FF7E1A.jpg"
          alt="hand"
        />
        <PhotoFrame src="/images/R0060263.jpg" alt="spider" />
      </div>
    </div>
  );
};

export default DigitalPage;
