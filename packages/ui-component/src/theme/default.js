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

export default theme;
