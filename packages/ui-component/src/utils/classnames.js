// TODO use this class names function istead of classnames library
export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
