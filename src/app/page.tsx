"use client";
import Image from "next/image";
import PhotoFrame from "./components/PhotoFrame";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="flex flex-col items-center h-screen bg-black quicksand">
      <div
        className={`flex  flex-col transition-opacity duration-1000 ease-in-out lg:grid grid-cols-2 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Link href={"/film"} className="group">
          <div className="flex flex-col border-8 border-black w-[600px] h-[400px] overflow-hidden">
            <Image
              src="/images/000003.JPG"
              alt="trees"
              width={600}
              height={600}
              className=""
            />
          </div>
          <div className="flex bg-black p-2 ">
            <span className="text-[#C2C04C] text-xl group-hover:translate-x-4 transition-all duration-300 ml-2">
              Film
            </span>
          </div>
        </Link>
        <Link href={"/digital"} className="group">
          <div className="flex flex-col border-8 border-black w-[600px] h-[400px] overflow-hidden">
            <Image
              src="/images/DSCF7722.jpg"
              alt="garden"
              width={600}
              height={600}
              className=""
            />
          </div>
          <div className="flex bg-black p-2">
            <span className="text-[#C2C04C] text-xl group-hover:translate-x-4 transition-all duration-300 ml-2">
              Digital
            </span>
          </div>
        </Link>
      </div>
    </main>
  );
}
