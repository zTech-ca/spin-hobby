import React from "react";
import { IconType } from "react-icons";
import { FaUserAlt } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { TiChevronRightOutline } from "react-icons/ti";

interface INavBarCommand {
  label: string;
  icon: IconType;
  onClick: () => void;
}

export default function Commands() {
  const commands: INavBarCommand[] = [
    { label: "Login", icon: FaUserAlt, onClick: () => {} },
    { label: "Cart", icon: RiShoppingCart2Line, onClick: () => {} },
    { label: "Request", icon: TiChevronRightOutline, onClick: () => {} },
  ];

  function getCommandButtons(commands: INavBarCommand[]) {
    return commands.map((command, index) => {
      const Icon = command.icon;
      return (
        <div
          key={`navbar-command-${index}-${command.label}`}
          className="navbar-command"
        >
          <Icon className="navbar-command-icon" size={"1.5em"} />
          <label>{command.label}</label>
        </div>
      );
    });
  }

  return <div className="navbar-commands">{getCommandButtons(commands)}</div>;
}
