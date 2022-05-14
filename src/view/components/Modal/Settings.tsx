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

export default function Settings() {
  const dispatch = useDispatch();
  const currency = useCurrencySelector();

  function onSelectCurrency(key: ECurrencies) {
    dispatch(setConversionCurrency(key));
  }

  return (
    <div className="modal-settings">
      <h2>Settings</h2>
      <label>Display Currency</label>
      <Dropdown
        selections={currencySelections}
        onSelect={onSelectCurrency}
        selected={currency.conversion}
        selectClasses="modal-settings-currency-select"
      />
    </div>
  );
}
