import React from "react";
import { ECurrencySymbols, ECurrencyCodes, IMerchPreview } from "../../../ts";
import { useCurrencySelector } from "../../../selectors";
import { roundToDecimal } from "../../../utils/math";

export function FeaturedMerch(props: IMerchPreview) {
  const currency = useCurrencySelector();

  return (
    <div className="cards-featured-merch">
      <img src={props.img} alt={props.img} />
      <div className="cards-featured-merch-details">
        <h2>{props.title}</h2>
        <p className="cards-featured-merch-description">{props.description}</p>
        {currency.base === currency.conversion ? (
          <div className="cards-featured-merch-price">
            <span>
              {ECurrencySymbols[currency.base]}
              {props.price} {ECurrencyCodes[currency.base]}
            </span>
          </div>
        ) : (
          <div className="cards-featured-merch-price">
            <span>
              <span className="cards-featured-merch-price-converted-currency ">
                {"Approx "}
              </span>
              {ECurrencySymbols[currency.conversion]}
              {roundToDecimal(props.price * currency.rate, 2)}{" "}
              {ECurrencyCodes[currency.conversion]}
            </span>
            <span className="cards-featured-merch-price-converted-currency ">
              {" "}
              ({ECurrencySymbols[currency.base]}
              {props.price} {ECurrencyCodes[currency.base]})
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
