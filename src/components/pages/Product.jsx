import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import NavBar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const ProductDes = () => {
  const [images, setImages] = useState({
    img1: "https://images.unsplash.com/photo-1468436139062-f60a71c5c892?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img2: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img3: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img4: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  const [amount, setAmount] = useState(1);

  return (
    <>
      <NavBar />
      <div className="w-full lg:pt-[10%] md:pt-[15%] pt-[20%] pb-[5%] px-[9.895833333333333%]">
        <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
          <div className="flex flex-col gap-6 lg:w-2/4">
            <img
              src={activeImg}
              alt=""
              className="w-full h-full aspect-square object-cover rounded-xl object-center"
            />
            <div className="grid grid-cols-4 md:gap-4 gap-2 w-full">
              <img
                src={images.img1}
                alt=""
                className="w-full md:h-24 h-16  rounded-md cursor-pointer aspect-square object-cover object-center"
                onClick={() => setActiveImage(images.img1)}
              />
              <img
                src={images.img2}
                alt=""
                className="w-full md:h-24 h-16 rounded-md cursor-pointer oaspect-square object-cover object-center"
                onClick={() => setActiveImage(images.img2)}
              />
              <img
                src={images.img3}
                alt=""
                className="w-full md:h-24 h-16 rounded-md cursor-pointer aspect-square object-cover object-center"
                onClick={() => setActiveImage(images.img3)}
              />
              <img
                src={images.img4}
                alt=""
                className="w-full md:h-24 h-16 rounded-md cursor-pointer aspect-square object-cover object-center"
                onClick={() => setActiveImage(images.img4)}
              />
            </div>
          </div>
          {/* ABOUT */}
          <div className="flex flex-col gap-4 lg:w-2/4">
            <div>
              <span className=" text-[#0052D4] font-semibold">
                2023 edition
              </span>
              <h1 className="text-3xl font-bold text-[#6FB1FC]">Macbook Pro</h1>
            </div>
            <p className="text-gray-700">
              Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi
              chilometri, Invincible 3 offre un livello di comfort elevatissimo
              sotto il piede per aiutarti a dare il massimo oggi, domani e
              oltre. Questo modello incredibilmente elastico e sostenitivo, è
              pensato per dare il massimo lungo il tuo percorso preferito e fare
              ritorno a casa carico di energia, in attesa della prossima corsa.
            </p>
            <h6 className="text-2xl font-semibold"> Current BID <span className="text-[#0052D4]">$ 19.00</span></h6>
            <div className="flex flex-row items-center gap-12">
              <div className="flex flex-row items-center">
                <button
                  className="bg-gray-200 py-2 px-5 rounded-lg text-[#0052D4] text-3xl"
                  onClick={() => setAmount((prev) => prev - 1)}
                >
                  -
                </button>
                <span className="py-4 px-6 rounded-lg">{amount}</span>
                <button
                  className="bg-gray-200 py-2 px-4 rounded-lg text-[#0052D4] text-3xl"
                  onClick={() => setAmount((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
              <button className="bg-[#0052D4] text-white font-semibold py-3 px-8 rounded-xl h-full">
              Bid
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDes;
