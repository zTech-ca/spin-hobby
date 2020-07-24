import React from "react";
import { useModalSelector } from "../../../selectors";

export default function Modal() {
  const modal = useModalSelector();

  if (!modal) return null;
  return <div>SHOW TENSHI</div>;
}
