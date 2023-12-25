import recat from "react";
import NavBar from "../navbar/Navbar";
import Hero from "../hero-section/HeroSection";
import TopSection from "./TopSection";
import ThreeLineTitle from "../titles/ThreeLineTitle";
import ProductCard from "../product/ProductCard";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <TopSection />
      <ThreeLineTitle
        top="Featured Products"
        main="BESTSELLER PRODUCTS"
        bottom="Problems trying to resolve the conflict between "
      />
      <div
        className="grid grid-cols-4 gap-4"
        style={{
          padding: "0 9.895833333333333% 4% 9.895833333333333%",
        }}
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
