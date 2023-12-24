import recat from "react";
import MobileIcon from "./assest/Mobile.svg";
import "./assest/css/home.css";

const TopSection = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="lg:w-[80.20833333333333%] bg-[white] top-sec-main drop-shadow-xl">
        <div className="flex lg:flex-row sm:flex-col md:flex-col justify-around items-center">
          <div>
            <a className="flex flex-col justify-center items-center p-8">
              <img src={MobileIcon} alt="" width="60px" />
              <span className="text-[--primary-blue] text-xl font-bold">
                Mobile Devices
              </span>
              <span className="text-[--primary-blue] text-md">
                Mobile Devices
              </span>
            </a>
          </div>

          <div>
            <a className="flex flex-col justify-center items-center p-8">
              <img src={MobileIcon} alt="" width="50px" />
              <span className="text-[--primary-blue] text-xl font-bold">
                Mobile Devices
              </span>
              <span className="text-[--primary-blue] text-md">
                Mobile Devices
              </span>
            </a>
          </div>

          <div>
            <a className="flex flex-col justify-center items-center p-8">
              <img src={MobileIcon} alt="" width="50px" />
              <span className="text-[--primary-blue] text-xl font-bold">
                Mobile Devices
              </span>
              <span className="text-[--primary-blue] text-md">
                Mobile Devices
              </span>
            </a>
          </div>

          <div>
            <a className="flex flex-col justify-center items-center p-8">
              <img src={MobileIcon} alt="" width="50px" />
              <span className="text-[--primary-blue] text-xl font-bold">
                Mobile Devices
              </span>
              <span className="text-[--primary-blue] text-md">
                Mobile Devices
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
