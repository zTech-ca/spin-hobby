import React, { useState } from "react";
import { Menu } from "./Menu";
import { Summary } from "./Summary";
import { History } from "./History";
import { Address } from "./Address";
import { Password } from "./Password";
import { LogOut } from "./LogOut";
import { Content } from "./types";
import { menuItems } from "./constants";

export function Account() {
  const [content, setContent] = useState<Content>(Content.Summary);

  function getDetails() {
    switch (content) {
      case Content.Summary:
        return <Summary />;
      case Content.OrderHistory:
        return <History />;
      case Content.Address:
        return <Address />;
      case Content.ChangePassword:
        return <Password />;
      case Content.LogOut:
        return <LogOut />;
      default:
        return null;
    }
  }

  return (
    <div id="account">
      <div id="account-container">
        <div id="account-header">{`My Account → ${
          menuItems.find((item) => item.content === content)?.label
        }`}</div>
        <div id="account-content">
          <Menu content={content} onChange={(content) => setContent(content)} />
          <div id="account-content-right">
            <div className="account-side-title">
              Welcome, Firstname FamilyNAME
            </div>
            <div id="account-details">{getDetails()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
