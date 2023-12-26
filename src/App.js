import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
