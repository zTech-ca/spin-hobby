import React from "react";
import "./sass/main.scss";
import "react-phone-number-input/style.css";
//import { BrowserRouter } from "react-router-dom";
//import NavBar from "./view/components/NavBar";
//import Footer from "./view/components/Footer";
//import Modal from "./view/components/Modal";
//import Home from "./view/pages/Home";

function App() {
  return (
    <>
      <p>
        Spin Hobby is currently undergoing massive maintenance. We expect to be
        back by the beginning of March. We apologize for inconvenience.
      </p>
      <p>Follow us on facebook to keep updated!</p>

      <a href="https://www.facebook.com/profile.php?id=100084221636045">
        <div style={{ width: "200px" }}>
          <img
            style={{ height: "auto", maxWidth: "100%" }}
            src="/logo/external/facebook/FindUs-FB-RGB-1067.png"
            alt="find us on facebook"
          />
        </div>
      </a>
      <div style={{ width: "100px" }}>
        <img
          style={{ height: "auto", maxWidth: "100%" }}
          src="/QR/qrcode.svg"
          alt="find us on facebook"
        />
      </div>
      <p>
        For all inquiries, please feel free to message on facebook page or email
        us at info@ztech.ca
      </p>
      <p>Happy Holiday!</p>
    </>
  );

  //return (
  //<BrowserRouter>
  // <div className="app">
  // <NavBar />
  //<Modal />
  //<div className="main">
  // <Home />
  //</div>
  //<Footer />
  //</div>
  //</BrowserRouter>
  //);
}

export default App;
