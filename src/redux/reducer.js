
import { combineReducers } from "redux";
import fetchReducer from './fetchtodo/reducer'

const makeRootReducer = combineReducers({
            fetchReducer:fetchReducer
  });
  export default makeRootReducer;