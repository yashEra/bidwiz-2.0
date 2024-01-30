import React, { useState } from 'react';
import axios from 'axios';
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/Navbar";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('');


  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/users/login/', formData);

      console.log(response.data);
      Cookies.set('token', response.data.token, { expires: 7 });
      navigate('/user');
    } catch (error) {
      console.error('Error submitting form:', error);

      // Check if the error response includes the specific error message
      if (error.response && error.response.data && error.response.data.non_field_errors) {
        // Set the error message in state
        setErrorMessage('Wrong credentials. Please check your email and password.');

        // You may want to clear the error message after a certain time or on another user action
        // setTimeout(() => setErrorMessage(''), 5000); // Clears the error after 5 seconds
      }
    }
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post('http://127.0.0.1:8000/users/login/', formData);

  //     console.log(response.data);
  //     Cookies.set('token', response.data.token, { expires: 7 });
  //     navigate('/user')

      
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //   }
  // };

  return (
    <div>
      <NavBar />
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 lg:px-8 lg:pt-[10%] md:pt-[15%] pt-[20%] pb-[5%] px-[10%]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-[#1357DE]">
          Before Bidding Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
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
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-[#1357DE] hover:text-[#23A6F0]">
                    Forgot password?
                  </a>
                </div>
              </div>
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
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#1357DE] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#23A6F0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="signup" className="font-semibold leading-6 text-[#1357DE] hover:text-[#23A6F0]">
              Sign up now!
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
