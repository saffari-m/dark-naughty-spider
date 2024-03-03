import { color } from "../common/color";
import { typography } from "../common/typography";

export const input = {
  defaultColor: color.white,
  defaultLabelColor: color.neutral400,
  defaultPlaceholderColor: color.neutral400,
  defaultBackgroundColor: "transparent",
  defaultBorderColor: color.neutral400,
  defaultIconColor: color.neutral400,

  errorColor: color.red,
  errorBorderColor: color.red,

  disableColor: color.neutral700,
  disableBorderColor: color.neutral700,
  disableIconColor: color.neutral700,

  elementSpace: ".25rem",
  errorSpace: ".5rem",

  defaultBorderWidth: "1px",
  defaultPadding: "0.5rem",
  defaultLabelPadding: "0 0.5rem",
  defaultMargin: "0.5rem 0",

  defaultLabelFontSize: typography.caption,
  defaultFontSize: typography.bodySmall,
  errorFontSize: typography.footNote,
  defaultPlaceholderFontSize: typography.bodySmall,
};
