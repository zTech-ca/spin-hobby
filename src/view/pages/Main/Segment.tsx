import React from "react";
import CardRounded from "../Home/Merchandise/CardRounded";

interface SimpleCardData {
  label: string;
  img: string;
}

interface Props {
  label: string;
  cards: SimpleCardData[];
}

export function Segment(props: Props) {
  return (
    <div className="main-page-segment">
      <h2>{props.label}</h2>
      <div className="main-page-card-container">
        {/* <CardRounded
          img="/logo/external/facebook/FindUs-FB-RGB-1067.png"
          label="Figures"
        /> */}
      </div>
    </div>
  );
}
