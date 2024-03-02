import prop from "./prop";
import defaultTheme from "@theme/default";
import { isEmpty } from 'lodash';


const theme = (path, defaultValue) => (props) => {
  const theme = isEmpty(props?.theme) ? defaultTheme : props?.theme;

  return prop(path, defaultValue)(theme);
};

export default theme;
