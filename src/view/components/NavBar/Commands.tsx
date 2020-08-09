import React from "react";
import { IconType } from "react-icons";
import { FaUserAlt } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { TiChevronRightOutline } from "react-icons/ti";
import { FiSettings } from "react-icons/fi";
import { openModal } from "../../../reducers";
import { EModal } from "../../../types/enum";
import { useDispatch } from "react-redux";

interface INavBarCommand {
  label: string;
  icon: IconType;
  onClick: () => void;
}

export default function Commands() {
  const dispatch = useDispatch();
  const commands: INavBarCommand[] = [
    { label: "Login", icon: FaUserAlt, onClick: handleLoginCommand },
    { label: "Cart", icon: RiShoppingCart2Line, onClick: () => {} },
    { label: "Request", icon: TiChevronRightOutline, onClick: () => {} },
    { label: "Settings", icon: FiSettings, onClick: handleSettingsCommand },
  ];

  function handleLoginCommand() {
    dispatch(openModal(EModal.LOGIN));
  }

  function handleSettingsCommand() {
    dispatch(openModal(EModal.SETTINGS));
  }

  function getCommandButtons(commands: INavBarCommand[]) {
    return commands.map((command, index) => (
      <div
        key={`navbar-command-${index}-${command.label}`}
        className="navbar-command"
        onClick={command.onClick}
      >
        <command.icon className="navbar-command-icon" size={"1.5em"} />
        <label>{command.label}</label>
      </div>
    ));
  }

  return <div className="navbar-commands">{getCommandButtons(commands)}</div>;
}
