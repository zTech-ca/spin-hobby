import React from "react";
import Dropdown from "../Dropdown";
import { availableCurrencyConversions } from "../../../ts/constants/currencies";
import {
  ECurrencies,
  ECurrencySymbols,
  ECurrencyCodes,
  ECurrencyTexts,
} from "../../../ts";
import { useCurrencySelector } from "../../../selectors";
import { setConversionCurrency } from "../../../reducers";
import { useDispatch } from "react-redux";

const currencySelections = availableCurrencyConversions.map((currency) => {
  return {
    key: currency,
    text: `${ECurrencyCodes[currency]}${ECurrencySymbols[currency]} ${ECurrencyTexts[currency]}`,
  };
});

export default function Announcement() {
  const dispatch = useDispatch();
  const currency = useCurrencySelector();

  function onSelectCurrency(key: ECurrencies) {
    dispatch(setConversionCurrency(key));
  }

  return (
    <div className="modal-announcement">
      {/* <h2>Settings</h2>
      <label>Display Currency</label>
      <Dropdown
        selections={currencySelections}
        onSelect={onSelectCurrency}
        selected={currency.conversion}
        selectClasses="modal-settings-currency-select"
      /> */}
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div
          className="tmp-background-img"
          style={{
            width: "48%",
            paddingRight: "10px",
          }}
        >
          <img
            style={{
              objectFit: "cover",
              height: "100%",

              //   maxWidth: "48%",
              width: "100%",
            }}
            alt="mascot"
            src="assets/thank you otafest-min.png"
          />
        </div>
        <div className="tmp-background-img-right">
          <h3>
            Thank you for supporting us at Otafest in the weekened of May
            19th-21st!
          </h3>
          <h4>
            We have listened and invested in the best inventory the result was
            highest sales recorded since our establishment!
          </h4>
          <p style={{ color: "red" }}>
            Our online service will fully resume in June.
          </p>
          <p>
            We apologize for inconvenience during this time. You may however
            continue to browse the inventory prior to the event. If we run out
            of stock, you may still request us.
          </p>
          <p>
            Here are the list of confirmed events this year and next year. More
            to come!
          </p>
          <ul>
            <li>March 12th, 2023 - Edmonton Collector Con</li>
            <li>April 27th-30th, 2023 - Calgary Fan Expo</li>
            <li>May 6th-7th, 2023 - Fort Fan Fest</li>
            <li>May 19th-21st, 2023 - Otafest</li>
            <li>July 14th-16th, 2023 - Animethon</li>
            <li>August 9th-11th, 2023 - AniRevo</li>
            <li>September 15th-17th, 2023 - Edmonton Fan Expo</li>
            <li>April 25th-28th, 2024 - Calgary Fan Expo</li>
          </ul>
          <p>
            If you are coming to any of those, please be sure to check us out!
          </p>
          <p>Follow us on facebook to keep updated!</p>

          <a href="https://www.facebook.com/profile.php?id=100084221636045">
            <div style={{ width: "200px" }}>
              <img
                style={{ height: "auto", maxWidth: "100%" }}
                src="/logo/external/facebook/FindUs-FB-RGB-1067.png"
                alt="find us on facebook"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
