import NavBar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import TeamMemberCard from "../card/TeamMemberCard";
import ThreeLineTitle from "../titles/ThreeLineTitle";

const About = () => {
  return (
    <>
      <NavBar />

      <div className="">
        <div className="flex flex-row py-16 px-[9.895833333333333%]">
          <h1 className="text-[#1357DE] text-4xl font-semibold">About Us</h1>
        </div>
        <div className="flex flex-row py-4 justify-center px-[9.895833333333333%]">
          <ThreeLineTitle
            top="Our Team Your Advantage"
            main="Development Team"
          />
        </div>

        <div className="flex justify-center px-[9.895833333333333%]">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1140px]  justify-center pb-8">
            <TeamMemberCard
              name="Yasith Eranda"
              des="Web Devoloper, UI/UX Designer, Graphic Designer"
              image="images/team/yasith-2.png"
            />
            <TeamMemberCard name="Malith" des="Web Developer, Tech Enthusiest" image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <TeamMemberCard image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <TeamMemberCard image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <TeamMemberCard image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
