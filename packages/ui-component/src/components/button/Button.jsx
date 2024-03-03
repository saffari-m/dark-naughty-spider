import React, { useState, useEffect } from "react";
import { cva } from "cva";
import PropTypes from "prop-types";
import cls from "classnames";

const buttonClassname = cva("btn", {
  variants: {
    type: {
      default: "rounded-2xs bg-surface-secondary-high text-icon-extra hover:bg-inverted focus:outline focus:outline-1 focus:-outline-offset-1 focus:outline-border-focus",
    },
    shape: "",
    size: {
      medium: "t-label-large p-3",
    },
  },
  compoundVariants: [
    {
      type: "default",
      size: "medium",
      className: "",
    },
  ],
  defaultVariants: {
    type: "default",
    size: "medium",
  },
});

function Button(props) {
  const {
    loading = false,
    type,
    shape,
    size,
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
  size: PropTypes.oneOf(["large", "medium", "small"]),
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
