import { useState, useEffect } from "react";

let state = { serverHandoffComplete: false };

function useServerHandoffComplete() {
  let [serverHandoffComplete, setServerHandoffComplete] = useState(
    state.serverHandoffComplete
  );

  useEffect(() => {
    if (serverHandoffComplete === true) return;

    setServerHandoffComplete(true);
  }, [serverHandoffComplete]);

  useEffect(() => {
    if (state.serverHandoffComplete === false)
      state.serverHandoffComplete = true;
  }, []);

  return serverHandoffComplete;
}

export default useServerHandoffComplete;
