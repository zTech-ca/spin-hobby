import React from "react";
import "./sass/main.scss";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./view/components/NavBar";
import Footer from "./view/components/Footer";
import Modal from "./view/components/Modal";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <Modal />
        <div className="main"></div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
