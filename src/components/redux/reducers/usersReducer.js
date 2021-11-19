import { actionTypes } from "../actions/actionTypes";

const initialUserState = {
  users: [],
  error: "",
  isLoading: false,
};

const usersReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case actionTypes.fetch_users_request:
      return { ...state, isLoading: true };
    case actionTypes.fetch_users_success:
      return { users: action.data, error: "", isLoading: false };
    case actionTypes.fetch_users_fail:
      return { users: [], error: action.error, isLoading: false };
    default:
      return state;
  }
};

export default usersReducer;
