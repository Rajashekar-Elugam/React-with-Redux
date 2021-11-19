import { actionTypes } from "../actions/actionTypes";

const initialMobileState = {
  numberOfMobiles: 200,
};

const mobileReducer = (state = initialMobileState, action) => {
  switch (action.type) {
    case actionTypes.buy_mobile:
      return {
        numberOfMobiles: state.numberOfMobiles - 1,
      };
    default:
      return state;
  }
};

export default mobileReducer;
