import React from "react";
import { IconType } from "react-icons";
import { FaUserAlt } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { TbWorld } from "react-icons/tb"
import { openModal } from "../../../reducers";
import { EModal } from "../../../ts";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface INavBarCommand {
  label: string;
  icon: IconType;
  onClick: () => void;
}

export default function Commands() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigateToCart = () => {
    navigate('/cart');
  }
  const commands: INavBarCommand[] = [
    { label: "Language", icon: TbWorld, onClick: null},
    { label: "Login", icon: FaUserAlt, onClick: handleLoginCommand },
    { label: "Cart", icon: RiShoppingCart2Line, onClick: navigateToCart}
  ];

  function handleLoginCommand() {
    dispatch(openModal(EModal.LOGIN));
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
