import { actionTypes } from "../actions/actionTypes";

const initialLaptopState = {
  numberOfLaptops: 100,
};

const laptopReducer = (state = initialLaptopState, action) => {
  switch (action.type) {
    case actionTypes.buy_laptop:
      return { numberOfLaptops: state.numberOfLaptops - 1 };
    default:
      return state;
  }
};

export default laptopReducer;
