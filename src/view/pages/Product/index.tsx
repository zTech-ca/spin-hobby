import React, { useEffect, useState } from "react";
import { getProductData } from "../../../api";
import ImageSlider from "./ImageSlider/ImageSlider";

export interface IProductData {}

export function Btn({ className, icon, txt, onClick, disabled }: any) {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {icon ? <img src={icon} alt="" /> : null}
      {txt}
    </button>
  );
}

export function MainRight() {
  return (
    <div className="mainRight">
      <h1 className="mainTitle">
        <span className="mainTitleSub">Brand name</span>
        <br />
      </h1>

      <p className="mainDescription">Description</p>

      <div className="mainPriceHold">
        <h1 className="mainPrice">
          ${"100.00"}
          <span className="mainDiscount">{10}%</span>
        </h1>
        <p className="mainPriceOld">${110}</p>
      </div>

      <div className="mainOpts">
        <div className="mainCount">
          <Btn
            className="mainCountBtn"
            txt={"-"}
            onClick={() => console.log("clicked")}
            disabled={false}
          />
          <input className="mainCountInput" type="text" value={0} readOnly />
          <Btn
            className="mainCountBtn"
            txt={"+"}
            onClick={() => console.log("clicked")}
          />
        </div>

        <Btn
          className="mainAddToCart"
          icon={""}
          txt="Add to cart"
          onClick={() => console.log("clicked")}
        />
      </div>
    </div>
  );
}

export default function Product() {
  const [productData, setProductData] = useState<IProductData | null>(null);

  useEffect(() => {
    getProductData()
      .then((data) => setProductData(data))
      .catch((err) => console.log("Error loading home route: ", err));
  }, []);

  if (!productData) return <p>Product do not exist</p>; // Replace with loading UI
  return (
    <>
      <main className="product-page">
        <div className="hold">
          <ImageSlider />
          <MainRight />
        </div>
      </main>
    </>
  );
}
