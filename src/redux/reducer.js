import { combineReducers } from "redux";
import filterReducer from "../components/Filters/filtersSlice";
import todoListReducer from "../components/TodoList/todoListSlice";

//=========== Cách 1 =============
// const rootReducer = (state = {}, action) => {
//   return {
//     filters: filterReducer(state.filters, action),
//     todoList: todoListReducer(state.todoList, action),
//   }
// };

//========= Cách 2 - dùng hàm combineReducers() =============
const rootReducer = combineReducers({
  filters: filterReducer,
  todoList: todoListReducer,
});

export default rootReducer;
