import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useParams } from "react-router-dom";


const ProductDes = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [bidAmount, setBidAmount] = useState("");
  const { itemId } = useParams();
  let csrfToken = '';

  const handleBidSubmission = async () => {
    try {
      const responseToken = await axios.get("http://127.0.0.1:8000/users/csrf/");
      const csrfToken = responseToken.data.csrfToken;
  
      const response = await fetch(`http://127.0.0.1:8000/users/items/${item.item_id}/bid/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrfToken,
        },
        body: JSON.stringify({ current_max_bid: parseFloat(bidAmount) }), // Ensure bidAmount is converted to a float
      });
  
      if (response.ok) {
        // Handle success response from the server
        console.log("Bid submitted successfully");
      } else {
        // Handle non-success response from the server
        console.error(
          "Error submitting bid:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error:", error);
    }
  };
  


  // useEffect(() => {
  //   const fetchCsrfToken = async () => {
  //     try {
  //       const response = await axios.get("http://127.0.0.1:8000/csrf/");
  //       csrfToken = response.data.csrfToken;
  //     } catch (error) {
  //       console.error("Error fetching CSRF token:", error);
  //     }
  //   };

  //   fetchCsrfToken();
  // }, []);


  const [images, setImages] = useState({
    img1: "https://images.unsplash.com/photo-1468436139062-f60a71c5c892?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img2: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img3: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img4: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  });

  const [activeImg, setActiveImage] = useState(images.img1);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/users/items/${itemId}/`
        );
        setItem(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [itemId]);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!item) {
    return <p>No item found for the specified ID.</p>;
  }

  return (
    <>
      <NavBar />
      <div className="w-full lg:pt-[10%] md:pt-[15%] pt-[20%] pb-[5%] px-[5%] md:px-[9.895833333333333%] flex justify-center">
        <div className="flex flex-col justify-between lg:flex-row gap-16 items-center max-w-7xl">
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
          {/* Description */}
          <div className="flex flex-col gap-4 lg:w-2/4">
            <div>
              <span className=" text-[#0052D4] font-semibold">
                End Date: {item.end_date}
              </span>
              <h1 className="text-3xl font-bold text-[#6FB1FC]">
                {item.item_name}
              </h1>
            </div>
            <p className="text-gray-700">{item.description}</p>
            <h6 className="text-2xl font-semibold">
              {" "}
              Current BID{" "}
              <span className="text-[#0052D4]">LKR {item.current_max_bid}</span>
            </h6>
            <div className="flex flex-row items-center gap-12">
              <div className="flex flex-row items-center">
                <form>
                  <input
                    type="text"
                    name="current_max_bid"
                    id="current_max_bid"
                    placeholder="Enter Your Bid"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                  />
                  <button
                    type="button"
                    className="bg-[#0052D4] text-white font-semibold py-3 px-8 rounded-xl h-full pl-8"
                    onClick={handleBidSubmission}
                  >
                    Bid
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDes;
