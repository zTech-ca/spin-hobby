import React, { Fragment } from "react";
import {
  IGroupedMerchPreview,
  IMerchPreview,
} from "../../../../types/interfaces";
import { useCurrencySelector } from "../../../../selectors";
import { roundToDecimal } from "../../../../utils/math";
import { ECurrencySymbols } from "../../../../types/enum";

interface Props {
  merchs: IGroupedMerchPreview[];
}

export default function Merchandise({ merchs }: Props) {
  const currency = useCurrencySelector();

  function displayGroupedMerchs(groups: IGroupedMerchPreview[]) {
    return groups.map((group, index) => (
      <Fragment key={index}>
        <div className="home-merchs-group">
          <h2>{group.name}</h2>
          <div className="home-merch-cards-container">
            {group.merchs.map((merch, index) => (
              <Fragment key={index}>{getMerchCard(merch)}</Fragment>
            ))}
          </div>
        </div>
        {group.subGroups && displayGroupedMerchs(group.subGroups)}
      </Fragment>
    ));

    function getMerchCard(merch: IMerchPreview) {
      return (
        <div className="home-merch-card">
          <img src={merch.img} alt={merch.img} />
          <div className="home-merch-card-details">
            <h4>{merch.title}</h4>
            <p>{merch.description}</p>
            <label className="home-merch-card-price">
              {ECurrencySymbols[currency.conversion]}
              {getConvertedPrice(merch.price)}
            </label>
          </div>
        </div>
      );
    }

    function getConvertedPrice(original: number) {
      return currency.base === currency.conversion
        ? original
        : roundToDecimal(original * currency.rate, 2);
    }
  }

  return <div className="home-merchs">{displayGroupedMerchs(merchs)}</div>;
}
