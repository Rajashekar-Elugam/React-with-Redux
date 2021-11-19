import axios from "axios";
import { actionTypes } from "./actionTypes";

export const buyLaptop = () => {
  return {
    type: actionTypes.buy_laptop,
  };
};

export const buyMobile = () => {
  return {
    type: actionTypes.buy_mobile,
  };
};

export const fetchUsersRequest = () => {
  return {
    type: actionTypes.fetch_users_request,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: actionTypes.fetch_users_success,
    data: users,
  };
};

export const fetchUsersFail = (error) => {
  return {
    type: actionTypes.fetch_users_fail,
    data: error,
  };
};

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        let users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFail(error));
      });
  };
};
