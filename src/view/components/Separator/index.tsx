import React from "react";

interface Props {
  classNames?: string;
  text?: string;
}

export function Separator({ classNames = "", text }: Props) {
  return <div className={`separator ${classNames}`}>{text}</div>;
}
