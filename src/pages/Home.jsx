import recat from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/navbar/Navbar";
import Hero from "../components/hero-section/HeroSection";
import TopSection from "../components/home/TopSection";
import ThreeLineTitle from "../components/titles/ThreeLineTitle";
import ProductCard from "../components/product/ProductCard";
import Footer from "../components/footer/Footer";

const Home = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      axios.get('http://127.0.0.1:8000/users/items/')
        .then(response => {
          setItems(response.data);
          setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
          console.error('Error fetching data:', error);
        });
    }, []);

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
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error fetching data: {error.message}</p>
      ) : (
        <div className="flex justify-center">
          <ul className="max-w-[1835px] grid md:grid-cols-2 xl:grid-cols-4 gap-4 2xl:grid-cols-5 px-[5%] md:px-[10%] pb-[4%]">
            {items.map(item => (
              <li key={item.item_id}>
                <ProductCard
                  name={item.item_name}
                  cover={item.cover_image}
                  description={item.description}
                  price={item.current_max_bid}
                />
              </li>
            ))}
          </ul>
        </div>
      )}

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
