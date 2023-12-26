import {useState} from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping, faHeart, faUser } from '@fortawesome/free-solid-svg-icons'
import './assest/css/nav-style.css'

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className="w-full 2xl:h-[100px] lg:h-[80px] sm:h-[79px] bg-while nav-sec" >
      <div className="max-w-[80.20833333333333%] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="text-[#1357DE] font-black"><a href="/">BidWiz</a></h1>
        </div>
        <div>
          <div className="hidden lg:flex font-bold">
            <ul className="flex text-[#555555] items-center text-md">
              <li className="p-4"><a href="contact">Catogories</a></li>
              <li className="p-4"><a href="contact">About US</a></li>
              <li className="p-4"><a href="contact">Contact Us</a></li>
              {/* <button className="ml-4"> Get Quote</button> */}
            </ul>
          </div>
          
          <div className="block lg:hidden">
            {nav ? <AiOutlineClose onClick={handleNav} size={30} className="text-[#1357DE]" /> :  <AiOutlineMenu onClick={handleNav} size={30} className="text-[#1357DE]" /> }
          </div>
          <div className={nav ? "w-full bg-black text-[#f9ffff] font-bold absolute top-[79px] left-0 flex justify-center text-center" : "absolute left-[-100%]"}>
            <ul>
              <li className="text-2xl">Home</li>
              <li className="text-2xl">Services</li>
              <li className="text-2xl">Projects</li>
              <li className="text-2xl">About Us</li>
              <li className="text-2xl">Contact Us</li>
              <button className="m-8">Get Quote</button>
            </ul>
          </div>
        </div>
        <div className="hidden lg:flex">
            <ul className="flex text-[#23A6F0] items-center">
              <li className="p-4"><FontAwesomeIcon icon={faUser} /><span  className="px-4 font-bold">Login / Register</span></li>
              <li className="p-4"><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
              <li className="p-4"><FontAwesomeIcon icon={faCartShopping} /></li>
              <li className="p-4"><FontAwesomeIcon icon={faHeart} /></li>
              {/* <button className="ml-4"> Get Quote</button> */}
            </ul>
          </div>
      </div>
    </div>
  );
};

export default NavBar;
