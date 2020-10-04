import React from "react";

interface Props {
  img: string;
  alt?: string;
  label: string;
}

export default function CardRounded({ img, label, alt = img }: Props) {
  return (
    <div className="home-merch-card-rounded">
      <div className="home-merch-card-rounded-img-wrapper">
        <img src={img} alt={alt} />
      </div>
      <h2>{label}</h2>
    </div>
  );
}
