import React from "react";
import { Segment } from "./Segment";

export function Main() {
  return (
    <div id="main-page">
      <Header />
      {["SHOP BY CATEGORY", "SHOP BY TITLE", "SHIPPING PROCESS"].map(
        (label) => (
          <Segment label={label} cards={[]} />
        )
      )}
    </div>
  );
}

function Header() {
  return (
    <div id="home-page-header">
      <div id="home-page-header-title">
        <h3>We ship from Japan</h3>
      </div>
      <div id="home-page-header-image">
        <img src="logo\SPIN-HOBBY-LOGO_アートボード 1 のコピー.png" alt="" />
      </div>
    </div>
  );
}
