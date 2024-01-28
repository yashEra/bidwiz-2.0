import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Categories from "./pages/Categories";
import SignUp from "./pages/Signup";
import ProductDes from "./pages/Product";
import NoPage from "./pages/NoPage";
import axios from "axios";
import Cookies from 'js-cookie';
import PrivateRoute from "./utils/PrivateRoute";

axios.defaults.withCredentials = true;

// if auth token available then config 
axios.interceptors.request.use(
  (config) => {
    // const authToken = 'test';
    const authToken = Cookies?.get('token');

    if (authToken) {
      config.headers.Authorization = `Token ${authToken}`;
    }

    return config;
  },
  (error) => {
    if (axios.isCancel(error)) {
      console.error('Request canceled:', error.message);
    } else if (error.response) {
      console.error('Server responded with an error:', error.response.data);
      console.error('Status code:', error.response.status);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Request setup error:', error.message);
    }
    return Promise.reject(error);
  }
);

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route element={<PrivateRoute />} >
            <Route path="categories" element={<Categories />} />
            <Route path="product-des" element={<ProductDes />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
