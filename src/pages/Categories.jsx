import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/Navbar";
import CategoryCard from "../components/card/CategoryCard";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/product/ProductCard";
import TwoLineTitle from "../components/titles/TwoLineTitle";

const Categories = () => {
  const [electronicsItems, setElectronicsItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/users/electronics/")
      .then((response) => setElectronicsItems(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <NavBar />

      <div className="pt-[50px]">
        <TwoLineTitle top="More relible digital item" main="Electronic Items" />
        <div className="flex justify-center  px-[5%] md:px-[10%] pb-[4%]">

        <div className="md:w-auto lg:w-[1140px] grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          <CategoryCard name="Electronic Items" cover="cover-default" url="electronics" />
          <CategoryCard name="arts" cover="cover-default" url="arts" />
          <CategoryCard name="Fasions" cover="cover-default" url="fasions" />
          


        </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Categories;
