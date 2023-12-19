import recat from "react";
// import Particles from "react-particles-js";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] top-[90px]">
      {/* <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} /> */}
      <video
        className="object-cover h-full w-full absolute z-[-1]"
        src="http://localhost:3000/videos/hero-bg.mp4"
        autoPlay
        loop
        muted
      />
      <div className="w-full h-[90%] flex flex-col justify-center items-center text-white text-center">
        <h1 className="py-2">Main Hedding</h1>
        <h1 className="py-2">Sub Hedding</h1>
        <p className="text-al py-4">your trusted it solution partner</p>
        <div>
            <button className="mx-2">Get Start</button>
            <button className="mx-2">Help</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
