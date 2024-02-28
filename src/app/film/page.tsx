'use client'
import React, { useEffect, useState } from "react";
import PhotoFrame from "../components/PhotoFrame";

const FilmPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-black flex justify-center items-center min-h-screen w-full">
      <div
        className={`flex flex-col justify-center items-center lg:grid grid-cols-2 transition-opacity duration-1000 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <PhotoFrame src="/images/000003.JPG" alt="trees" />
        <PhotoFrame src="/images/000014.JPG" alt="sheep" />
        <PhotoFrame src="/images/000013.JPG" alt="skyline" />
        <PhotoFrame src="/images/000028.jpg" alt="mannequins" />
        <PhotoFrame src="/images/IMG_2589.jpeg" alt="leaning trees" />
        <PhotoFrame src="/images/IMG_2595.jpeg" alt="sheep" />
        <PhotoFrame src="/images/25956.jpeg" alt="dog in water" />
      </div>
    </div>
  );
};

export default FilmPage;
