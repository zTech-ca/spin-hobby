import React from "react";
import "./sass/main.scss";
import "react-phone-number-input/style.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./view/components/NavBar";
import Footer from "./view/components/Footer";
import Modal from "./view/components/Modal";
import Home from "./view/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <Modal />
        <div className="main">
          <Home />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
