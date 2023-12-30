import NavBar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import TeamMemberCard from "../card/TeamMemberCard";
import ThreeLineTitle from "../titles/ThreeLineTitle";
import PageTitle from "../titles/PageTitle";

const About = () => {
  return (
    <>
      <NavBar />

      <div className="">
        <div className="pt-[60px] md:pt-[80px]">
          <PageTitle
            image="images/pages/page-title.jpg"
            heading="Join Us"
            des="BidWiz is an online auction website that provides a platform for users to bid on a wide range of products and items."
          />
        </div>
        <div className="flex flex-row py-4 justify-center items-center px-[5%] md:px-[10%]">
          <ThreeLineTitle
            top="Our Team Your Advantage"
            main="Development Team"
          />
        </div>

        <div className="flex justify-center px-[5%] md:px-[9.895833333333333%]">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1140px]  justify-center pb-8">
            <TeamMemberCard
              name="Yasith Eranda"
              des="Web Devoloper, UI/UX Designer, Graphic Designer"
              image="images/team/yasith-2.png"
              linkedin="https://www.linkedin.com/in/yasith-eranda-yapa-amarasekara/"
              github="https://github.com/yashEra"
              fb=""
              portfolio="https://cv.yasitheranda.me/"
            />
            <TeamMemberCard
              name="Niwandi Githma"
              des="Web Developer, Tech Enthusiest, Content Writer"
              image="images/team/niwandi.jpg"
              linkedin="#"
              github="#"
              fb="#"
              portfolio="#"
            />
            <TeamMemberCard
              name="Malith Rathnayake"
              des="Web Developer, Tech Enthusiest, Videographer"
              image="images/team/malith.jpg"
              linkedin="#"
              github="#"
              fb="#"
              portfolio="#"
            />
            <TeamMemberCard
              name="Thanujaa Venkadakrishnasharma"
              des="Web Developer, Tech Enthusiest, Content Writer"
              image="images/team/thanujaa.jpg"
              linkedin="#"
              github="#"
              // fb=""
              portfolio="#"
            />
            <TeamMemberCard
              name="MRF Nuwaifa"
              des="Web Developer, Tech Enthusiest, Content Writer"
              image="images/team/nuwaifa.jpg"
              linkedin="#"
              github="#"
              fb="#"
              portfolio="#"
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
