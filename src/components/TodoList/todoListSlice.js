// ================== CÁCH 1 - SỬ DỤNG REDUX THUẦN =======================
// import { ADD_TODO, TOGGLE_TODO_STATUS } from "../../redux/constants";

// const initial = [
//   { id: 1, name: "Learn JavaScript", completed: false, priority: "High" },
//   { id: 2, name: "Learn ReactJs", completed: true, priority: "Medium" },
//   { id: 3, name: "Learn Redux", completed: false, priority: "Low" },
// ];

// const todoListReducer = (state = initial, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return [...state, action.payload];
//     case TOGGLE_TODO_STATUS:
//       const newTodo = state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//       return newTodo;
//     default:
//       return state;
//   }
// };

// export default todoListReducer;

// ================ CÁCH 2 - SỬ DỤNG REDUX-TOOLKIT ==================
import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
  name: "todoList",
  initialState: [
    { id: 1, name: "Learn JavaScript", completed: false, priority: "High" },
    { id: 2, name: "Learn ReactJs", completed: true, priority: "Medium" },
    { id: 3, name: "Learn Redux", completed: false, priority: "Low" },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if(currentTodo){
        currentTodo.completed = !currentTodo.completed;
      }
    },
  },
});

export default todoListSlice;
