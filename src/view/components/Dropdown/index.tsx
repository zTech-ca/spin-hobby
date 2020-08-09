import React, { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import classNames from "classnames";

const noSelectionLabel = "Please select";

type keyType = any;

interface IDropdownItem {
  key: keyType;
  text: string;
}

interface Props {
  selections: IDropdownItem[];
  onSelect: (key: keyType) => void;
  selected: keyType | null;
  selectClasses?: string;
}

export default function Dropdown({
  selectClasses,
  onSelect,
  selected,
  selections,
}: Props) {
  const [open, setOpen] = useState<boolean>(false);

  const selectionClasses = classNames("dropdown-selection", selectClasses);

  function handleOnSelect(key: keyType) {
    setOpen(false);
    onSelect(key);
  }

  function getDropdownItems() {
    return selections.map((item, index) => {
      return (
        <button
          key={index}
          className="dropdown-item"
          onClick={() => handleOnSelect(item.key)}
        >
          <label>{item.text}</label>
        </button>
      );
    });
  }

  function getSelectedLabel() {
    const item = selections.find((item) => item.key === selected);
    return item?.text || noSelectionLabel;
  }

  return (
    <div className="dropdown">
      <div className={selectionClasses} onClick={() => setOpen(!open)}>
        <span>{open ? <MdArrowDropUp /> : <MdArrowDropDown />}</span>
        <label>{getSelectedLabel()}</label>
      </div>
      {open && <div className="dropdown-menu">{getDropdownItems()}</div>}
    </div>
  );
}
