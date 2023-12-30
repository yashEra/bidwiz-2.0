import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import Categories from "./components/pages/Categories";
import SignUp from "./components/pages/Signup";
import ProductDes from "./components/pages/Product";
import NoPage from "./components/pages/NoPage";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="about" element={<About/>} />
          <Route path="login" element={<Login/>} />
          <Route path="categories" element={<Categories/>} />
          <Route path="signup" element={<SignUp/>} />
          <Route path="product-des" element={<ProductDes/>} />
          <Route path="*" element={<NoPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
