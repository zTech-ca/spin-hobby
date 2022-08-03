import React from "react";
import { ECurrencySymbols, ECurrencyCodes, IMerchPreview } from "../../../ts";
import { useCurrencySelector } from "../../../selectors";
import { roundToDecimal } from "../../../utils/math";
import classNames from "classnames";

interface Props extends IMerchPreview {
  additionalClassNames?: string;
}

export function FeaturedMerch(props: Props) {
  const currency = useCurrencySelector();

  return (
    <div
      className={classNames([
        "cards-featured-merch",
        props.additionalClassNames,
      ])}
    >
      <div className="cards-featured-merch-image-container">
        <img src={props.img} alt={props.img} />
      </div>
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
