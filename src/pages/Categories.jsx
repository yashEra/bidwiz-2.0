import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/Navbar";
import CategoryCard from "../components/card/CategoryCard";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/product/ProductCard';
import TwoLineTitle from "../components/titles/TwoLineTitle";

const Categories = () => {
  const [electronicsItems, setElectronicsItems] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/users/electronics/')
      .then(response => setElectronicsItems(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <NavBar />

      <div className="pt-[50px]">
        <TwoLineTitle top="More relible digital item" main="Electronic Items" />
        <ul className="max-w-[1835px] grid md:grid-cols-2 xl:grid-cols-4 gap-4 2xl:grid-cols-5 px-[5%] md:px-[10%] pb-[4%] pt-16">
          {electronicsItems.map(item => (
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

      <Footer />
    </div>
  );
};

export default Categories;
