import React, { useState, useEffect } from "react";
import { cva } from "cva";
import PropTypes from "prop-types";
import cls from "classnames";

const buttonClassname = cva(["btn"], {
  variants: {
    intent: {
      primary: [
        "bg-blue-500",
        "text-white",
        "border-transparent",
        "hover:bg-blue-600",
      ],
      // **or**
      // primary: "bg-blue-500 text-white border-transparent hover:bg-blue-600",
      secondary: [
        "bg-white",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-gray-100",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },
  compoundVariants: [
    {
      intent: "primary",
      size: "medium",
      class: "uppercase",
      // **or** if you're a React.js user, `className` may feel more consistent:
      // className: "uppercase"
    },
  ],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

// import { cx } from "@linaria/core";
// import LoadingIcon from "./LoadingIcon";

// import {
//   CButtonContent,
//   CButton,
//   CButtonDefault,
//   CButtonPrimary,
//   CButtonText,
//   CButtonLink,
//   CButtonMiddle,
//   CButtonLarge,
//   CButtonSmall,
//   CButtonCircle,
//   CButtonCircleMiddle,
//   CButtonCircleLarge,
//   CButtonCircleSmall,
//   CButtonRoundMiddle,
//   CButtonRoundLarge,
//   CButtonRoundSmall,
//   CButtonBlock,
//   CButtonGhost,
//   CButtonGhostPrimary,
//   CButtonGhostDefault,
//   CButtonIcon,
//   CButtonIconRound,
//   CButtonIconMiddle,
//   CButtonIconLarge,
//   CButtonIconSmall,
//   CButtonDisabled,
//   CButtonDisabledAll,
//   CButtonDisabledOutline,
//   CButtonDisabledAllGhosted,
// } from "./ButtonStyle";

// const getStyleClassname = ({
//   type,
//   shape,
//   size,
//   block,
//   ghost,
//   disabled,
//   iconOnly,
// }) => {
//   return cls(CButton, {
//     [CButtonDefault]: type === "default",
//     [CButtonPrimary]: type === "primary",
//     [CButtonText]: type === "text",
//     [CButtonLink]: type === "link",

//     [CButtonMiddle]: size === "default",
//     [CButtonLarge]: size === "large",
//     [CButtonSmall]: size === "small",

//     [CButtonCircle]: shape === "circle",
//     [CButtonCircleMiddle]: shape === "circle" && size === "default",
//     [CButtonCircleLarge]: shape === "circle" && size === "large",
//     [CButtonCircleSmall]: shape === "circle" && size === "small",
//     [CButtonRoundMiddle]: shape === "round" && size === "default",
//     [CButtonRoundLarge]: shape === "round" && size === "large",
//     [CButtonRoundSmall]: shape === "round" && size === "small",

//     [CButtonBlock]: block,
//     [CButtonGhost]: ghost,
//     [CButtonGhostDefault]: ghost && type === "default",
//     [CButtonGhostPrimary]: ghost && type === "primary",

//     [CButtonIcon]: iconOnly,
//     [CButtonIconRound]: iconOnly && shape === "round",
//     [CButtonIconMiddle]: iconOnly && size === "default",
//     [CButtonIconLarge]: iconOnly && size === "large",
//     [CButtonIconSmall]: iconOnly && size === "small",

//     [CButtonDisabled]: disabled,
//     [CButtonDisabledAll]: disabled && (type === "primary" || type === "default"),
//     [CButtonDisabledOutline]: disabled && (type === "text" || type === "link"),
//     [CButtonDisabledAllGhosted]: disabled && ghost ,
//   });
// };

function Button(props) {
  const {
    loading = false,
    type = "default",
    shape = "default",
    size = "default",
    disabled,
    children,
    className,
    icon,
    suffix,
    ghost = false,
    block = false,
    onClick,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType = "button",
    ...rest
  } = props;

  const [innerLoading, setLoading] = useState(!!loading);

  const iconType = innerLoading ? "loading" : icon;
  const iconOnly = !children && children !== 0 && !!iconType;

  const buttonState = {
    type: type,
    shape: shape,
    size: size,
    block: block,
    ghost: ghost,
    disabled: disabled,
    iconOnly: iconOnly,
  };

  // =============== Update Loading ===============
  const loadingOrDelay =
    typeof loading === "boolean" ? loading : loading?.delay || true;

  useEffect(() => {
    let delayTimer = null;

    if (typeof loadingOrDelay === "number") {
      delayTimer = window.setTimeout(() => {
        delayTimer = null;
        setLoading(loadingOrDelay);
      }, loadingOrDelay);
    } else {
      setLoading(loadingOrDelay);
    }

    return () => {
      if (delayTimer) {
        // in order to not perform a React state update on an unmounted component
        // and clear timer after 'loadingOrDelay' updated.
        window.clearTimeout(delayTimer);
        delayTimer = null;
      }
    };
  }, [loadingOrDelay]);

  const handleClick = (e) => {
    if (innerLoading || disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };
  const TagNode = props.href !== undefined ? "a" : "button";
  const iconNode =
    icon && !innerLoading ? icon : !!innerLoading ? "<LoadingIcon />" : "";
  const suffixNode = suffix ? suffix : "";
  const childNode =
    children || children === 0
      ? // <span
        //   // className={cx(CButtonContent)}
        //   style={{
        //     marginRight: iconNode ? "0.375rem" : "",
        //     marginLeft: suffixNode ? "0.375rem" : "",
        //   }}
        // >
        children
      : // </span>
        null;

  return (
    <TagNode
      {...rest}
      type={htmlType}
      onClick={handleClick}
      className={cls(buttonClassname(buttonState), className)}
      disabled={disabled}
    >
      {iconNode}
      {childNode}
      {suffixNode}
    </TagNode>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  htmlType: PropTypes.oneOf(["submit", "button", "reset"]),
  type: PropTypes.oneOf(["default", "primary", "link", "text"]),
  size: PropTypes.oneOf(["default", "large", "small"]),
  shape: PropTypes.oneOf(["default", "circle", "round"]),
  icon: PropTypes.node,
  suffix: PropTypes.node,
  block: PropTypes.bool,
  ghost: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      delay: PropTypes.number,
    }),
  ]),
};
export default Button;