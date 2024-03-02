import { useState, useEffect } from "react";
import { window } from "global/window";
import { debounce } from 'lodash'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window?.innerWidth || 1280,
    height: window?.innerHeight || 800,
  });

  const handleResize = debounce(() => {
    setWindowSize({
      width: window?.innerWidth,
      height: window?.innerHeight,
    });
  }, 650);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};

export default useWindowSize;
