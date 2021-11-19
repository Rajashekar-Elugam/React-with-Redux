import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import laptopReducer from "./reducers/laptopReducer";
import mobileReducer from "./reducers/mobileReducer";
import usersReducer from "./reducers/usersReducer";

const rootReducer = combineReducers({
  Laptops: laptopReducer,
  Mobiles: mobileReducer,
  Users: usersReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
