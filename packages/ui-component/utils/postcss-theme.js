import get from "lodash/get";

const dynamicValueRegex = /\"\$[a-zA-Z0-9.$]+\"/g;

function removeExtraCharacter(string, replace = '') {
  return string?.replace(/[$"?\[\]\{\}]/g, replace)
}

function getObjectProperty(object, value) {
  if (object == null) {
    // null or undefined
    return value;
  }
  let parseValue = value;
  const matches = value?.matchAll(dynamicValueRegex);
  for (const match of matches) {
    const path = removeExtraCharacter(match[0]);
    parseValue = parseValue.replace(match[0], get(object, path))
  }
  console.log("🚀 ~ file: postcss-theme.js ~ convert dynamic value css:", value, '  =>  ', parseValue)
  return parseValue;
}




function pluginCreator(opts) {
  const options = Object.assign(
    {
      prefix: "$",
      themes: [],
      themeSelector: ".theme",
    },
    opts
  );

  let { prefix, themeSelector, themes } = options;

  const reg = new RegExp(prefix.replace(/(?=(\W))/g, "\\"));

  return {
    postcssPlugin: "postcss-theme",
    OnceExit(css) {
      css.walk((node) => {
        const { type } = node;
        if (type === "decl" && reg.test(node.value)) {

          const transformedDecl = node.clone({
            value: getObjectProperty(themes.light, node.value),
          });

          node.value = getObjectProperty(themes.default, node.value);

          const processedSelectors = node.parent.clone().selectors.map((selector) => {
            return `${themeSelector.light} ${selector}`;
          });

          node.parent.cloneAfter({
            selector: processedSelectors,
            nodes: [transformedDecl],
          });
        }

        if (type === "atrule" && options.mediaQueries) {
        }

        if (type === "rule" && options.selectors) {
        }
      });
    },
  };
}

pluginCreator.postcss = true;

export default pluginCreator;
