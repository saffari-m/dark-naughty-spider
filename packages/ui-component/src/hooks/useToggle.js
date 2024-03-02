import { useState, useCallback } from 'react';

const useToggle = (initialState) => {
  const [state, setState] = useState(initialState);

  const enableState = useCallback(() => setState(true), []);
  const disableState = useCallback(() => setState(false), []);
  const toogleState = useCallback(() => setState((prevState) => !prevState), []);

  return [state, toogleState, enableState, disableState];
};

export default useToggle;
