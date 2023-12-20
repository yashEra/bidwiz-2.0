import recat,{useState} from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping, faHeart, faUser } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className="w-full h-[90px] bg-while " >
      <div className="max-w-[80.20833333333333%] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="text-[#1357DE] font-black">BidWiz 2.0</h1>
        </div>
        <div>
          <div className="hidden md:flex font-bold">
            <ul className="flex text-[#555555] items-center">
              <li>Catogories</li>
              <li>About US</li>
              <li>Contact Us</li>
              {/* <button className="ml-4"> Get Quote</button> */}
            </ul>
          </div>
          
          <div className="block md:hidden">
            {nav ? <AiOutlineClose onClick={handleNav} size={30} className="text-[#1357DE]" /> :  <AiOutlineMenu onClick={handleNav} size={30} className="text-[#1357DE]" /> }
          </div>
          <div className={nav ? "w-full bg-black text-[#f9ffff] font-bold absolute top-[89px] left-0 flex justify-center text-center" : "absolute left-[-100%]"}>
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
        <div className="hidden md:flex">
            <ul className="flex text-[#1357DE] items-center">
              <li><FontAwesomeIcon icon={faUser} /><span  className="px-4 font-bold">Login/Register</span></li>
              <li><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
              <li><FontAwesomeIcon icon={faCartShopping} /></li>
              <li><FontAwesomeIcon icon={faHeart} /></li>
              {/* <button className="ml-4"> Get Quote</button> */}
            </ul>
          </div>
      </div>
    </div>
  );
};

export default NavBar;
