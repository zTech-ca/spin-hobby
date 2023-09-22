import React, { useState } from "react";
import classNames from "classnames";

const tabs = ["All items", "Popular now", "Offered by fans"];

export function TabDisplay() {
  const [activeTab, setActiveTab] = useState<number>(0);

  function renderTabs() {
    return (
      <div className="home-merchs-display-tab-panel">
        <div className="home-merchs-display-tab-items-wrapper">
          {renderTabItems()}
        </div>
      </div>
    );
  }

  function renderTabItems() {
    return tabs.map((tab, index) => (
      <div
        key={index}
        onClick={() => setActiveTab(index)}
        className={classNames([
          "home-merchs-display-tab-item",
          {
            "home-merchs-display-tab-item-active": activeTab === index,
            "home-merchs-display-tab-item-inactive": activeTab !== index,
          },
        ])}
      >
        {tab}
      </div>
    ));
  }

  return (
    <div className="home-merchs">
      <div className="home-merchs-display">{renderTabs()}</div>
    </div>
  );
}
