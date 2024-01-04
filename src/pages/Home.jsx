import recat from "react";
import NavBar from "../components/navbar/Navbar";
import Hero from "../components/hero-section/HeroSection";
import TopSection from "../components/home/TopSection";
import ThreeLineTitle from "../components/titles/ThreeLineTitle";
import ProductCard from "../components/product/ProductCard";
import Footer from "../components/footer/Footer";

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
      <div className="flex justify-center">
        <div className="max-w-[1835px] grid md:grid-cols-2 xl:grid-cols-4 gap-4 2xl:grid-cols-5 px-[5%] md:px-[10%] pb-[4%]">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>

      <ThreeLineTitle
        top="Featured Products"
        main="BESTSELLER PRODUCTS"
        bottom="Problems trying to resolve the conflict between "
      />
      <div className="flex justify-center">
        <div className="max-w-[1835px] grid md:grid-cols-2 xl:grid-cols-4 gap-4 2xl:grid-cols-5 px-[5%] md:px-[10%] pb-[4%]">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>

      <ThreeLineTitle
        top="Featured Products"
        main="BESTSELLER PRODUCTS"
        bottom="Problems trying to resolve the conflict between "
      />
      <div className="flex justify-center">
        <div className="max-w-[1835px] grid md:grid-cols-2 xl:grid-cols-4 gap-4 2xl:grid-cols-5 px-[5%] md:px-[10%] pb-[4%]">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
