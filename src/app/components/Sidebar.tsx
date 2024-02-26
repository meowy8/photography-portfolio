"use client";
import Link from "next/link";
import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside>
      {isOpen && (
        <div
          id="sidebarBackdrop"
          className="fixed top-0 right-0 w-screen min-h-screen bg-black opacity-80 blur-3xl"
          onClick={toggleSidebar}
        ></div>
      )}
      <button onClick={toggleSidebar} className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1"
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
        className={`fixed left-0 top-0 min-h-screen w-64 border-l-2 border-black text-black z-100 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out backdrop-blur-xl`}
      >
        <div className="flex justify-between items-center p-4 ">
          <button
            onClick={toggleSidebar}
            className="flex w-full justify-end text-black focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#5E0D06"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="fixed px-4 py-10 font-semibold w-44 text-[#C2C04C] z-20">
          <li
            onClick={toggleSidebar}
            className={`px-4 py-2 cursor-pointer rounded-lg ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-500 ease-in-out`}
          >
            <Link href={"/"}>Home</Link>
          </li>
          <li
            onClick={toggleSidebar}
            className={`px-4 py-2 cursor-pointer rounded-lg ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-700 ease-in-out`}
          >
            <Link href={"/film"}>Film</Link>
          </li>
          <li
            onClick={toggleSidebar}
            className={`px-4 py-2 cursor-pointer rounded-lg ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-1000 ease-in-out`}
          >
            <Link href={"/digital"}>Digital</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
