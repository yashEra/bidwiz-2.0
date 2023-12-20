import recat from "react";
// import Particles from "react-particles-js";
import HroImg from "./assest/hero-4-png-picture.png";
import './assest/css/home-style.css'

const Hero = () => {
  return (
    <div className="w-full h-[90vh] top-[90px] bg-gradient-to-r from-[var(--primary-blue)] to-[var(--primary-lightblue)] px-5 py-3">
      <div
        className="w-full h-[90%] lg:flex lg:flex-row md:block justify-between  text-white text-left lg:place-items-start md:place-items-center items-center"
        style={{ padding: "9.895833333333333%" }}
      >

        <div className="text-res">
          <h4 className="font-bold">
            SUMMER 2020
          </h4>
          <h1 className="py-2">
            -30% Discount
          </h1>
          <p className=" py-4">
            We know how large objects will act,
            <br /> but things on a small scale.
          </p>
          <div>
            <button className="w-[257px]  h-[55px] rounded-3xl border-solid border-2 border-light-blue-500">
              Read More
            </button>
          </div>
        </div>

        <div className="hero-img">
          <img src={HroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
