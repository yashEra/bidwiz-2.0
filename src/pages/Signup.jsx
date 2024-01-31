import React, { useState } from "react";
import axios from "axios";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username:"",
    phoneNumber: "",
    birth_date:"",
    password: "",
    retypePassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate form data before submission
    if (formData.password !== formData.retypePassword) {
      console.error("Error: Passwords do not match");
      
      // You may want to show an error message to the user
      return;
    }
  
    const data = {
      ...formData,
      first_name: formData.firstName,
      last_name: formData.lastName,
      name: formData.firstName + " " + formData.lastName,
    };
  
    try {
      const response = await axios.post("http://127.0.0.1:8000/users/create-user/", data);
      console.log(response.data);
  
      // Check for the specific error condition in the response data
      if (response.data.email && response.data.email[0] === 'user with this email already exists.') {
        setErrorMessage('Email already exists. Please use a different email.');
  
        // setTimeout(() => setErrorMessage(''), 5000); // Clears the error after 5 seconds
      } else {
        // Handle other response scenarios or success cases
        navigate('/login');
      }
  
      // You may want to provide feedback to the user upon successful submission
    } catch (error) {
      console.error("Error submitting form:", error);
  
      // Access error response details
      if (error.response) {
        console.error("Server responded with error status:", error.response.status);
        console.error("Error details:", error.response.data);
        setErrorMessage('Email already exists. Please use a different email.');
        // setErrorMessage('An error occurred during submission. Please try again.');
      } else if (error.request) {
        console.error("No response received from the server");
        setErrorMessage('No response received from the server. Please try again later.');
      } else {
        console.error("Error setting up the request:", error.message);
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Validate form data before submission
  //   if (formData.password !== formData.retypePassword) {
  //     console.error("Error: Passwords do not match");
  //     // You may want to show an error message to the user
  //     return;
  //   }

  //   const data = {
  //     ...formData,
  //     first_name: formData.firstName,
  //     last_name: formData.lastName,
  //     name: formData.firstName + " " + formData.lastName,
  //   };

  //   try {
  //     const response = await axios.post("http://127.0.0.1:8000/users/create-user/", data);
  //     console.log(response.data);

  //     navigate('/login')

  //     if (response.email && response.email[0] === 'user with this email already exists.') {
  //       setErrorMessage('Email already exists. Please use a different email.');

  //       // setTimeout(() => setErrorMessage(''), 5000); // Clears the error after 5 seconds
  //     } else {
  //     }

  //     // You may want to provide feedback to the user upon successful submission
  //   } catch (error) {
      
  //     console.error("Error submitting form:", error);
    
  //     // Access error response details
  //     // if (error.response) {
  //     //   console.error("Server responded with error status:", error.response.status);
  //     //   console.error("Error details:", error.response.data);
  //     // } else if (error.request) {
  //     //   console.error("No response received from the server");
  //     // } else {
  //     //   console.error("Error setting up the request:", error.message);
  //     // }
    
  //     // You may want to show an error message to the user
  //   }
    
  // };
  return (
    <div>
      <NavBar />
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 lg:px-8 lg:pt-[10%] md:pt-[15%] pt-[20%] pb-[5%] px-[10%]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-[#1357DE]">
            Sign up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="firstname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                User Name
              </label>
              <div className="mt-2">
                <input
                  id="firstname"
                  name="username"
                  type="text"
                  autoComplete="text"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className="peer block w-full appearance-none border-0 border-b border-[#1357DE] bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#23A6F0] focus:outline-none focus:ring-0"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="firstname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="firstname"
                  name="firstName"
                  type="text"
                  autoComplete="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="peer block w-full appearance-none border-0 border-b border-[#1357DE] bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#23A6F0] focus:outline-none focus:ring-0"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="lastname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="lastname"
                  name="lastName"
                  type="text"
                  autoComplete="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="peer block w-full appearance-none border-0 border-b border-[#1357DE] bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#23A6F0] focus:outline-none focus:ring-0"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="peer block w-full appearance-none border-0 border-b border-[#1357DE] bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#23A6F0] focus:outline-none focus:ring-0"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phonenumber"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="phonenumber"
                  name="phoneNumber"
                  type="tel"
                  autoComplete="number"
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="peer block w-full appearance-none border-0 border-b border-[#1357DE] bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#23A6F0] focus:outline-none focus:ring-0"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phonenumber"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Birth date
              </label>
              <div className="mt-2">
                <input
                  id="phonenumber"
                  name="birth_date"
                  type="date"
                  autoComplete="number"
                  required
                  value={formData.birth_date}
                  onChange={handleChange}
                  className="peer block w-full appearance-none border-0 border-b border-[#1357DE] bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#23A6F0] focus:outline-none focus:ring-0"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="peer block w-full appearance-none border-0 border-b border-[#1357DE] bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#23A6F0] focus:outline-none focus:ring-0"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="retypepassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Retype Password
              </label>
              <div className="mt-2">
                <input
                  id="retypepassword"
                  name="retypePassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={formData.retypePassword}
                  onChange={handleChange}
                  className="peer block w-full appearance-none border-0 border-b border-[#1357DE] bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#23A6F0] focus:outline-none focus:ring-0"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#1357DE] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#23A6F0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            If you have an account?{" "}
            <a
              href="login"
              className="font-semibold leading-6 text-[#1357DE] hover:text-[#23A6F0]"
            >
              Sign in now!
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
