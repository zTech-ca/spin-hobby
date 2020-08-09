import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useModalSelector } from "../../../selectors";
import { EModal } from "../../../types/enum";
import { hideModal } from "../../../reducers";
import Login from "./Login";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import Settings from "./Settings";

export default function Modal() {
  const mode = useModalSelector();
  if (!mode) return null;
  return <TrueModal mode={mode} />;
}

function TrueModal({ mode }: { mode: EModal }) {
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

  function getModalContent() {
    switch (mode) {
      case EModal.LOGIN:
        return <Login />;
      case EModal.SIGNUP:
        return <SignUp />;
      case EModal.FORGOT_PASSWORD:
        return <ForgotPassword />;
      case EModal.SETTINGS:
        return <Settings />;
      default:
        return null;
    }
  }

  return (
    <div className="modal-background fade-in">
      <div className="modal" ref={ref}>
        <button className="modal-close" onClick={exitModal}>
          &times;
        </button>
        {getModalContent()}
      </div>
    </div>
  );
}
