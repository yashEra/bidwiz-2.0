import Footer from "../footer/Footer";
import NavBar from "../navbar/Navbar";

const Contact = () => {
  return (
    <div>
      <NavBar />

      <div className="w-full h-[90vh] items-center grid lg:grid-cols-2 gap-16 pt-8 px-[9.895833333333333%] lg:top-[-100px]">
        <div className="">
          <div className="">
            <div className="flex flex-row justify-center pb-8">
              <h1 className="text-[#1357DE] font-black text-center">
                Getting Touch With Us
              </h1>
            </div>
            <form>
              <div className="w-full grid lg:grid-cols-2 gap-4 px-[5%]  py-[2%]">
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
              <div className="px-[5%] py-[2%] ">
                <input
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  type="email"
                  name="lastname"
                  placeholder="Email"
                />
              </div>
              <div className="px-[5%] py-[2%]">
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
        </div>
        <div className="w-full grid grid-cols-2 gap-4 justify-end">
          <div>Badulla</div>
          <div className="text-left">Galle</div>
          <div>Nuwara Eli</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
