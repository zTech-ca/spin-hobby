import React, { MouseEventHandler, useEffect, useRef } from "react";
import "./sass/main.scss";
import "react-phone-number-input/style.css";
import Modal from "view/components/Modal";
import { useDispatch } from "react-redux";
import { openModal } from "reducers";
import { EModal } from "ts";
//import { BrowserRouter } from "react-router-dom";
//import NavBar from "./view/components/NavBar";
//import Footer from "./view/components/Footer";
//import Modal from "./view/components/Modal";
//import Home from "./view/pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./view/components/NavBar";
import Footer from "./view/components/Footer";
// import Modal from "./view/components/Modal";
import Home from "./view/pages/Home";
import Cart from "./view/pages/Cart";
import CheckOut from "./view/pages/CheckOut";
import Search from "./view/pages/Search";
import Product from "view/pages/Product";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

let loaded = false;

function App() {
  const ref = useRef<HTMLIFrameElement>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (loaded) return;
    // dispatch(openModal(EModal.ANNOUNCEMENT));
    loaded = true;
  }, [dispatch]);

  // return (
  //   <>
  //     <Modal />
  //     <iframe
  //       src="https://spinhobby.square.site/"
  //       title="square"
  //       ref={ref}
  //       style={{
  //         width: "100%",
  //         height: "100%",
  //         border: 0,
  //         display: "block",
  //         position: "absolute",
  //       }}
  //     />
  //     {/* <div
  //       style={{
  //         position: "absolute",
  //         backgroundColor: "black",
  //         height: "166px",
  //         width: "100%",
  //         bottom: "0",
  //       }}
  //     /> */}
  //   </>
  // );

  // return (
  //   <Iframe
  //     // title="karano"
  //     url="https://spinhobby.square.site/"
  //     //       style="position:absolute; top:0px; left:0px;
  //     // width:100%; height:100%; border: none; overflow: hidden;"

  //     width="100%"
  //     height="100%"
  //     id=""
  //     className=""
  //     display="block"
  //     position="absolute"
  //     frameBorder={0}
  //   />
  // );

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
            <Route path="/product" element={<Product />} />
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
