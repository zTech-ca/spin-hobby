import React from "react";
import { IMerchPreview } from "../../../../types/interfaces";
import { ECurrencySymbols } from "../../../../types/enum";
import { useCurrencySelector } from "../../../../selectors";
import currencyConverter from "../../../../utils/currencyConverter";

interface Props {
  merch: IMerchPreview;
  rounding?: number;
}

export default function CardStandard({ merch, rounding = 2 }: Props) {
  const currency = useCurrencySelector();
  return (
    <div className="home-merch-card-standard">
      <img src={merch.img} alt={merch.img} />
      <div className="home-merch-card-standard-details">
        <h4>{merch.title}</h4>
        <p>{merch.description}</p>
        <label className="home-merch-card-standard-price">
          {ECurrencySymbols[currency.conversion]}
          {currencyConverter(merch.price, currency, rounding)}
        </label>
      </div>
    </div>
  );
}
