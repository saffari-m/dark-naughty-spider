/* ---------------  Basic colors  --------------- */
import { color } from "./common/color";

/* ---------------  Components  --------------- */
import { button } from "./components/button";
import { card } from "./components/card";
import { divider } from "./components/divider";
import { input } from "./components/input.js";
import { skeleton } from "./components/skeleton";
import { slider } from "./components/slider";
import { stamp } from "./components/stamp";
import { tag } from "./components/tag";
import { drawer } from "./components/drawer";
import { select } from "./components/select";
import { datepicker } from "./components/datepicker";
import { modal } from "./components/modal";

/* ---------------  Supporting variables  --------------- */
import { gradient } from "./common/gradient";
import { typography } from "./common/typography";
import { breakpointSize } from "./common/breakpoint";
import { global } from "./common/global";

const isObject = (item) => {
  return item && typeof item === "object" && !Array.isArray(item);
};
const mergeDeep = (target, ...sources) => {
  if (!sources.length) return target;
  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key])
          Object.assign(target, {
            [key]: {},
          });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, {
          [key]: source[key],
        });
      }
    }
  }
  return mergeDeep(target, ...sources);
};

const componentOverride = {
  button: {
    primaryBackgroundColor: "green",
  },
  modal: {
    overlyBackground: color.transLightXL,
  },
  input: {
    defaultColor: color.black,
  },
  skeleton: {
    backgroundColor: color.neutral400,
    shimmerColor: color.neutral700,
  },
  tag: {
    defaultColor: color.neutral800,
    defaultBackgroundColor: color.white,
    defaultBorderColor: color.neutral100,

    checkableColor: color.neutral900,
    checkableBackgroundColor: color.white,
    checkableBorderColor: color.neutral100,

    checkableHoverBackgroundColor: color.neutral200,

    checkableCheckedColor: color.white,
    checkableCheckedBackgroundColor: color.red,
    checkableCheckedBorderColor: color.neutral100,
  },
  slider: {
    navigationColor: color.neutral900,
    navigationHoverColor: color.black,
    navigationBackground: color.white,

    navigationGradientHoverColor: color.white,
    navigationButtonBackground: color.transLightL,
  },
  divider: {
    lineColor: color.neutral200,
  },
  card: {
    defaultBackgroundColor: color.neutral100
  }
};

const theme = {
  color,
  global,
  breakpoint: breakpointSize,
  gradient,
  typography,
  input,
  button,
  card,
  divider,
  skeleton,
  slider,
  stamp,
  tag,
  drawer,
  select,
  datepicker,
  modal,
};

// export default deepMerge(theme, componentOverride, (key, a, b) =>
//   key === "a" ? a && b : Object.assign({}, a, b)
// );
export default mergeDeep({}, theme, componentOverride);
