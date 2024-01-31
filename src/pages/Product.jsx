import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProductDes = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bidAmount, setBidAmount] = useState("");
  const [images, setImages] = useState({});
  const [activeImg, setActiveImage] = useState('');

  const { itemId } = useParams();
  const navigate = useNavigate();

  //enter the bid value
  const handleBidSubmission = async () => {
    try {
      const responseToken = await axios.get("http://127.0.0.1:8000/users/csrf/");
      const csrfToken = responseToken.data.csrfToken;

      if (parseFloat(bidAmount) <= parseFloat(item.current_max_bid)) {
        console.error("Error: Bid amount must be greater than the current bid");
        return; 
      }

      const response = await fetch(`http://127.0.0.1:8000/users/items/${item.item_id}/bid/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrfToken,
        },
        body: JSON.stringify({ current_max_bid: parseFloat(bidAmount) }),
      });
          window.location.reload()
      if (response.ok) {
        console.log("Bid submitted successfully");
      } else {

        // Handle non-successful bid submission
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/users/items/${itemId}/`);
        setItem(response.data);

        // Update the images state with dynamic image URLs from Django
        setImages({
          img1: response.data.cover_image,
          img2: response.data.imageone,
          img3: response.data.imagetwo,
          img4: response.data.imagethree,
        });

        // Set the first image as the active image
        setActiveImage(response.data.cover_image);

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
              src={`http://localhost:3000/images/items/${activeImg}`}
              alt={`Product Image ${Object.keys(images).find(key => images[key] === activeImg) + 1}`}
              className="w-full h-full aspect-square object-cover rounded-xl object-center"
            />
            <div className="grid grid-cols-4 md:gap-4 gap-2 w-full">
              {Object.values(images).map((img, index) => (
                <img
                  key={index}
                  src={`http://localhost:3000/images/items/${img}`}
                  alt={`Product Image ${index + 1}`}
                  className="w-full md:h-24 h-16 rounded-md cursor-pointer aspect-square object-cover object-center"
                  onClick={() => setActiveImage(img)}
                />
              ))}
            </div>
          </div>
          {/* Description */}
          <div className="flex flex-col gap-4 lg:w-2/4">
            <div>
              <span className="text-[#0052D4] font-semibold">
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
