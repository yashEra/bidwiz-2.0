import MobileIcon from "./assest/Mobile.svg";
import "./assest/css/home.css";

const TopSection = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="px-[5%] max-w-[1835px] bg-[white] top-sec-main drop-shadow-xl rounded-xl">
        <div className=" items-center text-center grid md:grid-cols-2 lg:grid-cols-4">
          <div className="hover:scale-105 duration-300">
            <a className="flex flex-col justify-center items-center p-8">
              <img src={MobileIcon} alt="" width="50px" />
              <span className="text-[--primary-blue] text-xl font-bold">
                Mobile Devices
              </span>
              <span className="text-gray-500 text-md">
                Hardware and Accesories
              </span>
            </a>
          </div>

          <div className="hover:scale-105 duration-300">
            <a className="flex flex-col justify-center items-center p-8">
              <img src={MobileIcon} alt="" width="50px" />
              <span className="text-[--primary-blue] text-xl font-bold">
                Electronic Devices
              </span>
              <span className="text-gray-500 text-md">
                Mobile Devices
              </span>
            </a>
          </div>

          <div className="hover:scale-105 duration-300">
            <a className="flex flex-col justify-center items-center p-8">
              <img src={MobileIcon} alt="" width="50px" />
              <span className="text-[--primary-blue] text-xl font-bold">
                Computers
              </span>
              <span className="text-gray-500 text-md">
                Hardware and Accesories
              </span>
            </a>
          </div>

          <div className="hover:scale-105 duration-300">
            <a className="flex flex-col justify-center items-center p-8">
              <img src={MobileIcon} alt="" width="50px" />
              <span className="text-[--primary-blue] text-xl font-bold">
              Hardware
              </span>
              <span className="text-gray-500 text-md">
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
