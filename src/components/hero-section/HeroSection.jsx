import recat from "react";
// import Particles from "react-particles-js";
import HroImg from "./assest/macbook_gold-1.png";
import './assest/css/home-style.css'

const Hero = () => {
  return (
    <div className="w-full lg:h-[100vh] top-[90px] bg-gradient-to-r from-[var(--primary-blue)] to-[var(--primary-lightblue)] px-5 py-3">
      <div
        className="w-full h-[100%] lg:flex  lg:flex-row md:block justify-around  text-white text-left items-center"
        style={{ padding: "9.895833333333333%" }}
      >

        <div className="text-res pt-[50px]">
          <h4 className="font-bold py-1">
            SUMMER 2023
          </h4>
          <h1 className="py-2">
            -30% Discount
          </h1>
          <p className=" py-4">
            We know how large objects will act,
            <br /> but things on a small scale.
          </p>
          <div className="">
            <button className="w-[153px]  h-[45px] rounded-3xl border-solid border-2 border-light-blue-500 hover:scale-105 duration-300">
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
