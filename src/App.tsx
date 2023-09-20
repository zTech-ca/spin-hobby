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

    // <div
    //   style={{
    //     display: "flex",
    //     width: "100wv",
    //     // justifyContent: "space-around",
    //   }}
    // >
    //   <div style={{ width: "50%" }}>
    //     <p>
    //       Spin Hobby's design and dev teams are working to bring new tone to the
    //       website. We expect to be back by the beginning of April 2023. We
    //       apologize for inconvenience.
    //     </p>
    //     <p>Follow us on facebook to keep updated!</p>

    //     <a href="https://www.facebook.com/profile.php?id=100084221636045">
    //       <div style={{ width: "200px" }}>
    //         <img
    //           style={{ height: "auto", maxWidth: "100%" }}
    //           src="/logo/external/facebook/FindUs-FB-RGB-1067.png"
    //           alt="find us on facebook"
    //         />
    //       </div>
    //     </a>
    //     <div style={{ width: "100px" }}>
    //       <img
    //         style={{ height: "auto", maxWidth: "100%" }}
    //         src="/QR/qrcode.svg"
    //         alt="find us on facebook"
    //       />
    //     </div>
    //     <p>
    //       For all inquiries, please feel free to message on facebook page or
    //       email us at info@ztech.ca
    //     </p>
    //     <p>Happy Holiday!</p>
    //   </div>

    //   <div style={{ width: "50%" }}>
    //     <img
    //       style={{ position: "absolute", height: "100vh" }}
    //       alt="mascot"
    //       src="assets/mascot.png"
    //     />
    //   </div>
    // </div>
  );
}

export default App;
