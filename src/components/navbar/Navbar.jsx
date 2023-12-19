import recat,{useState} from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className="w-full h-[90px] bg-black " >
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="text-[#1357DE]">BidWiz 2.0</h1>
        </div>
        <div>
          <div className="hidden md:flex">
            <ul className="flex text-[#f9ffff] items-center">
              <li>Catogories</li>
              <li>About US</li>
              <li>Contact Us</li>
              {/* <button className="ml-4"> Get Quote</button> */}
            </ul>
          </div>
          
          <div className="block md:hidden">
            {nav ? <AiOutlineClose onClick={handleNav} size={30} className="text-[#f9ffff]" /> :  <AiOutlineMenu onClick={handleNav} size={30} className="text-[#f9ffff]" /> }
          </div>
          <div className={nav ? "w-full bg-black text-[#f9ffff] absolute top-[89px] left-0 flex justify-center text-center" : "absolute left-[-100%]"}>
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
            <ul className="flex text-[#f9ffff] items-center">
              <li>Catogories</li>
              <li>About US</li>
              <li>Contact Us</li>
              {/* <button className="ml-4"> Get Quote</button> */}
            </ul>
          </div>
      </div>
    </div>
  );
};

export default NavBar;
