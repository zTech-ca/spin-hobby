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
      <div>
        Spin Hobby is currently undergoing maintenance and inventory change as
        we are attending special event the weekend of Oct 15-16, 2022. We're
        sorry for incovenience.
      </div>
      <p>
        We anticipate to be back online by Oct 17th, 2022 with complete new
        design.
      </p>
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
