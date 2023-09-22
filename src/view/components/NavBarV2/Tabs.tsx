import React, { useState } from 'react';
import { BiHomeAlt2 } from "react-icons/bi"
import { RiBearSmileFill } from "react-icons/ri"
import { TbCards } from "react-icons/tb"
import { AiOutlinePlayCircle } from "react-icons/ai"
import { GiConsoleController } from "react-icons/gi"
import { FaPerson } from "react-icons/fa6"

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'Home', icon: <BiHomeAlt2 className="icon"/ >, content: 'home placeholder' },
    { label: 'Toys & Goods', icon: <RiBearSmileFill className="icon"/ >, content: 'toys and goods placeholder' },
    { label: 'Trading Cards', icon: <TbCards className="icon"/ >, content: 'cards placeholder' },
    { label: 'Video & Music', icon: <AiOutlinePlayCircle className="icon"/ >, content: 'video and music placeholder' },
    { label: 'Books and Games', icon: <GiConsoleController className="icon"/ >, content: 'book and games placeholder' },
    { label: 'Figure', icon: <FaPerson className="icon"/ >, content: 'firgure placeholder' },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-container">
      <ul className="tab-list">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`tab-item ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            <div className="tab-content">
              {tab.icon}
              <div className="tab-label">
                {tab.label}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <hr className="horizontal-line"></hr>
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

export default Tabs;