import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./assest/css/nav-style.css";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full 2xl:h-[100px] lg:h-[80px] sm:h-[79px] bg-while nav-sec fixed bg-white z-50">
      <div className="max-w-[80.20833333333333%] mx-auto flex justify-between items-center h-full">
        <div>
          <h1 className="text-[#1357DE] font-black">
            <a href="/">BidWiz</a>
          </h1>
        </div>
        <div>
          <div className="hidden lg:flex font-bold">
            <ul className="flex text-[#555555] items-center text-sm">
              <li className="p-4">
                <a href="categories">Categories</a>
              </li>
              <li className="p-4">
                <a href="about">About US</a>
              </li>
              <li className="p-4">
                <a href="contact">Contact Us</a>
              </li>
              {/* <button className="ml-4"> Get Quote</button> */}
            </ul>
          </div>

          <div className="flex lg:hidden items-center">
            <a href="items-center">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-[#1357DE] text-[20px] px-2"
              />
            </a>
            <a href="items-center">
              <FontAwesomeIcon
                icon={faHeart}
                className="text-[#1357DE] text-[20px] px-4"
              />
            </a>
            {nav ? (
              <AiOutlineClose
                onClick={handleNav}
                size={30}
                className="text-[#1357DE]"
              />
            ) : (
              <AiOutlineMenu
                onClick={handleNav}
                size={30}
                className="text-[#1357DE]"
              />
            )}
          </div>
          <div
            className={
              nav
                ? "w-full bg-gradient-to-r from-[var(--primary-blue)] to-[var(--primary-lightblue)] text-[#f9ffff] font-medium absolute top-[59px] left-0 flex justify-center text-center py-12"
                : "absolute left-[-200%]"
            }
          >
            <ul>
              <li className="text-xl py-4 px-14">
                <a href="categories">Categories</a>
              </li>
              <li className="text-xl py-4 px-14">
                <a href="about">About Us</a>
              </li>
              <li className="text-xl py-4 px-14">
                <a href="contact">Contact Us</a>
              </li>
              <li className="text-xl py-4 px-14">
                <a href="login">Login / Register</a>
              </li>
              <li className="text-xl py-4 px-14">
                <form className="flex flex-row justify-between">
                  <input
                    className="peer block w-3/4 appearance-none border-0 border-b border-white bg-transparent py-2.5 px-0 text-xl text-white focus:border-blue-600 focus:outline-none focus:ring-0"
                    type="text"
                    name="search"
                    placeholder="Search"
                  />
                  <button
                    type="submit"
                    class="mt-5 rounded-xl bg-[white] px-10 py-2 text-[#1357DE]"
                  >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex text-[#23A6F0] items-center">
            <li className="p-4">
              <FontAwesomeIcon icon={faUser} />
              <a href="login">
                <span className="px-4 font-bold text-sm">Login / Register</span>
              </a>
            </li>
            <li className="p-4">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </li>
            <li className="p-4">
              <FontAwesomeIcon icon={faCartShopping} />
            </li>
            <li className="py-4 pl-4">
              <FontAwesomeIcon icon={faHeart} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
