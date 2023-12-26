import Footer from "../footer/Footer";
import NavBar from "../navbar/Navbar";

const Contact = () => {
  return (
    <div>
      <NavBar />

      <div className="pt-[5%] pb-[5%] px-[9.895833333333333%]">
        <div className="w-full items-center grid lg:grid-cols-2 gap-16">
          <div className="">
            <div className="flex flex-row pb-8">
              <h1 className="text-[#1357DE] text-4xl font-semibold">
                Getting Touch With Us
              </h1>
            </div>
            <form>
              <div className="w-full grid lg:grid-cols-2 gap-4  py-[2%]">
                <input
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                />
                <input
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  type="text"
                  name="lastname"
                  placeholder="First Name"
                />
              </div>
              <div className="py-[2%] ">
                <input
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  type="email"
                  name="lastname"
                  placeholder="Email"
                />
              </div>
              <div className="py-[2%]">
                <textarea
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  type="textarea"
                  name="des"
                  placeholder="Message"
                />
                <button
                  type="submit"
                  class="mt-5 rounded-md bg-[#1357DE] px-10 py-2 text-white"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

        <div className="w-full grid lg:grid-cols-2 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-[#1357DE] text-xl font-semibold py-4">
              Badulla
            </h2>
            <p className="text-base text-gray-500">Rest of Address</p>
            <hr className="w-1/2 border-[#8EC2F2]" />
            <div className="w-full flex flex-row justify-between">
              <p className="font-bold font-md text-gray-500 py-4">Phone: </p>
              <p className="font-md text-gray-500 py-4">+94 55 123 4567</p>
            </div>
            <div className="w-full flex flex-row justify-between">
              <p className="font-bold font-md  text-gray-500 pb-4">Email:</p>
              <p className="font-md text-gray-500 pb-4">badulla@bidwiz.com</p>
            </div>
          </div>
          <div>
            <h2 className="text-[#1357DE] text-xl font-semibold py-4">
              Galle
            </h2>
            <p className="text-base text-gray-500">Rest of Address</p>
            <hr className="w-1/2 border-[#8EC2F2]" />
            <div className="w-full flex flex-row justify-between">
              <p className="font-bold font-md text-gray-500 py-4">Phone: </p>
              <p className="font-md text-gray-500 py-4">+94 55 123 4567</p>
            </div>
            <div className="w-full flex flex-row justify-between">
              <p className="font-bold font-md  text-gray-500 pb-4">Email:</p>
              <p className="font-md text-gray-500 pb-4">badulla@bidwiz.com</p>
            </div>
          </div>
          <div>
            <h2 className="text-[#1357DE] text-xl font-semibold py-4">
              Nuwara Eli
            </h2>
            <p className="text-base text-gray-500">Rest of Address</p>
            <hr className="w-1/2 border-[#8EC2F2]" />
            <div className="w-full flex flex-row justify-between">
              <p className="font-bold font-md text-gray-500 py-4">Phone: </p>
              <p className="font-md text-gray-500 py-4">+94 55 123 4567</p>
            </div>
            <div className="w-full flex flex-row justify-between">
              <p className="font-bold font-md  text-gray-500 pb-4">Email:</p>
              <p className="font-md text-gray-500 pb-4">badulla@bidwiz.com</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
