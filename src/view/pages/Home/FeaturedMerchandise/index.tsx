import React from "react";
import { IMerchPreview } from "../../../../ts";
import classnames from "classnames";

export interface Props {
  merchs: IMerchPreview[];
}

export default function FeaturedMerchandise({ merchs }: Props) {
  if (!merchs || merchs.length === 0) return null;

  return (
    <section className="featured-merchandise">
      <div className="featured-merchandise-header">
        <h2>Featured Products</h2>
        <p>Discover our handpicked selection of popular items</p>
      </div>

      <FeaturedMerchandiseGrid merchs={merchs} />
    </section>
  );
}

function FeaturedMerchandiseGrid({ merchs }: Props) {
  return (
    <div className="featured-merchandise-grid">
      {merchs.slice(0, 6).map((merch, index) => (
        <FeaturedMerchCard key={index} merch={merch} index={index} />
      ))}
    </div>
  );
}

interface CardProps {
  merch: IMerchPreview;
  index: number;
}

function FeaturedMerchCard({ merch, index }: CardProps) {
  // Create different card sizes for visual interest
  const getCardSize = (index: number) => {
    if (index === 0) return "large";
    if (index === 1 || index === 2) return "medium";
    return "small";
  };

  const cardSize = getCardSize(index);

  return (
    <div
      className={classnames(
        "featured-merch-card",
        `featured-merch-card--${cardSize}`
      )}
      onClick={() => {
        // Add navigation to product page
        console.log("Navigate to product:", merch.title);
      }}
    >
      <div className="featured-merch-card-image">
        <img src={merch.img} alt={merch.title} />
        <div className="featured-merch-card-overlay">
          <button className="featured-merch-card-btn">View Product</button>
        </div>
      </div>

      <div className="featured-merch-card-content">
        <h3 className="featured-merch-card-title">{merch.title}</h3>
        {merch.description && (
          <p className="featured-merch-card-description">{merch.description}</p>
        )}
        {merch.price && (
          <div className="featured-merch-card-price">${merch.price}</div>
        )}
      </div>
    </div>
  );
}
