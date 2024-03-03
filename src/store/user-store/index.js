import makeStore from "@store/utils/make-store";

const userAction = {
  LOGIN: "login",
  LOGOUT: "logout",
  SET_ADDITIONAL_DATA: "set-additional-data",
  RESET: "reset",
};

const DEFAULT_STATE = {
  isLogin: false,
  isLoading: false,
  userInfo: null,
  additionalData: {},
};

const userReducer = (state, action) => {
  switch (action.type) {
    case userAction.LOGIN:
      return {
        ...state,
        userInfo: action.payload,
        isLogin: true,
        isLoading: false,
      };
    case userAction.LOGOUT:
      return {
        ...state,
        userInfo: null,
        isLogin: false,
        isLoading: false,
      };
    case userAction.SET_ADDITIONAL_DATA:
      return {
        ...state,
        additionalData: {
          ...state.additionalData,
          ...action.payload,
        },
      };
    case userAction.RESET:
      return { ...DEFAULT_VALUE, ...action.payload };
    default:
      throw new Error();
  }
};

const [useUserDispatch, useUserStore, userDispatch, userStore] = makeStore(
  userReducer,
  DEFAULT_STATE,
  "User"
);

export { useUserDispatch, useUserStore, userAction, userDispatch, userStore };
