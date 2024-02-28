"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SiteTitle from "./SiteTitle";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className="quicksand z-10 lg:fixed">
      {isOpen && (
        <div
          id="sidebarBackdrop"
          className="fixed top-0 right-0 w-screen min-h-screen backdrop-blur-md lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
      <button onClick={toggleSidebar} className="pl-2 lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.7"
          stroke="#5E0D06"
          className="w-16 h-16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <nav
        className={`fixed left-0 top-0 min-h-screen w-64 border-r-4 border-[#5E0D06] text-black lg:static ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-black lg:translate-x-0`}
      >
        <div className="flex justify-between items-center p-4 lg:hidden">
          <button
            onClick={toggleSidebar}
            className="flex w-full justify-end text-black focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#5E0D06"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex py-2 px-4">
          <SiteTitle />
        </div>
        <div className="flex flex-col justify-between h-96">
          <ul className="flex flex-col gap-4 px-4 py-10 w-44 text-[#C2C04C] text-xl">
            <Link href={"/"}>
              <li
                onClick={toggleSidebar}
                className={` px-4 py-2 rounded-lg ${
                  isOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-500 ease-in-out hover:bg-[#C2C04C] hover:text-black lg:translate-x-0`}
              >
                Home
              </li>
            </Link>
            <Link href={"/film"}>
              <li
                onClick={toggleSidebar}
                className={`px-4 py-2 rounded-lg ${
                  isOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-700 ease-in-out hover:bg-[#C2C04C] hover:text-black lg:translate-x-0`}
              >
                Film
              </li>
            </Link>
            <Link href={"/digital"}>
              <li
                onClick={toggleSidebar}
                className={`px-4 py-2 rounded-lg ${
                  isOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-1000 ease-in-out hover:bg-[#C2C04C] hover:text-black lg:translate-x-0`}
              >
                Digital
              </li>
            </Link>
            <Link href="https://www.instagram.com/mehoy8/" target="_blank">
              <li className="px-4 py-2">
                <Image
                  src={"/new-Instagram-logo-white-glyph.png"}
                  alt="instagram logo"
                  width={30}
                  height={30}
                  className="rounded-lg"
                />
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
