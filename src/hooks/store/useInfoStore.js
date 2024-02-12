import { createStore } from "solid-js/store";

const infoStoreActions = {
  SET_NAME: "set-name",
  SET_LNAME: "set-lname",
  SET_INFO: "set-info",
};

const DEFAULT_STATE = {
  name: "Iman",
  lName: "Arjmandnia",
};

const infoStoreReducer = (state, action) => {
  switch (action.type) {
    case infoStoreActions.SET_NAME:
      setInfo({ ...info, name: state.name });
      break;
    case infoStoreActions.SET_LNAME:
      setInfo({ ...info, lName: state.lName });
      break;
    case infoStoreActions.SET_INFO:
      setInfo({ name: state.name, lName: state.lName });
      break;

    default:
      throw new Error();
  }
};

const [info, setInfo] = createStore(DEFAULT_STATE);

export { info, infoStoreReducer, infoStoreActions };
