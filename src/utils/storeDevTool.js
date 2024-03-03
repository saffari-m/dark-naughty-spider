import React, { useEffect, useRef } from "react";
import { render } from "react-dom";

export default function mountStoreDevtool(storeName, store, rootElement) {
  const externalUpdates = {
    count: 0,
  };

  const ZustandDevtool = (props) => {
    const allUpdatesCount = useRef(externalUpdates.count);

    useEffect(() => {
      allUpdatesCount.current += 1;
      if (allUpdatesCount.current === externalUpdates.count + 1) {
        allUpdatesCount.current -= 1;

        // DevTools update
        store.setState(props);
      }
    });

    return null;
  };

  ZustandDevtool.displayName = `((${storeName})) devtool`;

  if (!rootElement && typeof document !== "undefined") {
    let root = document.getElementById(`zustand-devtools-${storeName}`);
    if (!root) {
      root = document.createElement("div");
      root.id = `zustand-devtools-${storeName}`;
    }

    document.body.appendChild(root);
    rootElement = root;
  }

  const renderDevtool = (state) => {
    if (!state) {
      return;
    }
    render(<ZustandDevtool {...state} />, rootElement);
    externalUpdates.count += 1;
  };

  if (typeof document !== "undefined") {
    renderDevtool(store.getState());
    store.subscribe(renderDevtool);
  }
}
