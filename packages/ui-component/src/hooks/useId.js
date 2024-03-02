import React from "react";
import useIsoMorphicEffect from "./useIsoMorphicEffect";
import useServerHandoffComplete from "./useServerHandoffComplete";

function uuid() {
  const hash = "abcdef0123456789";
  let uuid = [];
  for (let i = 0; i < 6; i++) {
    uuid[i] = hash[Math.floor(Math.random() * hash.length)];
  }

  return uuid.join("");
}

function useId() {
  let ready = useServerHandoffComplete();
  let [id, setId] = React.useState(ready ? uuid : null);

  useIsoMorphicEffect(() => {
    if (id === null) setId(uuid());
  }, [id]);

  return id != null ? "" + id : undefined;
}

export default useId;