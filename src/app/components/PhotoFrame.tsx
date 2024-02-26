import Image from "next/image";
import React from "react";

const PhotoFrame = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="border-8 border-black hover:cursor-pointer hover:border-[#f3f9ff] transition-all duration-200 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={600}
        height={600}
        className="hover:scale-105 transition-all duration-300"
      ></Image>
    </div>
  );
};

export default PhotoFrame;
