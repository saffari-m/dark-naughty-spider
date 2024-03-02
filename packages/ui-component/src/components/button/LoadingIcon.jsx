import React from "react";
// import { cx } from "@linaria/core";

// import { CLoadingIcon } from "./ButtonStyle";

function LoadingIcon({ className, ...rest }) {
  return <span className={cx("tw-live")} {...rest} />;
}

export default LoadingIcon;
