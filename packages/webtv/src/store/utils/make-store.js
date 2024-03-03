import {
  createWithEqualityFn,
  useStoreWithEqualityFn,
} from "zustand/traditional";

import { shallow } from "zustand/shallow";

import mountStoreDevtool from "@utils/storeDevTool";

export default function makeStore(
  reducer,
  initialState,
  displayName = "Default"
) {
  const storeName = `${displayName}Store`;

  // Create state store using Zustand
  const createdStore = createWithEqualityFn(
    (set) => ({
      name: `${displayName}store`,
      ...initialState,
      dispatch: (args) => set((state) => reducer(state, args)),
    }),
    shallow
  );

  // Custom hook that return Zustand store
  function useStore(selector, equalityFn) {
    return useStoreWithEqualityFn(createdStore, selector, equalityFn);
  }

  // Custom hook that return Zustand store only dispatch part
  function useDispatch() {
    return useStoreWithEqualityFn(createdStore, (state) => state.dispatch);
  }

  if (process.env.NODE_ENV === "development") {
    mountStoreDevtool(storeName, createdStore);
  }

  return [useDispatch, useStore];
}
