import { useLayoutEffect, useEffect } from "react";
import { isServer } from "../utils/ssr";

let useIsoMorphicEffect = isServer ? useEffect : useLayoutEffect;

export default useIsoMorphicEffect;
