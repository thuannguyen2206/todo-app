// =================== CÁCH 1 - TẠO STORE BẰNG REDUX THUẦN ================

// import {createStore} from 'redux';
// import rootReducer from './reducer';

// const store = createStore(rootReducer);
// export default store;

// ================== CÁCH 2 - TẠO STORE BẰNG REDUX-TOOLKIT ==================

import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../components/Filters/filtersSlice";
import todoListSlice from "../components/TodoList/todoListSlice";

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});

export default store;