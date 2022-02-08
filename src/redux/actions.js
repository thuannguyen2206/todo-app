import {
  ADD_TODO,
  SET_SEARCH_TEXT_FILTER,
  SET_STATUS_FILTER,
  SET_PRIORITIES_FILTER,
  TOGGLE_TODO_STATUS,
} from "./constants";

//============== TODO ================
const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

const toggleTodoStatus = (id) => {
  return {
    type: TOGGLE_TODO_STATUS,
    payload: id,
  };
};

//============= FILTER ================
const setSearchTextFilter = (text) => {
  return {
    type: SET_SEARCH_TEXT_FILTER,
    payload: text,
  };
};

const setStatusFilter = (status) => {
  return {
    type: SET_STATUS_FILTER,
    payload: status,
  };
};

const setPrioritiesFilter = (priorities) => {
  return {
    type: SET_PRIORITIES_FILTER,
    payload: priorities,
  };
};

export {
  addTodo,
  setSearchTextFilter,
  setStatusFilter,
  setPrioritiesFilter,
  toggleTodoStatus,
};
