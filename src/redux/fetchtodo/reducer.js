import { handleActions } from "redux-actions";
import * as constants from "../constants";
import update from "immutability-helper";
import data from "../../db.json";
import { NEW_VALUE } from "../constants";

const initialState = {
  data: data,
  isSuccess: false,
  message: "",
  clone: {},
  newValue: ""
};
const fetchSuccess = (state, action) => {
  return update(state, {
    message: { $set: "fetch success" }
  });
};
const toggleToDo = (state, action) => {
  console.log(action);
  return update(state, {
    data: {
      todolist: {
        [action.payload.index]: {
          completed: { $set: !action.payload.completed }
        }
      }
    }
  });
};
const addToDo = (state, action) => {
  console.log(action, state.data.todolist);
  return update(state, { newValue: { $set: action.payload } });
};
const addnewValue = (state, action) => {
  return update(state, {
    data: {
      todolist: { $push: [{ id: 5, name: state.newValue, completed: false }] }
    },
    newValue: { $set: "" }
  });
};
const foredit=(state,action)=>{
  console.log(action);
  return update(state,{data:{todolist:{[action.payload.index]:{name:{$set:action.payload.e}}}}
  })
}

export default handleActions(
  {
    [constants.LIST_TODO]: fetchSuccess,
    [constants.TOGGLE_TODO]: toggleToDo,
    [constants.NEW_VALUE]: addToDo,
    [constants.ADD_NEW_VALUE]: addnewValue,
    [constants.EDIT_TODO]:foredit,
    // [constants.IF_SUCCESS]: forSuccess,
    // [constants.NEW_VALUE]: targetEditValue,
    // [constants.ADD_NEW_VALUE]: addnewValue
  },
  initialState
);
