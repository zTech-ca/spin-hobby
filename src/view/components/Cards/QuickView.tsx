import React, { useState } from "react";

interface Props {
  series?: string;
  name: string;
  price: number;
  categories: string[];
  images: string[];
}

export function QuickView(props: Props) {
  const [imageIndex, setImageIndex] = useState<number>(1);

  return (
    <div className="quick-view-card">
      <div className="quick-view-card-image-container">
        <img src={props.images[imageIndex]} alt={props.images[imageIndex]} />
      </div>
      <div className="quick-view-card-info">
        <div className="quick-view-card-image-toggle-container">
          <div
            className="quick-view-card-image-toggle-button quick-view-card-image-toggle-button-arrow"
            onClick={() =>
              setImageIndex((old) => (old ? old - 1 : props.images.length - 1))
            }
          >
            {"<"}
          </div>
          {Array(props.images.length)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="quick-view-card-image-toggle-button fade-in"
                onClick={() => setImageIndex(index)}
              >
                {index === imageIndex ? "◉" : "◎"}
              </div>
            ))}
          <div
            className="quick-view-card-image-toggle-button quick-view-card-image-toggle-button-arrow"
            onClick={() =>
              setImageIndex((old) => (old + 1) % props.images.length)
            }
          >
            {">"}
          </div>
        </div>
        <div className="quick-view-card-info-text">
          <div className="quick-view-card-info-categories">
            {props.categories.map((category, index) => (
              <p key={index}>{category}</p>
            ))}
          </div>
          <div className="quick-view-card-info-main">
            {props.series && <div>{props.series}</div>}
            <div>{props.name}</div>
            <div>{`CAD ${props.price}`}</div>
          </div>
          <div className="quick-view-card-info-quick-view">
            <div></div>
            <p>Quick view</p>
          </div>
        </div>
      </div>
    </div>
  );
}
