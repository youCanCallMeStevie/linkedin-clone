import { LOGIN } from "./app-actions";

const appReducer = (state, { type, payload }) => {
  console.log(type);
  switch (type) {
    case LOGIN:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};

export default appReducer;
