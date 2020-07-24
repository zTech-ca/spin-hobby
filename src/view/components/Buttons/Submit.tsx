import React from "react";
import classNames from "classnames";

interface ISubmitButton {
  text?: string;
  className?: string;
  noDefaultClass?: boolean;
}

export function Submit({
  text = "Submit",
  className,
  noDefaultClass = false,
}: ISubmitButton) {
  const buttonClasses = classNames(
    {
      "button-submit": !noDefaultClass,
    },
    className
  );
  return <input type="submit" value={text} className={buttonClasses} />;
}
