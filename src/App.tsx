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
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function App() {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "ASauZ1kVM0kTP8lL9O0rnSOtm5reVWEI3rLAik4LM0bWOCkTPd_gXZpEzInq5-he6TKmfFotn9JDgGgr",
        components: "buttons",
        currency: "CAD",
      }}
    >
      <BrowserRouter>
        <div className="app">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/search" element={<Search />} />
          </Routes>
          <Modal />
          {/* <div className="main">
          <Home />
        </div> */}
          <Footer />
        </div>
      </BrowserRouter>
    </PayPalScriptProvider>
  );
}

export default App;
