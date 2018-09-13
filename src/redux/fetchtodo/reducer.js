import { handleActions } from "redux-actions";
import * as constants from "../constants";
import update from "immutability-helper";
import data from "../../db.json";
import React from "react";

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
let itemId = 5;
const addToDo = (state, action) => {
  console.log(action, state.data.todolist);
  return update(state, { newValue: { $set: action.payload } });
};
const addnewValue = (state, action) => {
  return update(state, {
    data: {
      todolist: {
        $push: [{ id: itemId++, name: state.newValue, completed: false }]
      }
    },
    newValue: { $set: "" }
  });
};
const foredit = (state, action) => {
  console.log(action);
  return update(state, {
    data: {
      todolist: { [action.payload.index]: { name: { $set: action.payload.e } } }
    }
  });
};
const forDelete = (state, action) => {
  console.log(action);
  return update(state, {
    data: { todolist: { $splice: [[action.payload, 1]] } }
  });
};

export default handleActions(
  {
    [constants.LIST_TODO]: fetchSuccess,
    [constants.TOGGLE_TODO]: toggleToDo,
    [constants.NEW_VALUE]: addToDo,
    [constants.ADD_NEW_VALUE]: addnewValue,
    [constants.EDIT_TODO]: foredit,
    [constants.FOR_DELETE]: forDelete
  },
  initialState
);
