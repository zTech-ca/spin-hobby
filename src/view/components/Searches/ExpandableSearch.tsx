import React, {
  useEffect,
  ChangeEvent,
  FormEvent,
  useState,
  useRef,
} from "react";
import { GoSearch } from "react-icons/go";
import classNames from "classnames";
import useOutsideClick from "../../../utils/useOutsideClick";

const defaultSize = 32;
const magnifierSizeRatio = 0.5;
const fontSizeRatio = 0.55;
const expandedSizeRatio = 8;
const transition = 0.3;

interface Props {
  onSubmit: (input: string) => void;
  classes?: string;
  size?: number;
  placeholder?: string;
}

export function ExpandableSearch({
  onSubmit,
  classes,
  size = defaultSize,
  placeholder,
}: Props) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { wrapperStyle, formStyle, iconWrapperStyle, inputStyle } = getStyles();

  useOutsideClick(wrapperRef, handleOutsideClick);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const currentRef = inputRef?.current;
    if (currentRef && expanded)
      timer = setTimeout(() => {
        currentRef.focus();
      }, transition * 1000);
    else {
      const currentRef = inputRef?.current;
      if (currentRef) currentRef.blur();
    }
    return () => {
      clearTimeout(timer);
    };
  }, [expanded]);

  function handleToggle() {
    setExpanded(!expanded);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(input);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  function getStyles() {
    const sizePx = `${size}px`;
    const wrapperStyle = {
      height: sizePx,
      width: expanded ? `${size * expandedSizeRatio}px` : sizePx,
      borderRadius: sizePx,
      transition: `${transition}s`,
    };
    const iconWrapperStyle = { height: sizePx, width: sizePx };
    const formStyle = { left: sizePx };
    const inputStyle = {
      width: `${size * (expandedSizeRatio - 1)}px`,
      fontSize: `${size * fontSizeRatio}px`,
    };
    return { wrapperStyle, formStyle, iconWrapperStyle, inputStyle };
  }

  function handleOutsideClick() {
    if (expanded) setExpanded(false);
  }

  return (
    <div
      className={classNames("search-expandable", classes)}
      ref={wrapperRef}
      style={wrapperStyle}
    >
      <div
        className="search-expandable-icon-wrapper"
        onClick={handleToggle}
        style={iconWrapperStyle}
      >
        <span>
          <GoSearch size={size * magnifierSizeRatio} />
        </span>
      </div>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="search"
          ref={inputRef}
          value={input}
          onChange={handleChange}
          style={inputStyle}
          placeholder={placeholder}
        />
      </form>
    </div>
  );
}
