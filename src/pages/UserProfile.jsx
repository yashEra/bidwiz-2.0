import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/Navbar";
import CategoryCard from "../components/card/CategoryCard";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const UserProfile = () => {
  const [userData, setUserData] = useState({});

  const logout = async () => {
    try {
      // Assuming you have a logout-all endpoint
      await axios.post("http://127.0.0.1:8000/users/logout-all/");

      // Clear user data from local storage
      localStorage.removeItem("userDetails");

      // Clear cookies
      // document.cookie = " ";
      Cookies.remove("token");

      // Reset state
      setUserData({});

      // Redirect to the login page or any other page
      window.location.href = "/login";
    } catch (error) {
      console.error("Error logging out:", error);
      // Handle the error appropriately
    }
  };

  useEffect(() => {
    // Fetch user data from local storage
    const storedUserData = JSON.parse(localStorage.getItem("userDetails"));
    setUserData(storedUserData || {});
  }, []);

  return (
    <div>
      <NavBar />

      <div className="pt-[50px]">
        <div className="bg-[url()] bg-[#ececec] flex items-center justify-center min-h-screen text-[#9e9cb6]">
          <section className="w-full max-w-[430px] relative bg-[#231f39]/60 rounded-[6px] backdrop-blur-sm mx-2 overflow-hidden">
            <a
              href="/"
              target="_blank"
              className="absolute text-[#231f39] bg-yellow-400 rounded-[4px] top-6 left-6 px-2 py-1 text-sm font-bold roll-in-blurred-right"
            >
              Client
            </a>
            <a href="/" target="_blank" className="">
              <img
                src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                className="rounded-full w-[120px] mx-auto my-10 p-0 border-[6px] box-content border-[#231f39] shadow-[0px_27px_16px_-11px_rgba(31,27,56,0.25)] transition-all duration-150 ease-in hover:scale-105 cursor-pointer slide-in-elliptic-top-fwd"
                alt="Profile"
              />
            </a>
            <h1 className="text-xl font-bold text-center">
              {userData.name || "Test User"}
            </h1>
            <small className="block my-1 text-center">
              {userData.username || "testuser2"}
            </small>
            <div className="flex items-center justify-center gap-2 w-[80%] mx-auto mt-5 mb-10">
              <button className="flex-1 border border-[#1357DE] rounded-[4px] py-3 text-white bg-[#1357DE] transition-all duration-150 ease-in hover:bg-[#472e99]">
                Edit Profile
              </button>
              <button
                type="button"
                className="flex-1 border border-[#1357DE] text-[#ffffff] rounded-[4px] py-3 transition-all duration-150 ease-in hover:bg-[#472e99]  hover:text-white"
                onClick={logout}
              >
                Logout
              </button>
            </div>
            <div className="bg-[#1357DE]/70 p-4 text-sm font-semibold backdrop-blur-sm">
              <p>Contact</p>
              <ul className="flex mt-4 flex-wrap items-center justify-start gap-2 gap-y-3 [&>li]:border-2 [&>li]:border-[#2f2a47] [&>li]:px-3 [&>li]:py-1 [&>li]:rounded-[4px] [&>li]:transition-all [&>li]:duration-150 [&>li]:ease-in [&>li:hover]:scale-105 [&>li:hover]:cursor-pointer">
                <li>{userData.phone || "0771111111"}</li>
                <li>{userData.email}</li>
              </ul>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserProfile;
