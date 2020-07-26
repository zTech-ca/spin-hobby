import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useModalSelector } from "../../../selectors";
import { ModalMode } from "../../../actions/types";
import { hideModal } from "../../../actions";
import Login from "./Login";
import SignUp from "./SignUp";
import { LOGIN, SIGNUP } from "../../../actions/types";

export default function Modal() {
  const mode = useModalSelector();
  if (!mode) return null;
  return <TrueModal mode={mode} />;
}

function TrueModal({ mode }: { mode: ModalMode }) {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });

  function handleClick(e: MouseEvent) {
    if (!ref?.current || ref.current.contains(e.target as Node)) return;
    exitModal();
  }

  function exitModal() {
    dispatch(hideModal());
  }

  return (
    <div className="modal-background fade-in">
      <div className="modal" ref={ref}>
        <button className="modal-close" onClick={exitModal}>
          &times;
        </button>
        {mode === LOGIN && <Login />}
        {mode === SIGNUP && <SignUp />}
      </div>
    </div>
  );
}
