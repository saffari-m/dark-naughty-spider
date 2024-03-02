import { useEffect, useRef } from "react";
import useForceUpdate from "./useForceUpdate";
import ResponsiveObserve from "@utils/responsiveObserve";
import useIsClientSide from "@hooks/useIsClientSide.js";

function useBreakpoint(refreshOnChange = true) {
  const screensRef = useRef({});
  const forceUpdate = useForceUpdate();
  const isClientSide = useIsClientSide();

  useEffect(() => {
    if (isClientSide) {
      const token = ResponsiveObserve.subscribe((supportScreens) => {
        screensRef.current = supportScreens;
        if (refreshOnChange) {
          forceUpdate();
        }
      });

      return () => ResponsiveObserve.unsubscribe(token);
    }
  }, [isClientSide]);

  return screensRef.current;
}

export default useBreakpoint;
