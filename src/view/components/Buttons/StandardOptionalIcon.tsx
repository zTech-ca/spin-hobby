import React from "react";
import { IconType } from "react-icons";

interface Props {
  icon?: IconType;
  onClick?: () => void;
  text: string;
  classNames?: string;
}

export function StandardOptionalIcon(props: Props) {
  return (
    <div
      className={`button-standard-optional-icon ${props.classNames || ""}`}
      onClick={props.onClick}
    >
      {props.icon && (
        <div className="button-standard-optional-icon-icon">
          <props.icon size={35} />
        </div>
      )}
      {props.text}
    </div>
  );
}
