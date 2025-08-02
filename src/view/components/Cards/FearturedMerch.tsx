import React, { useState } from "react";
import { ECurrencySymbols, ECurrencyCodes, IMerchPreview } from "../../../ts";
import { useCurrencySelector } from "../../../selectors";
import { roundToDecimal } from "../../../utils/math";
import classNames from "classnames";

interface Props extends IMerchPreview {
  additionalClassNames?: string;
  isCompact?: boolean;
  showQuickView?: boolean;
  onAddToCart?: (product: IMerchPreview) => void;
  onQuickView?: (product: IMerchPreview) => void;
  onToggleFavorite?: (product: IMerchPreview) => void;
}

export function FeaturedMerch(props: Props) {
  const currency = useCurrencySelector();
  const [isFavorited, setIsFavorited] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const {
    title,
    name,
    img,
    images,
    description,
    price,
    originalPrice,
    discountPercentage,
    isFeatured,
    isNewArrival,
    isPreorder,
    categories,
    additionalClassNames,
    isCompact,
    showQuickView = true,
    onAddToCart,
    onQuickView,
    onToggleFavorite,
  } = props;

  const displayTitle = title || name || "Untitled Product";
  const displayImage = img || (images && images[0]) || "";
  const displayPrice = price || 0;
  const hasDiscount = originalPrice && originalPrice > displayPrice;
  const discount = hasDiscount
    ? Math.round(((originalPrice - displayPrice) / originalPrice) * 100)
    : discountPercentage;

  const handleAddToCart = () => {
    onAddToCart?.(props);
  };

  const handleQuickView = () => {
    onQuickView?.(props);
  };

  const handleToggleFavorite = () => {
    setIsFavorited(!isFavorited);
    onToggleFavorite?.(props);
  };

  const getBadges = () => {
    const badges = [];
    if (isFeatured) badges.push({ text: "Featured", type: "featured" });
    if (isNewArrival) badges.push({ text: "New", type: "new" });
    if (isPreorder) badges.push({ text: "Pre-order", type: "preorder" });
    if (hasDiscount || discount)
      badges.push({ text: `${discount}% Off`, type: "sale" });
    return badges;
  };

  const getMetaInfo = () => {
    const meta = [];
    if (categories && categories.length > 0) {
      meta.push({ icon: "📂", text: categories[0].name || categories[0] });
    }
    if (isPreorder) {
      meta.push({ icon: "⏰", text: "Pre-order" });
    }
    return meta;
  };

  return (
    <div
      className={classNames([
        "cards-featured-merch",
        additionalClassNames,
        {
          compact: isCompact,
          loading: !imageLoaded && displayImage,
        },
      ])}
    >
      <div className="cards-featured-merch-image-container">
        {displayImage && (
          <img
            src={displayImage}
            alt={displayTitle}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
          />
        )}

        {getBadges().length > 0 && (
          <div className="cards-featured-merch-badges">
            {getBadges().map((badge, index) => (
              <span key={index} className={`badge ${badge.type}`}>
                {badge.text}
              </span>
            ))}
          </div>
        )}

        <button
          className={classNames("cards-featured-merch-favorite", {
            favorited: isFavorited,
          })}
          onClick={handleToggleFavorite}
          aria-label="Add to favorites"
        >
          {isFavorited ? "❤️" : "🤍"}
        </button>
      </div>

      <div className="cards-featured-merch-details">
        <h3 className="cards-featured-merch-title">{displayTitle}</h3>

        {description && (
          <p className="cards-featured-merch-description">{description}</p>
        )}

        {getMetaInfo().length > 0 && (
          <div className="cards-featured-merch-meta">
            {getMetaInfo().map((meta, index) => (
              <div key={index} className="meta-item">
                <span className="meta-icon">{meta.icon}</span>
                <span>{meta.text}</span>
              </div>
            ))}
          </div>
        )}

        <div className="cards-featured-merch-price-section">
          <div className="cards-featured-merch-price">
            <div>
              {currency.base === currency.conversion ? (
                <div className="price-current">
                  {ECurrencySymbols[currency.base]}
                  {displayPrice.toFixed(2)}
                </div>
              ) : (
                <>
                  <div className="price-current">
                    {ECurrencySymbols[currency.conversion]}
                    {roundToDecimal(displayPrice * currency.rate, 2)}
                  </div>
                  <div className="cards-featured-merch-price-converted-currency">
                    ({ECurrencySymbols[currency.base]}
                    {displayPrice.toFixed(2)} {ECurrencyCodes[currency.base]})
                  </div>
                </>
              )}
            </div>

            {hasDiscount && (
              <div className="price-original">
                {ECurrencySymbols[currency.base]}
                {originalPrice.toFixed(2)}
              </div>
            )}

            {discount && <div className="price-discount">{discount}% OFF</div>}
          </div>

          <div className="cards-featured-merch-actions">
            <button className="btn-add-to-cart" onClick={handleAddToCart}>
              <span className="btn-icon">🛒</span>
              Add to Cart
            </button>

            {showQuickView && (
              <button className="btn-quick-view" onClick={handleQuickView}>
                <span className="btn-icon">👁️</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
