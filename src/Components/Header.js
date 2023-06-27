import React from "react";
// import { IoMdArrowDropdown } from "react-icons/io";
import { BiSearch, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import AboutPage from "./AboutPage";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="fixed top-0 bg-opacity-95 bg-black h-16 w-full z-10 flex flex-col">
      <div className="flex justify-between mx-28 pt-2">
        <div className="flex items-center cursor-pointer">logo</div>
        <div className="flex justify-evenly w-96 [&>*]:flex [&>*]:[&>*]:mt-1.5 items-center ml-16 [&>span]:cursor-pointer font-light text-lg">
          <Link to="/" className="hover:text-red-600 hover:font-normal">
            Home
          </Link>
          <Link to="/about" className="hover:text-red-600 hover:font-normal">
            About
          </Link>
          <div className="hover:text-red-600 hover:font-normal cursor-pointer relative group flex flex-col px-2">
            Tags
            <ul className='w-60 h-[22rem]  bg-black text-white font-light [&>*]:my-2  [&>*]:px-4   absolute m-[2.5rem] py-4 px-3 invisible group-hover:visible hover:visible '>
                <li className='hover:animate-tagsBgChange' onClick={()=> navigate('/about')}><Link>Movies</Link></li>
                <li className='hover:animate-tagsBgChange'><Link>Popular Movies</Link></li>
                <li className='hover:animate-tagsBgChange'><Link>Upcoming Movies</Link></li>
                <li className='hover:animate-tagsBgChange'><Link>Top Rated Movies</Link></li>
                <li className='hover:animate-tagsBgChange'><Link>Trending Movies</Link></li>
                <li className='hover:animate-tagsBgChange'><Link>TV</Link></li>
                <li className='hover:animate-tagsBgChange'><Link>On Air</Link></li>
                <li className='hover:animate-tagsBgChange'><Link>Popular Series</Link></li>
                <li className='hover:animate-tagsBgChange'><Link>Top Rated Series</Link></li>
            </ul>
          </div>
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
