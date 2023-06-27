import React from "react";
// import { IoMdArrowDropdown } from "react-icons/io";
import { BiSearch, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed top-0 bg-opacity-95 bg-black h-16 w-full z-10 flex flex-col">
      <div className="flex justify-between mx-28 pt-2">
        <div className="flex items-center cursor-pointer">logo</div>
        <div className="flex justify-evenly w-96 [&>*]:flex [&>*]:[&>*]:mt-1.5 items-center ml-16 [&>span]:cursor-pointer font-light text-lg">
          <Link to='/' className="hover:text-red-600">Home</Link>
          <Link to='/about' className="hover:text-red-600">About</Link>
          <Link to='/' className="hover:text-red-600">Contact</Link>
        </div>
        <div className="flex justify-evenly w-28 items-center text-xl [&>*]:cursor-pointer ">
          <BiSearch className="hover:text-red-800 text-2xl" />
          <div className="bg-black w-12 h-12 rounded-3xl flex justify-center items-center hover:text-red-800 text-2xl">
            <BiUser />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
