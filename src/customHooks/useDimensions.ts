import { useEffect, useState } from "react";

interface WindowDimensions {
  width: number;
  height: number;
}

export function useDimensions() {
  const [dimensions, setDimensions] = useState<WindowDimensions>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return dimensions;
}
