import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Layout(props: Props) {
  return (
    <div id="layout">
      <div id="centered-page">{props.children}</div>
    </div>
  );
}
