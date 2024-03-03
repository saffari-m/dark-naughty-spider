import React, {createContext, useContext, useRef} from 'react';
import {createWithEqualityFn, useStoreWithEqualityFn} from 'zustand/traditional';

import {shallow} from 'zustand/shallow';

export default function makeStore(reducer, initialState, displayName = 'Store') {
  // Create context
  const Context = createContext();
  Context.displayName = `${displayName}Context`;

  // Create custom provider
  const StoreProvider = ({children, value}) => {
    // Create state store using Zustand
    const storeRef = useRef();
    if (!storeRef.current) {
      storeRef.current = createWithEqualityFn()((set) => ({
        ...initialState,
        ...value,
        dispatch: (args) => set((state) => reducer(state, args))
      }));
    }

    return <Context.Provider value={storeRef.current}>{children}</Context.Provider>;
  };

  // Custom hook that return Zustand store
  function useStore(selector, equalityFn) {
    const store = useContext(Context);
    if (!store) return;
    return useStoreWithEqualityFn(store, selector, equalityFn || shallow);
  }

  // Custom hook that return Zustand store only dispatch part
  function useDispatch() {
    const store = useContext(Context);
    if (!store) return;
    return useStoreWithEqualityFn(store, (state) => state.dispatch);
  }

  return [StoreProvider, useDispatch, useStore];
}
