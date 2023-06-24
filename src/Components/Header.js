import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiSearch, BiUser } from "react-icons/bi";

const Header = () => {  
  return (
    <div className="fixed bg-opacity-50 bg-black h-20 w-full">
      <div className="flex justify-between mx-28 pt-3">
        <div className='flex items-center cursor-pointer'>logo</div>
        <div className="flex justify-evenly w-96 [&>*]:flex [&>*]:[&>*]:mt-1.5 items-center ml-16 [&>span]:cursor-pointer">
          <span className='hover:text-red-600'>
            Home <IoMdArrowDropdown />
          </span>
          <span className='hover:text-red-600'>
            About <IoMdArrowDropdown />
          </span>
          <span className='hover:text-red-600'>
            Contact <IoMdArrowDropdown />
          </span >
          <span className='hover:text-red-600'>
            Features <IoMdArrowDropdown />
          </span>
        </div>
        <div className="flex justify-evenly w-28 items-center text-xl [&>*]:cursor-pointer">
          <BiSearch className='hover:text-red-800'/>
          <div className="bg-black w-12 h-12 rounded-3xl flex justify-center items-center hover:text-red-800">
          <BiUser />
          </div >
        </div>
      </div>
    </div>
  );
};

export default Header;
