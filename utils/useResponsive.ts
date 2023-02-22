import { useEffect, useLayoutEffect, useState } from "react";

import breakpoints from "../styles/breakpoints";
import viewportTypes from "@/styles/viewportTypes";

type Keys = keyof typeof viewportTypes;
type Values = typeof viewportTypes[Keys];

const useResponsive = () => {
  const [viewportType, setViewportType] = useState<Values>();

  function checkViewPort() {
    if (window.innerWidth > breakpoints.LARGE) {
      setViewportType(viewportTypes.LARGE);
    } else if (
      window.innerWidth < breakpoints.LARGE &&
      window.innerWidth > breakpoints.MEDIUM
    ) {
      setViewportType(viewportTypes.MEDIUM);
    } else {
      setViewportType(viewportTypes.SMALL);
    }
  }

  useLayoutEffect(() => {
    checkViewPort();
  }, []);

  useLayoutEffect(() => {
    window.addEventListener("resize", checkViewPort);
    return () => window.removeEventListener("resize", checkViewPort);
  }, []);

  return viewportType;
};

export default useResponsive;
