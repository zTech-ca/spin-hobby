import React from "react";
import { IMerchPreview, ECurrencySymbols } from "../../../../ts";
import { useCurrencySelector } from "../../../../selectors";
import currencyConverter from "../../../../utils/currencyConverter";

interface Props {
  merch: IMerchPreview;
  rounding?: number;
}

export default function CardStandard({ merch, rounding = 2 }: Props) {
  const currency = useCurrencySelector();
  return (
    <>
      <div className="home-merch-card-standard-image-container">
        <img src={merch.img} alt={merch.img} />
      </div>
      <div className="home-merch-card-standard-details">
        <h4>{merch.title}</h4>
        <p>{merch.description}</p>
        <label className="home-merch-card-standard-price">
          {ECurrencySymbols[currency.conversion]}
          {currencyConverter(merch.price, currency, rounding)}
        </label>
      </div>
    </>
  );
}
