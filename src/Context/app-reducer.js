import { LOGIN } from "./app-actions";

const appReducer = (state, { type, payload }) => {
  console.log(type);
  switch (type) {
    case LOGIN:
      return {
        ...state,
        isAuth: true,
        currentUser: payload,
      };
    case LOGIN:
      return {
        ...state,
        isAuth: false,
        currentUser: "",
      };
    default:
      return state;
  }
};

export default appReducer;
