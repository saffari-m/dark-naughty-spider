import React from 'react';

function ConditionWrap({ condition, wrap, children }) {
  return condition ? wrap(children) : children;
}

export default ConditionWrap;
