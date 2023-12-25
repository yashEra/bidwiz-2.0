import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="bg-[#0052D4]">
    <div
      className=" text-white w-full py-[60px] text-center grid lg:grid-cols-3 gap-8"
      style={{
        padding: "0 9.895833333333333% 4% 9.895833333333333%",
      }}
    >
      <div className="flex flex-col items-start pt-8">
        <h2 className="font-bold text-xl py-4">Get In Touch</h2>
        <span className="text-left text-[#8EC2F2]">
          Some text goes here | BidWiz 2.0 New Version
        </span>
        <div className="flex flex-row items-start pt-4">
          <ul className="flex flex-row justify-start">
            <li className="pr-4">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </li>
            <li className="pr-4">
              <FontAwesomeIcon icon={faCartShopping} />
            </li>
            <li className="pr-4">
              <FontAwesomeIcon icon={faHeart} />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-start pt-8">
        <h2 className="font-bold text-xl py-4">Company info</h2>
        <ul className="flex flex-col items-start text">
          <li className="text-[#8EC2F2]">
            <a href="#">About</a>
          </li>
          <li className="text-[#8EC2F2]">
            <a href="#">Contact</a>
          </li>
          <li className="text-[#8EC2F2]">
            <a href="#">FaQ</a>
          </li>
          <li className="text-[#8EC2F2]">
            <a href="#">Help</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-start pt-8">
        <h2 className="font-bold text-xl py-4">Categories</h2>
        <ul className="flex flex-col items-start">
          <li className="text-[#8EC2F2]">
            <a href="#">Desktop and Mobile Accessories</a>
          </li>
          <li className="text-[#8EC2F2]">
            <a href="#">Computers</a>
          </li>
          <li className="text-[#8EC2F2]">
            <a href="#">Cameras</a>
          </li>
          <li className="text-[#8EC2F2]">
            <a href="#">Mobile Phones</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="flex flex-row justify-center p-8"><span className="text-md text-white font-bold">Made With 💗 By BidWiz Team. All Right Reserved.</span></div>
    </div>
  );
};

export default Footer;
