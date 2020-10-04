import { useEffect, RefObject } from "react";

export default function useOutsideClick(
  ref: RefObject<HTMLDivElement>,
  callback: () => void
) {
  useEffect(() => {
    document.addEventListener("click", handleClick);
    function handleClick(e: Event) {
      const current = ref.current;
      if (current && !current.contains(e.target as Node)) callback();
    }
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, callback]);
}
