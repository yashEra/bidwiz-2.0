import recat from "react";
import MobileIcon from "./assest/Mobile.svg";
import './assest/css/home.css'

const TopSection = () => {
  return (
    <div
      className="w-[80.20833333333333%] bg-[white] top-sec-main"
    >
      <div className="flex lg:flex-row sm:flex-col md:flex-col justify-around items-center">

          <div>
            <a className="flex flex-col justify-center items-center sm:p-8 md:p-8">
              <img src={MobileIcon} alt="" width='90px'/>
              <span className="text-[--primary-blue] text-2xl font-bold">
                Mobile Devices
              </span>
              <span className="text-[--primary-blue] text-lg">
                Mobile Devices
              </span>
            </a>
          </div>

          <div>
            <a className="flex flex-col justify-center items-center p-4">
              <img src={MobileIcon} alt="" width='90px'/>
              <span className="text-[--primary-blue] text-2xl font-bold">
                Mobile Devices
              </span>
              <span className="text-[--primary-blue] text-lg">
                Mobile Devices
              </span>
            </a>
          </div>

          <div>
            <a className="flex flex-col justify-center items-center p-4">
              <img src={MobileIcon} alt="" width='90px'/>
              <span className="text-[--primary-blue] text-2xl font-bold">
                Mobile Devices
              </span>
              <span className="text-[--primary-blue] text-lg">
                Mobile Devices
              </span>
            </a>
          </div>

          <div>
            <a className="flex flex-col justify-center items-center p-4">
              <img src={MobileIcon} alt="" width='90px'/>
              <span className="text-[--primary-blue] text-2xl font-bold">
                Mobile Devices
              </span>
              <span className="text-[--primary-blue] text-lg">
                Mobile Devices
              </span>
            </a>
          </div>
        </div>
    </div>
  );
};

export default TopSection;
