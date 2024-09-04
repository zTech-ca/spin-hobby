import React from "react";
import { IconType } from "react-icons";

interface Props {
  icon?: IconType;
  text: string;
  classNames?: string;
}

export function StandardOptionalIcon(props: Props) {
  return (
    <div className={`button-standard-optional-icon ${props.classNames || ""}`}>
      {props.icon && (
        <div className="button-standard-optional-icon-icon">
          <props.icon size={35} />
        </div>
      )}
      {props.text}
    </div>
  );
}
