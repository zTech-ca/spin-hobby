import React from "react";
import { ECurrencySymbols, ECurrencyCodes } from "../../../types/enum";
import { useCurrencySelector } from "../../../selectors";

const img = "https://static.zerochan.net/Toujou.Nozomi.full.2710162.png";
const title = "nontan nontan nontan nontan";
const description = `Love Live![a] School Idol Project is a Japanese multimedia project co-developed by ASCII Media Works' Dengeki G's Magazine, music label Lantis, and animation studio Sunrise. The project revolves around a group of nine schoolgirl friends who become idols in order to save their school from shutting down. It launched in the August 2010 issue of Dengeki G's Magazine, and went on to produce music CDs, anime music videos, two manga adaptations, and video games.

A 13-episode anime television series produced by Sunrise, directed by Takahiko Kyōgoku, and written by Jukki Hanada aired in Japan between January and March 2013, with a second season airing between April and June 2014. Both anime series and film are licensed in North America, the United Kingdom, Australia and New Zealand by NIS America, MVM Entertainment and Madman Entertainment, respectively. An animated film titled Love Live! The School Idol Movie was distributed by Shochiku and released in June 2015. A follow-up project focusing on a new set of idols, titled Love Live! Sunshine!!, launched in 2015.`;

const price = 50;

export function FeaturedMerch() {
  const currency = useCurrencySelector();

  return (
    <div className="cards-featured-merch">
      <img src={img} alt={img} />
      <div className="cards-featured-merch-details">
        <h2>{title}</h2>
        <p className="cards-featured-merch-description">{description}</p>
        <div className="cards-featured-merch-price">
          <span>
            {ECurrencySymbols[currency.base]}
            {price} {ECurrencyCodes[currency.base]}
          </span>
          {currency.base !== currency.conversion && (
            <span className="cards-featured-merch-price-converted-currency ">
              {" "}
              (Approx. {ECurrencySymbols[currency.conversion]}
              {price * currency.rate} {ECurrencyCodes[currency.conversion]})
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
