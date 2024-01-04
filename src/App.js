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
