import React, { useEffect, useRef, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface Props {
  label?: string;
  value?: string;
  classNames?: string;
  onChange: (newVal: string) => void;
  type?: string;
}

interface PasswordEyeProps {
  element?: HTMLInputElement;
}

export function InnerLabelInput(props: Props) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className={`input-inner-label ${props.classNames || ""}`}>
      <label>{props.label}</label>
      <div className="input-inner-label-input-container">
        <input
          ref={ref}
          title="Inner Label Input"
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
          type={props.type}
        />
        {props.type === "password" && <PasswordEye element={ref.current} />}
      </div>
    </div>
  );
}

function PasswordEye({ element }: PasswordEyeProps) {
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    if (element) element.type = show ? "text" : "password";
  }, [element, show]);
  return (
    <div
      className="input-inner-label-show-password-icon"
      onClick={() => setShow((old) => !old)}
    >
      {show ? <AiOutlineEyeInvisible size={30} /> : <AiOutlineEye size={30} />}
    </div>
  );
}
