import NavBar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import TeamMemberCard from "../components/card/TeamMemberCard";
import ThreeLineTitle from "../components/titles/ThreeLineTitle";
import PageTitle from "../components/titles/PageTitle";
import TwoLineTitle from "../components/titles/TwoLineTitle";

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
        <div className="flex flex-row justify-center items-center px-[5%] md:px-[10%]">
          <TwoLineTitle top="Our Team Your Advantage" main="BidWiz-2.0" />
        </div>
        <div className="flex justify-center px-[5%] md:px-[10%]">
          <div className="flex max-w-[1140px]  justify-center">
            <p className="text-justify">
              Welcome to BidWiz, your exclusive destination where the thrill of
              bidding meets the joy of winning! At BidWiz, we're not just an
              auction site; we're your gateway to an exhilarating world of
              online bidding, curated for BidWiz's community. Born out of a
              shared passion for auctions, BidWiz was envisioned to bring
              together buyers and sellers associated with BidWiz. Whether you're
              a seasoned auction enthusiast or a first-time bidder, BidWiz is
              designed with you in mind, ensuring a seamless, enjoyable, and
              rewarding bidding experience. Our founders, avid collectors and
              enthusiasts connected to BidWiz, recognized the need for a
              platform that caters to the unique tastes and interests of our
              community. BidWiz reflects BidWiz's commitment to excellence,
              offering a diverse range of auction items, from exclusive BidWiz
              collectibles to cutting-edge tech and more. BidWiz boasts a
              user-friendly platform, intuitively designed for both desktop and
              mobile users. We prioritize transparency and trust, providing
              detailed item descriptions, a straightforward bidding process, and
              secure payment methods. Our dedicated customer support team is
              always ready to assist you, ensuring your satisfaction at every
              step. Join BidWiz today and embark on a bidding journey tailored
              for BidWiz's community. Discover, bid, win – it's all waiting for
              you at BidWiz, where every bid is a celebration of BidWize's
              unique identity and values!
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center px-[5%] md:px-[10%]">
          <ThreeLineTitle
            top="Our Team Your Advantage"
            main="Development Team"
          />
        </div>
        <div className="flex justify-center px-[5%] md:px-[10%]">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1140px]  justify-center pb-8">
            <TeamMemberCard
              name="Yasith Eranda"
              des="Web Devoloper, UI/UX Designer, Graphic Designer"
              image="images/team/yasith-2.png"
              linkedin="https://www.linkedin.com/in/yasith-eranda-yapa-amarasekara/"
              github="https://github.com/yashEra"
              fb="https://web.facebook.com/yash.era1998/"
              portfolio="https://cv.yasitheranda.me/"
            />
            <TeamMemberCard
              name="Niwandi Githma"
              des="Web Developer, Tech Enthusiest, Content Writer"
              image="images/team/niwandi.jpg"
              linkedin="https://www.linkedin.com/in/niwandi-hewagama/"
              github="#"
              fb="https://www.facebook.com/githma.hewagama?mibextid=LQQJ4d"
              // portfolio="#"
            />
            <TeamMemberCard
              name="Malith Rathnayake"
              des="Web Developer, Tech Enthusiest, Videographer"
              image="images/team/malith.jpg"
              linkedin="https://www.linkedin.com/in/malith-rathnayake-07b7b721a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              // github="#"
              fb="https://www.facebook.com/malithpromoddaya.rathnayake?mibextid=ZbWKwL"
              // portfolio="#"
            />
            <TeamMemberCard
              name="Thanujaa Venkadakrishnasharma"
              des="Web Developer, Tech Enthusiest, Content Writer"
              image="images/team/thanujaa.jpg"
              linkedin="https://www.linkedin.com/in/thanujaa-venkadakrishnasharma-68164323b/"
              github="https://github.com/Thanujaavks"
              // fb=""
              // portfolio="#"
            />
            <TeamMemberCard
              name="MRF Nuwaifa"
              des="Web Developer, Tech Enthusiest, Content Writer"
              image="images/team/nuwaifa.jpg"
              linkedin="https://web.facebook.com/profile.php?id=61555082611608"
              github="https://github.com/mrf017 "
              fb="https://www.linkedin.com/in/mrf-nuwaifa-a0b267290/?msgOverlay=true"
              // portfolio="#"
            />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center px-[5%] md:px-[10%]">
          <TwoLineTitle top="More about us" main="Who We Are?" />
        </div>
        <div className="flex justify-center px-[5%] md:px-[10%] pb-16">
          <div className="flex max-w-[1140px]  justify-center">
            <p className="text-justify">
              Welcome to BidWiz, your exclusive destination where the thrill of
              bidding meets the joy of winning! At BidWiz, we're not just an
              auction site; we're your gateway to an exhilarating world of
              online bidding, curated for BidWiz's community. Born out of a
              shared passion for auctions, BidWiz was envisioned to bring
              together buyers and sellers associated with BidWiz. Whether you're
              a seasoned auction enthusiast or a first-time bidder, BidWiz is
              designed with you in mind, ensuring a seamless, enjoyable, and
              rewarding bidding experience. Our founders, avid collectors and
              enthusiasts connected to BidWiz, recognized the need for a
              platform that caters to the unique tastes and interests of our
              community. BidWiz reflects BidWiz's commitment to excellence,
              offering a diverse range of auction items, from exclusive BidWiz
              collectibles to cutting-edge tech and more. BidWiz boasts a
              user-friendly platform, intuitively designed for both desktop and
              mobile users. We prioritize transparency and trust, providing
              detailed item descriptions, a straightforward bidding process, and
              secure payment methods. Our dedicated customer support team is
              always ready to assist you, ensuring your satisfaction at every
              step. Join BidWiz today and embark on a bidding journey tailored
              for BidWiz's community. Discover, bid, win – it's all waiting for
              you at BidWiz, where every bid is a celebration of BidWize's
              unique identity and values!
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
