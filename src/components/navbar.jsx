import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { MdFavorite, MdHelp, MdFastfood } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";
import string from "../strings.json";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className=" font-product-sans font-bold max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-3xl px-2">
          <span className=" text-[#4285F4] ">G</span>
          <span className=" text-[#DB4437] ">o</span>
          <span className=" text-[#F4B400] ">o</span>
          <span className=" text-[#4285F4] ">g</span>
          <span className=" text-[#0F9D58] ">l</span>
          <span className=" text-[#DB4437] ">e</span>
          <span className=" text-gray-600 mr-2"> {string.banner}</span>
        </h1>
      </div>

      {/* Cart button */}

      <div className="text-lg">
        <button className="bg-white text-[#4285F4] flex items-center rounded-xl">
          <MdFastfood size={40} className="mr-2  text-[#4285F4]" />
          <p className=" text-gray-600  ">{string.pack}</p>
        </button>
      </div>

      {/* Mobile View */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side Drawer */}
      <div
        className={
          nav
            ? "bg-white fixed top-0 left-0 h-screen w-[300px] z-10 duration-300 pt-0"
            : "bg-white fixed top-0 left-[-100%] h-screen w-[300px] z-10 duration-300 pt-0"
        }
      >
        <BiArrowBack
          size={30}
          className="absolute right-5  top-5 cursor-pointer hover:-translate-x-1"
          onClick={() => setNav(!nav)}
        />
        <h2 className="text-3xl p-4 ">
          <span className=" text-[#4285F4] ">G</span>
          <span className=" text-[#DB4437] ">o</span>
          <span className=" text-[#F4B400] ">o</span>
          <span className=" text-[#4285F4] ">g</span>
          <span className=" text-[#0F9D58] ">l</span>
          <span className=" text-[#DB4437] ">e</span>
          <span className=" text-gray-600"> {string.banner}</span>
        </h2>
        <nav>
          <ul className="flex flex-col pt-0 pl-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <MdFastfood size={25} className="mr-4 text-[#4285F4] " /> {string.package}
            </li>
            <li className="text-xl py-4 flex">   
              <MdFavorite size={25} className="mr-4 text-[#DB4437]" /> {string.fav}
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4 text-[#0F9D58]" /> {string.wallet}
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4 text-[#F4B400]" /> {string.help}
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4 text-[#4285F4]" /> {string.invite}
          
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
