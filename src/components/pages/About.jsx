import NavBar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const About = () => {
    return(
        <div>
            <NavBar />
            <div className="flex flex-row p-52">
              <h1 className="text-[#1357DE] text-4xl font-semibold">
                About Us
              </h1>
            </div>
            <Footer />
        </div>

    );
};

export default About;