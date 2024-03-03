import React from "react";
import { cva } from "cva";
import PropTypes from "prop-types";
import cls from "classnames";

const buttonClassname = cva("typography", {
  variants: {
    type: {
      display: "",
      heading: "",
      label: "",
      paragraph: "",
    },
    size: {
      xl: "",
      l: "",
      m: "",
      s: "",
    },
    weight: {
      true: ''
    }
  },
  compoundVariants: [
    {
      type: "display",
      size: "l",
      className: "t-display-large",
    },{
      type: "display",
      size: "m",
      className: "t-display-medium",
    },{
      type: "heading",
      size: "xl",
      className: "t-heading-x-large",
    },{
      type: "heading",
      size: "l",
      className: "t-heading-large",
    },{
      type: "heading",
      size: "m",
      bold: false,
      className: "t-heading-medium",
    },{
      type: "heading",
      size: "m",
      bold: true,
      className: "t-heading-medium-s",
    },{
      type: "heading",
      size: "s",
      bold: false,
      className: "t-heading-small",
    },{
      type: "heading",
      size: "s",
      bold: true,
      className: "t-heading-small-s",
    },
    ,{
      type: "label",
      size: "l",
      bold: false,
      className: "t-label-large",
    },{
      type: "label",
      size: "l",
      bold: true,
      className: "t-label-large-s",
    },{
      type: "label",
      size: "m",
      bold: false,
      className: "t-label-medium",
    },{
      type: "label",
      size: "m",
      bold: true,
      className: "t-label-medium-s",
    },{
      type: "label",
      size: "s",
      className: "t-label-small",
    },{
      type: "paragraph",
      size: "l",
      bold: false,
      className: "t-paragraph-large",
    },{
      type: "paragraph",
      size: "l",
      bold: true,
      className: "t-paragraph-large-s",
    },,{
      type: "paragraph",
      size: "m",
      bold: false,
      className: "t-paragraph-medium",
    },{
      type: "paragraph",
      size: "m",
      bold: true,
      className: "t-paragraph-medium-s",
    },,{
      type: "paragraph",
      size: "s",
      bold: false,
      className: "t-paragraph-small",
    },{
      type: "paragraph",
      size: "s",
      bold: true,
      className: "t-paragraph-small-s",
    },
  ],
  defaultVariants: {
    type: "paragraph",
    size: "m",
    bold: false
  },
});

function Typography(props) {
  const {
    as: Element = "div",
    type,
    size,
    bold,
    children,
    className,
    ...rest
  } = props;

  return (
    <Element
      className={cls(buttonClassname({ type, size, bold }), className)}
      {...rest}
    >
      {children}
    </Element>
  );
}

Typography.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(["display", "heading", "label", "paragraph"]),
  size: PropTypes.oneOf(["xl", "l", "m", "s"]),
  bold: PropTypes.bool,
};
export default Typography;
