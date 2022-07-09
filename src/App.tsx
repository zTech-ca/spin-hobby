import React from "react";
import "./sass/main.scss";
import "react-phone-number-input/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./view/components/NavBar";
import Footer from "./view/components/Footer";
import Modal from "./view/components/Modal";
import Home from "./view/pages/Home";
import Cart from "./view/pages/Cart";
import CheckOut from "./view/pages/CheckOut";
import Search from "./view/pages/Search";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<CheckOut />} />
          <Route path='/search' element={<Search />} />
        </Routes>
        <Modal />
        {/* <div className="main">
          <Home />
        </div> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
