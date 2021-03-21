import { LOGIN_SUCCESS } from "../actions";

const initialState = {
  login: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, login: true };
    default:
      return state;
  }
};
