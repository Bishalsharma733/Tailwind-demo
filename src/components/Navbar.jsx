import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[90px] bg-black sticky top-0">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="text-[#00d8ff] font-poppins2">DEFI</h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-white items-center font-poppins2">
            <li className="hover:cursor-pointer hover:text-[#00d8ff]">
              Platform
            </li>
            <li className="hover:cursor-pointer hover:text-[#00d8ff]">
              Developers
            </li>
            <li className="hover:cursor-pointer hover:text-[#00d8ff]">
              Community
            </li>
            <li className="hover:cursor-pointer hover:text-[#00d8ff]">About</li>
            <button className="ml-4">Use Defi</button>
          </ul>
        </div>

        {/* Hamburger menu */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            <li className="text-2xl hover:cursor-pointer hover:text-[#00d8ff]">
              Platform
            </li>
            <li className="text-2xl hover:cursor-pointer hover:text-[#00d8ff]">
              Developers
            </li>
            <li className="text-2xl hover:cursor-pointer hover:text-[#00d8ff]">
              Community
            </li>
            <li className="text-2xl hover:cursor-pointer hover:text-[#00d8ff]">
              About
            </li>
            <button className="m-8">Use Defi</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
