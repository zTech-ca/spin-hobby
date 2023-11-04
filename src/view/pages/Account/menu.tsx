import React from "react";
import { Content } from "./types";
import { menuItems } from "./constants";

interface Props {
  content: Content;
  onChange: (content: Content) => void;
}

export function Menu({ content, onChange }: Props) {
  return (
    <div id="account-menu">
      <div className="account-side-title">My account menu</div>
      <div id="account-menu-index">
        {menuItems.map((item, i) => (
          <>
            <div
              className={`account-menu-item ${
                item.content === content
                  ? "account-menu-item-selected"
                  : "account-menu-item-unselected"
              }`}
              key={i}
              onClick={() => onChange(item.content)}
            >
              <div>{item.label}</div>
              <item.icon size={26} />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
