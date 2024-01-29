import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/Navbar";
import CategoryCard from "../components/card/CategoryCard";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/product/ProductCard';

const Electronics = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Fetch data from the backend API
        axios.get('http://127.0.0.1:8000/users/items/')
            .then(response => setItems(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []); 
  return (
    <div>
      <NavBar />
    <div>
        <h1>Item List</h1>
        <ul className="max-w-[1835px] grid md:grid-cols-2 xl:grid-cols-4 gap-4 2xl:grid-cols-5 px-[5%] md:px-[10%] pb-[4%]">
            {items.map(item => (
                <li key={item.item_id}>
                  <ProductCard name={item.item_name} cover={item.cover_image} description={item.description} price={item.current_max_bid}/>
                    {item.cover_image} - {item.end_date}
                </li>
            ))}
        </ul>
      
      <Footer />
    </div>
    </div>
  );
};

export default Categories;
