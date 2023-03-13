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
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        className="tmp-background-img"
        style={{
          objectFit: "cover",
          height: "100%",
          maxWidth: "50%",
        }}
        alt="mascot"
        src="assets/under development.png"
      />

      <div>
        <p>
          Spin Hobby's design and dev teams are working to bring new tone to the
          website. We expect to be back in April of 2023. We apologize for
          inconvenience.
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
        <div>
          Here are the list of confirmed events this year (Yes, there could be
          more!).
          <ul>
            <li>March 12th, 2023 - Edmonton Collector Con</li>
            <li>April 27th-30th, 2023 - Calgary Expo</li>
            <li>May 6th-7th, 2023 - Fort Fan Fest</li>
            <li>May 14th-16th, 2023 - Otafest</li>
            <li>July 14th-16th, 2023 - Animethon</li>
          </ul>
        </div>
        <p>
          For all inquiries, please feel free to message on facebook page or
          email us at info@ztech.ca
        </p>
        <p>We are looking forward to big launch this year of 2023!</p>
      </div>
    </div>

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
